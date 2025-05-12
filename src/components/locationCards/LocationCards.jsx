import React from 'react';
import './LocationCards.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import ScrollButton from '../ScrollButton';

const LocationCards = () => {
  return (
    <div className="location-container">
      <h2>Unde ne găsiți</h2>
      
      <div className="cards-wrapper">
        <div className="contact-card">
          <div className="card-header">
            <FaMapMarkerAlt className="icon-card" />
            <h3>Locația noastră</h3>
          </div>
          <div className="card-content">
            <p>Strada George Missail, Nr. 119, Sector 1, București</p>
            <div className="contact-info-card">
              <FaPhone className="info-icon" />
              <span>+40 773 933 505</span>
            </div>
            <div className="contact-info-card">
              <FaEnvelope className="info-icon" />
              <span>receptie.dentify@gmail.com</span>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/PD3U2HaUmXpcd7K68" target='_blank' rel="noreferrer" >
            <button className="map-button">
                <FaMapMarkerAlt className="button-icon" />
                VEZI PE HARTA
            </button>
          </a>
        </div>

        <div className="appointment-card">
          <h3>Programări Online</h3>
          <p className="description">
            Te poți programa online oricând la una din specialitățile noastre
          </p>
          <ScrollButton 
            sectionId="formProgramare" 
            pagePath="/contact" 
            className="appointment-button"
          >
            PROGRAMEAZĂ-TE ACUM
          </ScrollButton>
        </div>
      </div>

      <div className="social-media">
        <a href="https://www.facebook.com/edentifyclinic" aria-label="Facebook"><FaFacebook className="social-icon" /></a>
        <a href="https://www.instagram.com/edentifydentalcenter/" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
      </div>
    </div>
  );
};

export default LocationCards;