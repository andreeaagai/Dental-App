import { useEffect, useRef } from 'react';
import { useScroll } from '../contexts/ScrollContext';

const TargetSection = ({ sectionId, children }) => {
  const ref = useRef(null);
  const { registerRef } = useScroll();

  useEffect(() => {
    registerRef(sectionId, ref);
  }, [sectionId, registerRef]);

  return (
    <div ref={ref} id={sectionId}>
      {children}
    </div>
  );
};

export default TargetSection;