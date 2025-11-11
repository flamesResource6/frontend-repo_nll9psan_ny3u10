import { motion } from 'framer-motion'

const items = [
  { name: 'Classic Potato', desc: 'Mashed potato, peas, spices', price: '$3.50', emoji: '🥔' },
  { name: 'Paneer Tikka', desc: 'Paneer, peppers, tikka masala', price: '$4.50', emoji: '🧀' },
  { name: 'Chicken Masala', desc: 'Juicy chicken, onions, garam masala', price: '$4.50', emoji: '🍗' },
  { name: 'Spicy Lamb', desc: 'Ground lamb, chili, coriander', price: '$5.00', emoji: '🌶️' },
  { name: 'Sweet Corn', desc: 'Corn, cream, pepper', price: '$3.75', emoji: '🌽' },
  { name: 'Chocolate', desc: 'Sweet treat, gooey center', price: '$3.25', emoji: '🍫' }
]

export default function Menu() {
  return (
    <section id="menu" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-extrabold text-amber-900 mb-8">
          Menu Highlights
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={it.name} initial={{ opacity: 0, y: 20, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-2xl border border-amber-200 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-amber-900">{it.name}</h3>
                  <p className="text-sm text-amber-800/80 mt-1">{it.desc}</p>
                </div>
                <div className="text-3xl">{it.emoji}</div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-amber-900">{it.price}</span>
                <button className="rounded-lg bg-amber-600 text-white px-3 py-1.5 text-sm font-semibold hover:bg-amber-700">Add</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
