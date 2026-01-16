import { motion } from 'motion/react';

export function BackgroundCircles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
      {/* Small Circle 1 - positioned behind hero title */}
      <motion.div
        className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px]"
        style={{ left: 'calc(50% - 120px)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.03, 1],
          x: [-5, 5, -5],
          y: [-8, 8, -8],
        }}
        transition={{
          opacity: { duration: 1.2, ease: 'easeOut', delay: 0.3 },
          scale: { duration: 14, ease: 'easeInOut', repeat: Infinity },
          x: { duration: 16, ease: 'easeInOut', repeat: Infinity },
          y: { duration: 12, ease: 'easeInOut', repeat: Infinity },
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 450 450"
        >
          <circle
            cx="225"
            cy="225"
            r="220"
            fill="none"
            stroke="rgba(128, 128, 128, 0.2)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Small Circle 2 - positioned behind hero title, overlapping 8-10% */}
      <motion.div
        className="absolute w-[380px] h-[380px] md:w-[480px] md:h-[480px]"
        style={{ left: 'calc(50% + 95px)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.04, 1],
          x: [6, -6, 6],
          y: [10, -10, 10],
        }}
        transition={{
          opacity: { duration: 1.2, ease: 'easeOut', delay: 0.5 },
          scale: { duration: 18, ease: 'easeInOut', repeat: Infinity },
          x: { duration: 20, ease: 'easeInOut', repeat: Infinity },
          y: { duration: 15, ease: 'easeInOut', repeat: Infinity },
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 480 480"
        >
          <circle
            cx="240"
            cy="240"
            r="235"
            fill="none"
            stroke="rgba(128, 128, 128, 0.2)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.015] grain-texture pointer-events-none" />
    </div>
  );
}