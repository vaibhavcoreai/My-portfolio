import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.3em] uppercase mb-12 text-neutral-600">
            About
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-2xl md:text-3xl leading-relaxed mb-8 cursor-hover">
                 I believe in learning through data—using analysis and AI to understand problems before solving them.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-neutral-700 leading-relaxed">
                I'm Vaibhav, a Data Science and AI student with a deep passion for technology, continuous learning, and analytical problem-solving.
                I focus on building strong foundations, exploring real-world applications, and growing through hands-on projects and experimentation.
                Beyond academics, I enjoy expressing creativity through music—playing the piano, sitar, and flute—and through writing blogs and short stories.
                This portfolio reflects my learning journey, creative interests, and the work I build along the way.
              </p>
              
              <p className="text-neutral-700 leading-relaxed">
               I value focused, deliberate work and believe in learning deeply and improving consistently. 
                Whether I’m writing code, strengthening my understanding of core concepts, or refining this portfolio, 
                I approach each step as part of a long-term journey of growth.
              </p>
              
              <div className="pt-8">
                <h3 className="text-sm tracking-[0.2em] uppercase mb-4 text-neutral-600">
                  Skills in Progress
                </h3>
                <ul className="space-y-3">
                  {['python for Data Science', 'Statistics & Probability', 'SQL & Databases', 'Machine Learning Fundamentals'].map((service, i) => (
                    <motion.li
                      key={service}
                      className="cursor-hover text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}