import React from 'react';
import './TopBar.css';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="contact-info-top-bar">
        <div className="contact-item-top-bar">
          <FaPhone className="contact-icon-top-bar" />
          <span>+40 773 933 505</span>
        </div>
        <div className="contact-item-top-bar">
          <FaPhone className="contact-icon-top-bar" />
          <span>+40 762 663 557</span>
        </div>
        <div className="contact-item-top-bar">
          <FaEnvelope className="contact-icon-top-bar" />
          <span>edentifycare@gmail.com</span>
        </div>
      </div>
      
      <div className="social-media-top-bar">
        <a href="https://www.facebook.com/edentifyclinic" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon-top-bar" />
        </a>
        <a href="https://www.instagram.com/edentifydentalcenter/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon-top-bar" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="social-icon-top-bar" />
        </a>
        <a href="https://wa.me/40773933505" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="social-icon-top-bar" />
        </a>
        
      </div>
    </div>
  );
};

export default TopBar;