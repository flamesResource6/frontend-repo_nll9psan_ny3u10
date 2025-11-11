import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useMemo } from 'react'

const Samosa = ({ delay = 0, size = 56, x = 0, y = 0, rotate = 0, opacity = 0.35 }) => {
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({
      y: [0, -20, 0],
      rotate: [rotate, rotate + 10, rotate],
      transition: { duration: 6 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut', delay },
    })
  }, [controls, delay, rotate])

  return (
    <motion.div
      initial={{ x, y, opacity }}
      animate={controls}
      className="pointer-events-none absolute"
      style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.15))' }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 4C20 18 8 40 8 52c0 6.627 10.745 8 24 8s24-1.373 24-8C56 40 44 18 32 4Z" fill="#F4B400"/>
        <path d="M12 48c8 3 20 4 20 4s12-1 20-4c0 6-9 10-20 10S12 54 12 48Z" fill="#D48806"/>
        <path d="M20 44c2 2 6 4 12 4s10-2 12-4" stroke="#8B5E00" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="26" cy="30" r="2" fill="#8B5E00"/>
        <circle cx="34" cy="26" r="2" fill="#8B5E00"/>
        <circle cx="40" cy="32" r="2" fill="#8B5E00"/>
      </svg>
    </motion.div>
  )
}

export default function AnimatedBackground() {
  const items = useMemo(() => new Array(12).fill(0).map((_, i) => ({
    key: i,
    size: 40 + Math.floor(Math.random() * 36),
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200) - 50,
    y: Math.random() * 200 - 100,
    delay: Math.random() * 2,
    rotate: Math.random() * 15,
    opacity: 0.25 + Math.random() * 0.25,
  })), [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,200,150,0.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,170,200,0.25),transparent_40%)]" />
      {items.map((it) => (
        <Samosa key={it.key} {...it} />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}
