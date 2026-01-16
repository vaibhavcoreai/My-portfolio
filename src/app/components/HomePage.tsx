import { motion } from 'motion/react';
import { CustomCursor } from './CustomCursor';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { ScrollProgress } from './ScrollProgress';
import { FloatingElements } from './FloatingElements';
import { CornerAnimations } from './CornerAnimations';

export function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="bg-[#f5f1e8] text-black min-h-screen cursor-none relative overflow-hidden"
    >
      {/* Corner fluid animations */}
      <CornerAnimations />
      
      {/* Main content */}
      <div className="relative z-20">
        <CustomCursor />
        <ScrollProgress />
        <FloatingElements />
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </motion.div>
  );
}