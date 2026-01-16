import { motion } from 'motion/react';

export function FloatingElements() {
  const elements = [
    { text: 'DESIGN', x: '10%', y: '20%', duration: 20 },
    { text: 'CREATE', x: '85%', y: '15%', duration: 25 },
    { text: 'DEVELOP', x: '15%', y: '70%', duration: 30 },
    { text: 'INSPIRE', x: '80%', y: '75%', duration: 22 },
    { text: '•', x: '45%', y: '30%', duration: 15 },
    { text: '•', x: '60%', y: '85%', duration: 18 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-neutral-300 text-sm tracking-[0.3em] opacity-20"
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {el.text}
        </motion.div>
      ))}
    </div>
  );
}
