import React from 'react';
import './Despre.css';
import doctorImage from '../../assets/surmei.jpg';
import certificatImage from '../../assets/certificate-2.png';
import certificatImage2 from '../../assets/certificate-3.png';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';



const DespreNoi = () => {
  return (
    <div className="despre-noi-container">
      <div className="despre-noi-header">
        <h2>Despre Noi</h2>
        <h1>Misiunea și povestea eDentify</h1>
        <div className="certificat-section">
          <img src={certificatImage2} alt="Certificat clinica"  /> 
          <img src={certificatImage} alt="Certificat clinica"  />     
        </div>
      </div>

      <div className="despre-noi-content">
        <div className="text-section">
          <p className="clinica-description">
            eDentify este o clinică dentară specializată în chirurgie dentară și estetică
            protetică, dedicată redării zâmbetului perfect fiecărui pacient. Sub conducerea
            Dr. Elena Surmei, un medic stomatolog cu expertiză avansată în estetică dentară,
            clinica oferă soluții personalizate pentru cazuri complexe, inclusiv implanturi
            dentare, reconstrucții estetice și protetică avansată. Cu o abordare modernă și
            empatică, Dr. Surmei și echipa sa combină tehnologia de ultimă generație cu o
            grijă deosebită pentru confortul și satisfacția pacientului. La eDentify,
            transformăm sănătatea dentară în artă!
          </p>

          <div className="doctor-signature">
            <img src={doctorImage} alt="Dr. Surmei Elena" className="doctor-photo" />
            <div className="signature-details">
              <p className="doctor-name">Dr. Surmei Elena</p>
              <p className="doctor-title">Co-Founder</p>   
            </div>
          </div>
          <Link to="/despre-noi">
            <button className="despre-noi-button"> <GoArrowRight /> DESPRE NOI</button>
          </Link>            
        </div>
      </div>
    </div>
  );
};

export default DespreNoi;