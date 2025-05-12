import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="legal-links">
          <Link to="/termeni-si-conditii">Termeni și Condiții</Link>
          <span>|</span>
          <Link to="/politica-confidentialitate">Politica de confidențialitate</Link>
          <span>|</span>
          <Link to="/politica-cookie-uri">Politica de cookie-uri</Link>
        </div>

        <div className="copyright">
          © eDentify 2025 | All Rights Reserved
        </div>
        
        <div className="social-links">
          <span>Follow us on</span>
          <a href="https://www.facebook.com/edentifyclinic" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/edentifydentalcenter/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Tik-Tok">
            <FaTiktok className="social-icon" />
          </a>
        </div>

        <div className="copyright">
        <a href="https://github.com/MihailNegulet" target="_blank" rel="noopener noreferrer" className='author-info'>© Made by Mihail Negulet | Contact: mihailnegulet@gmail.com </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;