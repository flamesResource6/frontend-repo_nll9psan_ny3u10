import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-amber-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4 py-3">
          <a href="#" className="font-extrabold text-amber-900 tracking-tight text-xl">Samosa</a>
          <nav className="hidden sm:flex items-center gap-8 text-amber-900">
            <a className="hover:text-amber-700" href="#menu">Menu</a>
            <a className="hover:text-amber-700" href="#about">About</a>
            <a className="hover:text-amber-700" href="#contact">Contact</a>
            <a className="ml-2 rounded-lg bg-amber-600 text-white px-4 py-2 font-semibold shadow hover:bg-amber-700" href="#order">Order</a>
          </nav>
          <button onClick={() => setOpen((v) => !v)} className="sm:hidden p-2 rounded-lg border border-amber-200 text-amber-900">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="sm:hidden mx-4 mt-2 rounded-xl border border-amber-200 bg-white/90 backdrop-blur">
            <div className="px-6 py-4 grid gap-3 text-amber-900">
              <a onClick={() => setOpen(false)} href="#menu" className="py-2">Menu</a>
              <a onClick={() => setOpen(false)} href="#about" className="py-2">About</a>
              <a onClick={() => setOpen(false)} href="#contact" className="py-2">Contact</a>
              <a onClick={() => setOpen(false)} href="#order" className="py-2 rounded-lg bg-amber-600 text-white text-center font-semibold">Order</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
