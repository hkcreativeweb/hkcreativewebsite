// Captures supporting case-study screenshots (a chosen part of a live page at 1440 x 900) into
// public/images/portfolio/<name>-1440.webp. Same approach as capture-portfolio.mjs: a locally installed Chrome over the
// DevTools protocol, waiting for fonts and images before capturing. Only capture websites you own.
//
// Usage: node scripts/capture-gallery.mjs [name ...]   (default: all shots below)
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";

// `run` is JavaScript evaluated in the page before the capture (fill in a form, advance a step, scroll to a section).
const BASE = process.env.GALLERY_BASE || "https://rizqshop.co.uk"; // set GALLERY_BASE to capture a local build instead
const SHOTS = {
  "rizqshop-nikah-studio": {
    url: BASE + "/pages/nikah-invitations",
    run: `document.querySelector('#invite-gallery-title')?.scrollIntoView({ block: 'start' }); window.scrollBy(0, -20);`,
  },
  "rizqshop-nikah-preview": {
    url: BASE + "/pages/nikah-invitations",
    run: `(async () => {
      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      const setv = (id, v) => { const el = document.getElementById(id); if (!el) return; const p = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype; Object.getOwnPropertyDescriptor(p, 'value').set.call(el, v); el.dispatchEvent(new Event('input', { bubbles: true })); };
      for (let i = 0; i < 4; i++) {
        setv('inv-groom', 'Yusuf'); setv('inv-bride', 'Maryam'); setv('inv-date', '2027-05-16'); setv('inv-time', '14:00');
        setv('inv-venue', 'The Grand Hall'); setv('inv-address', '12 Rose Street, London');
        await wait(400);
        const next = [...document.querySelectorAll('button[type=submit]')].find((b) => /^Next/.test(b.textContent));
        if (!next) break;
        next.click();
        await wait(600);
      }
      await wait(1200);
      document.getElementById('invite-preview')?.scrollIntoView({ block: 'start' });
    })()`,
  },
  "rizqshop-certificates": {
    url: BASE + "/pages/nikah-certificates",
    run: `(async () => {
      const setv = (id, v) => { const el = document.getElementById(id); if (!el) return; Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, v); el.dispatchEvent(new Event('input', { bubbles: true })); };
      setv('cert-groom', 'Yusuf'); setv('cert-bride', 'Maryam'); setv('cert-date', '2027-05-16'); setv('cert-venue', 'The Grand Hall, London');
      await new Promise((r) => setTimeout(r, 1200));
      document.querySelector('h1')?.scrollIntoView({ block: 'start' });
    })()`,
  },
};

const CHROME = [process.env.CHROME_PATH, "C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/usr/bin/google-chrome"].find((p) => p && existsSync(p));
if (!CHROME) throw new Error("Chrome not found; set CHROME_PATH");
const OUT = "public/images/portfolio";
mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function startChrome() {
  const port = 9300 + Math.floor(Math.random() * 500);
  const profile = join(tmpdir(), `gallery-capture-${port}`);
  const proc = spawn(CHROME, ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "--hide-scrollbars", "--no-first-run"], { stdio: "ignore" });
  for (let i = 0; i < 50; i++) {
    try {
      await fetch(`http://127.0.0.1:${port}/json/version`);
      return { port, proc, profile };
    } catch {
      await sleep(200);
    }
  }
  throw new Error("Chrome did not start");
}

function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const listeners = new Map();
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    } else if (msg.method && listeners.has(msg.method)) listeners.get(msg.method)(msg.params);
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => { pending.set(++id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params })); });
  const once = (method) => new Promise((r) => listeners.set(method, r));
  return new Promise((r) => (ws.onopen = () => r({ send, once, close: () => ws.close() })));
}

async function capture(port, shot) {
  const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" })).json();
  const page = await connect(target.webSocketDebuggerUrl);
  await page.send("Page.enable");
  await page.send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false });
  const loaded = page.once("Page.loadEventFired");
  await page.send("Page.navigate", { url: shot.url });
  await Promise.race([loaded, sleep(30000)]);
  await sleep(3500);
  await page.send("Runtime.evaluate", { awaitPromise: true, expression: `document.fonts.ready.then(() => 0)` });
  await page.send("Runtime.evaluate", { awaitPromise: true, expression: shot.run });
  await sleep(1500);
  await page.send("Runtime.evaluate", { awaitPromise: true, expression: `(async () => { await document.fonts.ready; await Promise.all([...document.images].filter((i) => { const r = i.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; }).map((i) => (i.decode ? i.decode().catch(() => 0) : 0))); })()` });
  await sleep(600);
  const { data } = await page.send("Page.captureScreenshot", { format: "png" });
  page.close();
  await fetch(`http://127.0.0.1:${port}/json/close/${target.id}`);
  return Buffer.from(data, "base64");
}

const names = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(SHOTS);
const { port, proc, profile } = await startChrome();
try {
  for (const name of names) {
    if (!SHOTS[name]) throw new Error(`Unknown shot ${name}`);
    const png = await capture(port, SHOTS[name]);
    const info = await sharp(png).resize({ width: 1440 }).webp({ quality: 82, effort: 5 }).toFile(`${OUT}/${name}-1440.webp`);
    console.log(`${name.padEnd(28)} 1440w ${Math.round(info.size / 1024)}KB`);
  }
} finally {
  proc.kill();
  await sleep(500);
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {}
}
