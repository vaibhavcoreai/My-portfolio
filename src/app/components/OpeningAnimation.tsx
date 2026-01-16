import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [showInitials, setShowInitials] = useState(false);

  useEffect(() => {
    // Show initials immediately
    setShowInitials(true);
    
    // Complete the animation after the zoom + slide
    const timer = setTimeout(() => {
      onComplete();
    }, 1600); // Total duration: 0.8s zoom + 0.8s slide

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      {/* Full-screen dark background with initials */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ y: '-100%' }}
        transition={{
          y: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.8 },
        }}
        className="fixed inset-0 z-[200] bg-[#1a1a1a] flex items-center justify-center"
      >
        {/* Initials with zoom effect */}
        {showInitials && (
          <motion.div
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 1 }}
            transition={{
              scale: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              opacity: { duration: 0.5, ease: 'easeOut' },
            }}
            className="text-center"
          >
            <h1 className="text-8xl md:text-9xl tracking-tight font-light text-white">
              VM<span className="text-6xl md:text-7xl align-super"></span>
            </h1>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}