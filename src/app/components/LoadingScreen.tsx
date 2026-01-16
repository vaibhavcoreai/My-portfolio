import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    const duration = 1800; // 1.8 seconds
    const steps = 60;
    const increment = 100 / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setProgress(100);
        clearInterval(interval);
        // Wait a bit before completing
        setTimeout(() => {
          onLoadingComplete();
        }, 300);
      } else {
        setProgress(current);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Calculate circle progress
  const circleRadius = 50;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f5f1e8]"
    >
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain-texture" />

      <div className="relative flex flex-col items-center gap-12">
        {/* Main initials/name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl tracking-tight font-light text-black">
            VM<span className="text-4xl md:text-5xl align-super"></span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-neutral-500 mt-4"
          >
            Vaibhav Manaji
          </motion.p>
        </motion.div>

        {/* Progress indicator - dual style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Circular progress indicator */}
          <div className="relative w-24 h-24">
            {/* Background circle */}
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r={circleRadius}
                stroke="rgba(0, 0, 0, 0.08)"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Progress circle */}
              <motion.circle
                cx="60"
                cy="60"
                r={circleRadius}
                stroke="rgba(0, 0, 0, 0.4)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset,
                }}
                transition={{
                  duration: 0.1,
                  ease: 'linear'
                }}
              />
            </svg>
            
            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-light text-neutral-400">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-light"
          >
            Loading journey
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}