import React from 'react';
import './WhyChooseUs.css';
import chooseUs1 from '../../assets/chooseUs1.png';
import chooseUs2 from '../../assets/chooseUs2.png';
import chooseUs3 from '../../assets/chooseUs3.png';
import chooseUs4 from '../../assets/chooseUs4.png';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <div className="choose-us-fullwidth">
      <div className="choose-us-wrapper">
        <h2 className="choose-us-main-title">De ce să alegi Clinica eDentify?</h2>
        
        
        <div className="choose-us-features-grid">
          <div className="feature-card">
            <div className="feature-icon">
                <img src={chooseUs1} alt="Feature 1" className="feature-icon-image" />
            </div>
            <div className="feature-text">Ai parte de Tratamente Non-Invazive UltraEficiente​</div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
                <img src={chooseUs2} alt="Feature 2" className="feature-icon-image" />
            </div>          
            <div className="feature-text">Îți stă la dispoziție o echipă de specialiști cu peste 15 ani experiență</div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
                <img src={chooseUs3} alt="Feature 3" className="feature-icon-image" />
            </div>
            <div className="feature-description">Beneficiezi de tehnologii 5D, CT, microscopie și LASER.​</div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
                <img src={chooseUs4} alt="Feature 4" className="feature-icon-image" />
            </div>
            <div className="feature-description">Vii într-o clinică nouă, într-o atmosferă relaxantă și primitoare.</div>
          </div>
        </div>
        
        <div className="choose-us-cta">
            <Link to="/contact">
                <button className="contact-button">VIZITEAZĂ-NE!</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;