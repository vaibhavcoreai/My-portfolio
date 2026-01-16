import { motion } from 'motion/react';
import { useState } from 'react';

const skills = [
  { name: 'Python & R', level: 60 },
  { name: 'Machine Learning', level: 30 },
  { name: 'Statistics & Probability', level: 50 },
  { name: 'Data Visualization', level:60 },
  { name: 'SQL & Database', level: 70 },
  { name: 'MLOps & Cloud (AWS/Azure)', level: 10 },
];

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.3em] uppercase mb-12 text-neutral-600">
            Skills
          </h2>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="cursor-hover"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex justify-between mb-3">
                  <motion.span
                    className="text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {skill.name}
                  </motion.span>
                  <motion.span
                    className="text-sm text-neutral-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="h-0.5 bg-neutral-300 overflow-hidden">
                  <motion.div
                    className="h-full bg-black"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}