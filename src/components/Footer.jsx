import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <footer id="contact" className="relative py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-amber-200 bg-white/70 backdrop-blur p-6 text-amber-900">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold">Samosa House</h4>
              <p className="text-amber-800/80">Crispy happiness, made daily.</p>
            </div>
            <p className="text-sm text-amber-800/80">© {new Date().getFullYear()} Samosa House. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
