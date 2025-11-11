import { motion } from 'framer-motion'
import { ArrowRight, Flame, Star } from 'lucide-react'

export default function Hero({ onCta }) {
  return (
    <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-50 px-3 py-1 text-amber-700 mb-4">
            <Flame className="w-4 h-4" />
            Freshly fried goodness
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="text-4xl sm:text-6xl font-extrabold tracking-tight text-amber-900">
            Samosa House
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="mt-4 text-lg sm:text-xl text-amber-800 max-w-2xl">
            Crispy, golden, delicious. Handmade samosas with bold fillings and bold vibes.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onCta} className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 text-white px-5 py-3 font-semibold shadow-lg shadow-amber-600/30 hover:bg-amber-700 transition">
              Order now
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="#menu" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-amber-900 px-5 py-3 font-semibold border border-amber-200 hover:border-amber-300 transition">
              <Star className="w-4 h-4 text-amber-500" /> View menu
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-orange-50 to-white" />
      </div>
    </section>
  )
}
