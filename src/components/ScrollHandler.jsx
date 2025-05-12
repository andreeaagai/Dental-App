import { useEffect } from 'react';
import { useScroll } from '../contexts/ScrollContext';

const ScrollHandler = () => {
  const { scrollToSection } = useScroll();

  useEffect(() => {
    const handleHashChange = () => {
      const sectionId = window.location.hash.substring(1);
      if (sectionId) {
        // Mic delay pentru a permite încărcarea paginii
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    };

    // Ascultă schimbările de hash
    window.addEventListener('hashchange', handleHashChange);
    
    // Verifică hash-ul inițial
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [scrollToSection]);

  return null;
};

export default ScrollHandler;