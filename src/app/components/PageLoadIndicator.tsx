import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Minimal top loading bar inspired by Vercel and Linear
 * Shows a subtle progress bar at the top during page transitions
 */
export function PageLoadIndicator() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 15;
      });
    }, 100);

    // Complete after delay
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 right-0 z-[99] h-[2px] bg-transparent"
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ 
              duration: 0.3, 
              ease: [0.43, 0.13, 0.23, 0.96] 
            }}
            className="h-full bg-gradient-to-r from-black/60 via-black/40 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
