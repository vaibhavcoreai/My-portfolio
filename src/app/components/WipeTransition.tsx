import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Optional alternative to RouteTransitionOverlay
 * Uses a vertical wipe effect inspired by Apple/Linear websites
 */
export function WipeTransition() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevPath, setPrevPath] = useState('');

  useEffect(() => {
    if (prevPath !== '' && prevPath !== location.pathname) {
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 900);

      return () => clearTimeout(timer);
    }
    setPrevPath(location.pathname);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <div className="fixed inset-0 z-[95] pointer-events-none">
          {/* Top half wipe */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
              duration: 0.6, 
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#FAF9F6] origin-top"
          >
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.02] grain-texture" />
          </motion.div>

          {/* Bottom half wipe */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ 
              duration: 0.6, 
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#FAF9F6] origin-bottom"
          >
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.02] grain-texture" />
          </motion.div>

          {/* Center line accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.1,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[1px] bg-black/20 origin-center"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
