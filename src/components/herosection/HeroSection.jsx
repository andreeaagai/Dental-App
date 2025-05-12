import React, {useEffect, useState } from 'react';
import './HeroSection.css';
import ScrollButton from '../ScrollButton';

const HeroSection = () => {

    const [animatedItems, setAnimatedItems] = useState({
        title: false,
        description: false,
        button: false
    });

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setAnimatedItems(prev => ({ ...prev, title: true }));
        }, 300);

        const timer2 = setTimeout(() => {
            setAnimatedItems(prev => ({ ...prev, description: true }));
        }, 600);
        
        const timer3 = setTimeout(() => {
            setAnimatedItems(prev => ({ ...prev, button: true }));
        }, 900);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

  return (
      <div className="hero-container">
        <div className="hero-background"></div>

        <div class="hero-content"> 
            <div className="hero-text">
                <h1 className={`fade-in ${animatedItems.title ? 'visible' : ''}`}>Stomatologie modernă<br /> într-o atmosferă calmă şi relaxată.</h1>
                
                <div className={`hero-description fade-in ${animatedItems.description ? 'visible' : ''}`}>
                      <p>Menţinem un colectiv de dentiști cu înalta pregătire, calificați şi experimentați.</p>
                </div>
                <ScrollButton 
                        sectionId="ourServices" 
                        pagePath="/" 
                        className={`services-button fade-in ${animatedItems.button ? 'visible' : ''}`}
                    >
                        Vezi Serviciile Noastre
                </ScrollButton>
            
            </div>
        </div>   
    </div>
  );
};

export default HeroSection;