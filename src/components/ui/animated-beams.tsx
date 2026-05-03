'use client'

import { motion } from 'framer-motion'

// 14 rays in a full 360° halo — alternating purple/violet/white
const BEAM_COUNT = 14
const beams = Array.from({ length: BEAM_COUNT }, (_, i) => {
  const angle = (i * 360) / BEAM_COUNT
  const isMajor = i % 3 === 0
  const colors = [
    'rgba(124,58,237,0.65)',
    'rgba(139,92,246,0.45)',
    'rgba(167,139,250,0.30)',
    'rgba(255,255,255,0.12)',
  ]
  return {
    angle,
    length: isMajor ? 680 : 380 + (i % 4) * 70,
    color: colors[i % 4],
    width: isMajor ? 3 : 1.5,
    duration: 3.2 + (i % 5) * 0.6,
    delay: (i / BEAM_COUNT) * 2.2,
  }
})

export function AnimatedBeams() {
  return (
    // Anchored to the robot's visual center (right side of hero)
    <div
      className="absolute pointer-events-none"
      style={{ right: '26%', top: '50%', transform: 'translate(50%,-50%)', zIndex: 1 }}
    >
      {beams.map((beam, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: beam.length,
            height: beam.width,
            background: `linear-gradient(to right, ${beam.color}, transparent)`,
            filter: 'blur(1.5px)',
            transformOrigin: 'left center',
            rotate: beam.angle,
          }}
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            delay: beam.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Tight core glow */}
      <motion.div
        style={{
          position: 'absolute',
          width: 180,
          height: 180,
          left: -90,
          top: -90,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)',
          filter: 'blur(16px)',
        }}
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Wide ambient halo */}
      <motion.div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          left: -350,
          top: -350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(109,40,217,0.10) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
    </div>
  )
}
