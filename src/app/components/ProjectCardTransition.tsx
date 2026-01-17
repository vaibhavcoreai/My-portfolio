import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';


interface ProjectCardTransitionProps {
  projectTitle?: string;
  isActive?: boolean;
}

export function ProjectCardTransition({ projectTitle, isActive }: ProjectCardTransitionProps) {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [displayTitle, setDisplayTitle] = useState('');
  const [prevPath, setPrevPath] = useState('');

  // Handle route-based transitions
  useEffect(() => {
  // ❌ DO NOTHING on BACK / FORWARD
  if (navigationType === 'POP') {
    setPrevPath(location.pathname);
    setIsTransitioning(false);
    return;
  }

  // ✅ ONLY animate on forward navigation INTO a project
  if (prevPath && prevPath !== location.pathname) {
    if (location.pathname.includes('/project/')) {
      setIsTransitioning(true);
      setDisplayText('OPENING JOURNEY');

      if (!projectTitle) {
        const projectId = location.pathname.split('/').pop()!;
        setDisplayTitle(projectId.replace(/-/g, ' '));
      } else {
        setDisplayTitle(projectTitle);
      }

      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }

  setPrevPath(location.pathname);
}, [location.pathname, navigationType, projectTitle]);


  // Determine if we should show the overlay
  const shouldShow = isActive || (isTransitioning && location.pathname.includes('/project/'));
  const title = projectTitle || displayTitle;
  const text = displayText;


  return (
    <AnimatePresence>
      {shouldShow && (
        <>
          {/* Fullscreen overlay with grain and blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[98] bg-[#FAF9F6] pointer-events-none overflow-hidden"
          >
            {/* Grain texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] grain-texture" />

            {/* Subtle gradient vignette */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/5" />

            {/* Center content with project title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.43, 0.13, 0.23, 0.96] 
                }}
                className="text-center max-w-3xl px-6"
              >
                {/* Project Title (if present) */}
                {title && (
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl mb-8 font-light tracking-tight"
                    style={{ 
                      filter: 'blur(0px)',
                      textShadow: '0 0 20px rgba(0,0,0,0.05)'
                    }}
                  >
                    {title}
                  </motion.h2>
                )}

                {/* Animated progress line */}
                <motion.div 
                  className="relative h-[1px] w-64 mx-auto bg-black/8 overflow-hidden mb-8"
                  initial={{ opacity: 0, scaleX: 0.8 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 1.2,
                      ease: [0.43, 0.13, 0.23, 0.96],
                      repeat: Infinity,
                    }}
                    className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-black/30 to-transparent"
                    style={{ filter: 'blur(0.5px)' }}
                  />
                </motion.div>

                {/* Loading text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xs tracking-[0.4em] uppercase text-neutral-400 font-light"
                  style={{ filter: 'blur(0px)' }}
                >
                  {text}
                </motion.p>
              </motion.div>
            </div>

            {/* Corner accent elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6 }}
              className="absolute top-8 left-8 w-2 h-2 rounded-full bg-black/20"
              style={{ filter: 'blur(0.5px)' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.2, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute top-8 right-8 w-3 h-3 border border-black/20 rounded-full"
              style={{ filter: 'blur(0.5px)' }}
            />
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 0.25, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="absolute bottom-8 right-8 w-4 h-[1px] bg-black/20"
              style={{ filter: 'blur(0.5px)' }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}