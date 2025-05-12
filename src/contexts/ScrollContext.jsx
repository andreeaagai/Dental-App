import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionRefs = useRef({});

  const registerRef = (sectionId, ref) => {
    sectionRefs.current[sectionId] = ref;
  };

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId]?.current;
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ registerRef, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);