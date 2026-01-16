import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Custom hook for managing page transitions with loading states
 * Provides smooth transitions when navigating programmatically
 */
export function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const transitionTo = useCallback((path: string, delay: number = 400) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      navigate(path);
      setIsTransitioning(false);
    }, delay);
  }, [navigate]);

  return {
    isTransitioning,
    transitionTo,
  };
}
