import React from 'react';
import './EsteticaProtetica.css';
import doctorImage from '../../assets/surmei.jpg';
import albireImage from '../../assets/fatete-dentare.jpg';
import coroaneImage from '../../assets/coroane-dentare.jpg';
import fateteImage from '../../assets/albire-dentara.jpg';
import implantImage from '../../assets/implant-dentar.jpg';
import conturareImage from '../../assets/conturare-gingivala.jpg';

const EsteticaProtetica = () => {
  return (
    <div className="estetica-protetica">
      <div className="hero-section">
        <h1>Estetică Dentară și Protetică</h1>
        <p>Transformăm zâmbetele prin soluții personalizate de înaltă calitate</p>
      </div>

      {/* Servicii Oferite */}
      <section className="services-section">
        <h2>Serviciile Noastre de Protetică și Estetică Dentară</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={fateteImage} alt="Fațete Dentare" />
            <h3>Fațete Dentare</h3>
            <p>O soluție rapidă pentru un zâmbet alb, perfect aliniat. Fațetele dentare din ceramică oferă un rezultat natural și durabil.</p>
          </div>

          <div className="service-card">
            <img src={coroaneImage} alt="Coroane Dentare" />
            <h3>Coroane Dentare</h3>
            <p>Restaurarea dinților deteriorați cu coroane durabile și estetice. Disponibile în ceramică, zirconiu sau metalo-ceramică.</p>
          </div>

          <div className="service-card">
            <img src={implantImage} alt="Implanturi Dentare" />
            <h3>Implanturi Dentare</h3>
            <p>Soluția perfectă pentru înlocuirea dinților pierduți. Recâștigați funcționalitatea și estetica dentară.</p>
          </div>

          <div className="service-card">
            <img src={albireImage} alt="Albire Dentară" />
            <h3>Albire Dentară</h3>
            <p>Albire profesională pentru un zâmbet strălucitor. Procedură sigură și eficientă realizată în clinică.</p>
          </div>

          <div className="service-card">
            <img src={conturareImage} alt="Conturare Gingivală" />
            <h3>Conturarea Gingivală</h3>
            <p>Reconturare estetică a liniei gingivale pentru o simetrie perfectă. Soluție pentru gingii inegale sau prea expuse.</p>
          </div>
        </div>
      </section>

      {/* Beneficii */}
      <section className="benefits-section">
        <h2>De ce să ne Alegi?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon">👨‍⚕️</div>
            <h3>Expertiză Medicală</h3>
            <p>Echipa noastră de medici dentiști cu experiență vastă în domeniul esteticii dentare.</p>
          </div>

          <div className="benefit-card">
            <div className="icon">💻</div>
            <h3>Tehnologie Modernă</h3>
            <p>Utilizăm cele mai avansate echipamente și tehnici pentru rezultate precise.</p>
          </div>

          <div className="benefit-card">
            <div className="icon">😊</div>
            <h3>Rezultate Naturale</h3>
            <p>Abordare estetică personalizată pentru un zâmbet natural și armonios.</p>
          </div>

          <div className="benefit-card">
            <div className="icon">💎</div>
            <h3>Materiale de Calitate</h3>
            <p>Utilizăm doar materiale premium de la producători de încredere pentru rezultate durabile.</p>
          </div>

          <div className="benefit-card">
            <div className="icon">👩‍⚕️</div>
            <h3>Îngrijire Personalizată</h3>
            <p>Fiecare pacient beneficiază de un plan de tratament adaptat nevoilor sale.</p>
          </div>
        </div>
      </section>

      {/* Specialist Section */}
      <section className="specialist-section">
        <div className="specialist-content">
          <div className="specialist-image">
            <img src={doctorImage} alt="Dr. Elena Surmei" />
          </div>
          <div className="specialist-info">
            <h2>Dr. Elena Surmei – Medic Specialist Protetică și Estetică Dentară</h2>
            <p>
              <b>Dr. Elena Surmei</b> este un specialist de renume în protetică și estetică dentară, cu o vastă experiență în redarea sănătății și frumuseții zâmbetului pacienților. Cu o abordare bazată pe precizie, inovație și empatie, Dr. Surmei este dedicată creării de soluții personalizate care îmbină funcționalitatea cu estetica deosebită.
            </p>
            <p>
              Dr. Elena Surmei a absolvit Facultatea de Medicină Dentară și și-a completat formarea prin specializări avansate în protetica dentară și estetică dentară în centre de prestigiu naționale și internaționale. Pasiunea pentru perfecționarea continuă o determină să participe constant la cursuri de formare și conferințe de specialitate, pentru a se menține la curent cu cele mai recente inovații și tehnici din domeniu.
            </p>          
            <p> 
              Dr. Elena Surmei este apreciată de pacienți pentru profesionalismul său, atenția la detalii și abilitățile sale remarcabile în transformarea zâmbetelor. Datorită dedicării sale față de excelență, pacienții se bucură de tratamente personalizate care le îmbunătățesc nu doar sănătatea orală, ci și încrederea în sine.
            </p>
          </div>
        </div>

        <div className="specialist-details">
          <h3>Competențe și Specializări</h3>
          <ul>
            <li>Tratamente protetice complexe (coroane, fațete, punți dentare)</li>
            <li>Proteze dentare și reabilitări dentare totale</li>
            <li>Fațete ceramice ultra-subțiri</li>
            <li>Lucrări protetice pe implanturi</li>
            <li>Albire dentară profesională</li>
            <li>Estetică gingivală</li>
          </ul>

          <h3>Abordare Medicală</h3>
          <p>
            Pentru Dr. Elena Surmei, fiecare pacient este unic, iar soluțiile dentare trebuie să fie personalizate. Ea se concentrează pe înțelegerea nevoilor specifice ale fiecărui pacient, oferind planuri de tratament adaptate, care combină funcționalitatea și estetica pentru a obține cele mai bune rezultate.
          </p>
        </div>
      </section>

      {/* Proceduri Section */}
      <section className="procedures-section">
        <h2>Cum Funcționează</h2>
        
        <div className="procedure">
          <h3>Fațete Dentare</h3>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Consultanță inițială</h4>
                <p>Evaluare dentală completă și planificare tratament</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Măsurători</h4>
                <p>Scanare digitală sau imprimate pentru modelare precisă</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Preparare dantură</h4>
                <p>Modificare minimă a stratului de smalț</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Fixare fațete</h4>
                <p>Aplicare și ajustare finală a fațetelor</p>
              </div>
            </div>
          </div>
        </div>

        <div className="procedure">
          <h3>Coroane Dentare</h3>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Evaluare</h4>
                <p>Examinare și stabilirea planului de tratament</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Modelare</h4>
                <p>Prelucrarea coroanei în laboratorul dentar</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Aplicare temporară</h4>
                <p>Protejarea dintelui pregătit</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Coroana permanentă</h4>
                <p>Fixarea definitivă a coroanei dentare</p>
              </div>
            </div>
          </div>
        </div>

        <div className="procedure">
          <h3>Albire Dentară</h3>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Curățare inițială</h4>
                <p>Îndepărtarea plăcii și a tartrului</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Aplicare gel de albire</h4>
                <p>Protecție gingivală și aplicarea agentului de albire</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Activare cu lumină</h4>
                <p>Procesul de activare pentru rezultate optime</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Finalizare</h4>
                <p>Fluorizare și recomandări post-tratament</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EsteticaProtetica;