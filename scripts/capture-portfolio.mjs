// Captures fresh screenshots of each live portfolio website (desktop 1440×900 and
// mobile 390×844, both at 2× pixel density) and saves optimised WebP files to
// public/images/portfolio/<slug>-desktop-<w>.webp and <slug>-mobile-<w>.webp.
//
// Uses a locally installed Chrome via the DevTools protocol (no extra dependencies):
// waits for fonts and every image in the viewport to load before capturing, so
// screenshots never show half-loaded pages.
//
// Usage: node scripts/capture-portfolio.mjs [slug ...]   (default: all sites below)
// Only capture websites you own or have permission to show.
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";

export const SITES = {
  "fuel-crisis-england": "https://www.fuelcrisisengland.co.uk/",
  "sterling-transfers": "https://sterling-transfers.vercel.app/",
  "renovation-resolution": "https://renovation-resolution1.vercel.app/",
  "eid-2026": "https://eid-website-2026.vercel.app/",
  "hot-food-house": "https://hot-food-house.vercel.app/",
  "noor-and-co": "https://noor-and-co-inky.vercel.app/",
  "addiesdive-catalogue": "https://addiesdive-catalogue.vercel.app/",
  "pakora-restaurant": "https://pakora-restaurant.vercel.app/",
  "premium-business-template": "https://premium-business-template-phi.vercel.app/",
};

const VIEWPORTS = {
  desktop: { width: 1440, height: 900, mobile: false, widths: [800, 1200, 1600] },
  mobile: { width: 390, height: 844, mobile: true, widths: [390, 780] },
};
const MOBILE_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";

const CHROME = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].find((p) => p && existsSync(p));
if (!CHROME) throw new Error("Chrome not found; set CHROME_PATH");

const OUT = "public/images/portfolio";
mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function startChrome() {
  const port = 9300 + Math.floor(Math.random() * 500);
  const profile = join(tmpdir(), `portfolio-capture-${port}`);
  const proc = spawn(CHROME, ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "--hide-scrollbars", "--no-first-run", "about:blank"], { stdio: "ignore" });
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
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      pending.set(++id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  const once = (method) => new Promise((r) => listeners.set(method, r));
  return new Promise((r) => (ws.onopen = () => r({ send, once, close: () => ws.close() })));
}

async function capture(port, url, vp) {
  const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" })).json();
  const page = await connect(target.webSocketDebuggerUrl);
  await page.send("Page.enable");
  await page.send("Emulation.setDeviceMetricsOverride", { width: vp.width, height: vp.height, deviceScaleFactor: 2, mobile: vp.mobile });
  if (vp.mobile) {
    await page.send("Emulation.setUserAgentOverride", { userAgent: MOBILE_UA });
    await page.send("Emulation.setTouchEmulationEnabled", { enabled: true });
  }
  const loaded = page.once("Page.loadEventFired");
  await page.send("Page.navigate", { url });
  await Promise.race([loaded, sleep(30000)]);
  // Let entrance animations finish, then wait for fonts and every image in view.
  await sleep(3500);
  await page.send("Runtime.evaluate", {
    awaitPromise: true,
    expression: `(async () => {
      await document.fonts.ready;
      const inView = [...document.images].filter((i) => { const r = i.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; });
      inView.forEach((i) => { i.loading = "eager"; });
      await Promise.all(inView.map((i) => i.complete && i.naturalWidth ? 0 : new Promise((r) => { i.onload = i.onerror = r; setTimeout(r, 8000); })));
      await Promise.all(inView.map((i) => i.decode ? i.decode().catch(() => 0) : 0));
    })()`,
  });
  await sleep(800);
  const { data } = await page.send("Page.captureScreenshot", { format: "png" });
  page.close();
  await fetch(`http://127.0.0.1:${port}/json/close/${target.id}`);
  return Buffer.from(data, "base64");
}

const slugs = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(SITES);
const { port, proc, profile } = await startChrome();
try {
  for (const slug of slugs) {
    const url = SITES[slug];
    if (!url) throw new Error(`Unknown slug ${slug}`);
    for (const [kind, vp] of Object.entries(VIEWPORTS)) {
      const png = await capture(port, url, vp);
      const sizes = [];
      for (const w of vp.widths) {
        const file = `${OUT}/${slug}-${kind}-${w}.webp`;
        const info = await sharp(png).resize({ width: w }).webp({ quality: 80, effort: 5 }).toFile(file);
        sizes.push(`${w}w ${Math.round(info.size / 1024)}KB`);
      }
      console.log(`${slug.padEnd(28)} ${kind.padEnd(8)} ${sizes.join(", ")}`);
    }
  }
} finally {
  proc.kill();
  await sleep(500);
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {}
}
