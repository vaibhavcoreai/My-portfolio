import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { BackgroundCircles } from './BackgroundCircles';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background circles container - positioned in Hero section */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <BackgroundCircles />
      </div>

      {/* Animated lines background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-1/4 top-0 w-px h-full bg-neutral-300 opacity-20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.div
          className="absolute right-1/4 top-0 w-px h-full bg-neutral-300 opacity-20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>

      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p 
            className="text-sm tracking-[0.3em] uppercase mb-4 text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Aspiring Data Scientist | AI & ML Learner
          </motion.p>
          
          <motion.h1 
            className="text-6xl md:text-8xl mb-6 cursor-hover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            data-cursor-text="HELLO"
          >
            Vaibhav Manaji
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl max-w-2xl text-neutral-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            B.Sc. Data Science student specializing in machine learning and artificial intelligence, with hands-on experience in Python-based projects and data analysis.
          </motion.p>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            <motion.a
              href="#work"
              download=""
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-black rounded-full relative overflow-hidden cursor-hover bg-transparent hover:bg-black transition-colors duration-300"
              data-cursor-text="Navigate"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button content */}
              <span className="relative z-10 text-sm tracking-[0.2em] uppercase font-medium text-black group-hover:text-white transition-colors duration-300">
                Learning journey
              </span>
              
              <motion.div
                className="relative z-10"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Download className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - moved outside content div */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-600">
            Scroll
          </span>
          <div className="w-px h-12 bg-black" />
          
          {/* Animated mouse icon */}
          <div className="w-5 h-8 border-2 border-black rounded-full relative flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-black rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}