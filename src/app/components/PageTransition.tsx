import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [showOverlay, setShowOverlay] = useState(isHome);

  useEffect(() => {
    if (!isHome) {
      setShowOverlay(false);
      return;
    }

    // Home-only intro
    setShowOverlay(true);
    const timer = setTimeout(() => setShowOverlay(false), 900);
    return () => clearTimeout(timer);
  }, [isHome]);

  return (
    <>
      {/* HOME overlay ONLY */}
      <AnimatePresence>
        {isHome && showOverlay && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-sm tracking-widest uppercase"
            >
              Entering journey
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page transition ONLY on HOME */}
      {isHome ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{
              duration: 0.7,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      ) : (
        // No animation on other routes
        <>{children}</>
      )}
    </>
  );
}
