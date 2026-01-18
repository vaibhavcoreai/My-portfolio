import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const isJourney = location.pathname === '/journey';
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (isJourney) {
      setShowOverlay(true);
      const timer = setTimeout(() => setShowOverlay(false), 1500);
      return () => clearTimeout(timer);
    } else {
      setShowOverlay(false);
    }
  }, [isJourney]);

  return (
    <>
      <AnimatePresence>
        {isJourney && showOverlay && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm tracking-widest uppercase"
            >
              Entering Journey
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
