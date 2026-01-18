import { motion } from 'motion/react';

export function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 px-6 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#hero" className="text-sm tracking-[0.2em] uppercase">
          VM
        </a>

        <div className="flex gap-8 text-sm">
          {[
            { name: 'Journey', href: '#journey' },
            { name: 'Projects', href: '/projects' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' }
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="tracking-[0.1em] uppercase hover:text-neutral-600 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}