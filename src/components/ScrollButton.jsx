import { useNavigate } from 'react-router-dom';
import { useScroll } from '../contexts/ScrollContext';

const ScrollButton = ({ sectionId, pagePath, children, className = '' }) => {
  const navigate = useNavigate();
  const { scrollToSection } = useScroll();

  const handleClick = () => {
    if (pagePath && window.location.pathname !== pagePath) {
      // Navighează către altă pagină cu hash
      navigate(`${pagePath}#${sectionId}`);
    } else {
      // Scroll pe pagina curentă
      scrollToSection(sectionId);
      window.location.hash = sectionId;
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default ScrollButton;