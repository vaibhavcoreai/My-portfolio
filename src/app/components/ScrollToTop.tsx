import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try immediately for same-page navigation
      if (!scrollToElement()) {
        // Retry after page transition (approx 500ms exit + buffer)
        setTimeout(scrollToElement, 700);
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
    }
  }, [location.pathname, location.hash]);

  return null;
}
