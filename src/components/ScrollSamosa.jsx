import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollSamosa() {
  const { scrollYProgress } = useScroll()
  // Subtle vertical drift tied to scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12])
  const opacity = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 1])

  const size = 84

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 block"
      style={{ y, rotate, opacity, filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.18))' }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
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
