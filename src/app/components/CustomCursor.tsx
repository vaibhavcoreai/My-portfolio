import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
        // Check if there's a data-cursor-text attribute
        const text = target.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-50"
        style={{ willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Cursor outline */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-black rounded-full pointer-events-none z-50 flex items-center justify-center"
        style={{ willChange: 'transform' }}
        initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: cursorText ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {cursorText && (
          <motion.span
            className="text-[10px] tracking-wider uppercase font-semibold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}