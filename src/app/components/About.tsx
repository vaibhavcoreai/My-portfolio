import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl w-full" ref={containerRef}>
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* Portrait Image Section */}
          <div className="md:col-span-5 relative z-10 order-first">
            <motion.div
              style={{ y }}
              className="relative aspect-[3/4] w-full max-w-sm mx-auto md:max-w-none md:w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-neutral-200/50"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <img
                src="/portrait.png"
                alt="Vaibhav Portrait"
                className="w-full h-full object-cover grayscale-[15%] contrast-[0.95] hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              {/* Subtle Overlays for Editorial Feel */}
              <div className="absolute inset-0 bg-[#f5f5f1] opacity-10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 grain-texture opacity-20 mix-blend-overlay pointer-events-none" />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="md:col-span-7 md:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-10%" }}
            >
              {/* Floating Title - Overlaps visually on large screens due to column offset */}
              <h2 className="text-sm tracking-[0.3em] uppercase mb-8 md:mb-10 text-neutral-500 font-medium md:-ml-8 relative z-20">
                About
              </h2>

              <div className="space-y-8">
                <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light text-neutral-800 tracking-tight">
                  I believe in learning through data—using analysis and AI to understand problems before solving them.
                </p>

                <div className="space-y-6 text-neutral-600 leading-relaxed text-lg max-w-2xl font-light">
                  <p>
                    I'm Vaibhav, a Data Science and AI student with a deep passion for technology, continuous learning, and analytical problem-solving.
                    I focus on building strong foundations, exploring real-world applications, and growing through hands-on projects and experimentation.
                  </p>
                  <p>
                    Beyond academics, I enjoy expressing creativity through music—playing the piano, sitar, and flute—and through writing blogs and short stories.
                    This portfolio reflects my learning journey, creative interests, and the work I build along the way.
                  </p>
                  <p>
                    I value focused, deliberate work and believe in learning deeply and improving consistently.
                    Whether I’m writing code, strengthening my understanding of core concepts, or refining this portfolio,
                    I approach each step as part of a long-term journey of growth.
                  </p>
                </div>

                <div className="pt-10 border-t border-neutral-100 mt-10">
                  <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-neutral-400 font-semibold">
                    Focus Areas
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-3 md:gap-x-6">
                    {['Python for Data Science', 'Statistics & Probability', 'SQL & Databases', 'Machine Learning'].map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="text-sm md:text-base text-neutral-700 relative group cursor-default whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      >
                        <span className="relative z-10">{skill}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}