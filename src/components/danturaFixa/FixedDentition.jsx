import React from 'react';
import './FixedDentition.css';
import doctorImage from '../../assets/Polonic.jpg';
import proceduraImage from '../../assets/dantura-fixa.jpg';
import implantImage from '../../assets/implant-dentar.jpg';
import { Link } from 'react-router-dom';

const FixedDentition = () => {


  return (
    <div className="dentura-fixa">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Dinți Ficși</h1>
        <p className="subtitle">Zâmbet Nou în 24 de Ore!</p>
      </div>

      {/* Sectiune Candidati Ideali */}
      <section className="candidati-section">
        <h2>Pentru Cine este Recomandată Această Procedură?</h2>
        <div className="highlight-box">
          <p>Nu există „candidatul perfect”, ci doar „planul de tratament perfect”! Fiecare pacient este unic, iar tratamentul se adaptează în funcție de nevoile specifice.</p>
        </div>
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon">👨‍⚕️</div>
            <p>Pacienții care și-au pierdut toți dinții sau doar o parte din ei</p>
          </div>
          
          <div className="benefit-card">
            <div className="icon">🦷</div>
            <p>Cei care au doar câțiva dinți rămași, dar care nu mai pot fi salvați</p>
          </div>
          
          <div className="benefit-card">
            <div className="icon">😊</div>
            <p>Persoanele care poartă proteze mobile și doresc o soluție fixă și confortabilă</p>
          </div>
        </div>
      </section>

      {/* Sectiune Procedura */}
      <section className="procedura-section">
        <div className="section-header">
          <h2>În Ce Constă Procedura de Implant „Dinți Ficși într-o Zi”?</h2>
          <p>Pentru a-ți oferi informațiile corecte, îți prezentăm pașii esențiali ai procedurii:</p>
        </div>
        
        <div className="procedura-content">
          <div className="procedura-image">
            <img src={proceduraImage} alt="Procedură dentură fixă" />
          </div>
          
          <div className="procedura-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Consult Inițial</h3>
                <p>Radiografie panoramică, consult clinic, discuție cu medicul implantolog și CT dentar</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Planificarea Intervenției</h3>
                <p>Medicul stabilește planul de tratament personalizat</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Intervenția Chirurgicală</h3>
                <p>Extractie dinți (dacă e necesar), adiții osoase, inserare implanturi (4-6)</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Aplicarea Lucrării Provizorii</h3>
                <p>După 8-24 de ore primești lucrarea fixă provizorie (pentru 6 luni)</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Controlul și Lucrarea Finală</h3>
                <p>După 6 luni, lucrarea definitivă</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectiune Avantaje */}
      <section className="avantaje-section">
        <h2>Avantajele Procedurii „Dinți Ficși într-o Zi”</h2>
        
        <div className="avantaje-grid">
          <div className="avantaj-card">
            <h3>⏱️ Rapiditate</h3>
            <p>Dantura fixă și funcțională în doar 24 de ore</p>
          </div>
          
          <div className="avantaj-card">
            <h3>😌 Confort Maxim</h3>
            <p>Procedură minim invazivă, fără durere</p>
          </div>
          
          <div className="avantaj-card">
            <h3>✨ Estetică și Funcționalitate</h3>
            <p>Soluție permanentă care îmbină ambele aspecte</p>
          </div>
          
          <div className="avantaj-card">
            <h3>🔬 Tehnologie Avansată</h3>
            <p>Utilizăm implanturi premium și echipamente moderne</p>
          </div>
          
          <div className="avantaj-card">
            <h3>👨‍⚕️ Planificare Personalizată</h3>
            <p>Tratament adaptat nevoilor tale</p>
          </div>
        </div>
      </section>

      {/* Sectiune Siguranta */}
      <section className="siguranta-section">
        <h2>Este cu Adevărat Sigură Procedura de Implant Dentar într-o Zi?</h2>
        <p className="siguranta-subtitle">Da! Datorită:</p>
        
        <div className="siguranta-grid">
          <div className="siguranta-card">
            <div className="icon">💻</div>
            <h3>Tehnologie Avansată</h3>
            <p>Computer tomograf pentru planificare precisă</p>
          </div>
          
          <div className="siguranta-card">
            <div className="icon">💎</div>
            <h3>Materiale Premium</h3>
            <p>Implanturi biocompatibile și rezistente</p>
          </div>
          
          <div className="siguranta-card">
            <div className="icon">👨‍⚕️</div>
            <h3>Echipă Specializată</h3>
            <p>Medici cu experiență vastă în implantologie</p>
          </div>
        </div>
      </section>

      {/* Sectiune Specialist */}
      <section className="specialist-section">
        <div className="specialist-content">
          <div className="specialist-image">
            <img src={doctorImage} alt="Dr. Alexandru Polonic" />
          </div>
          
          <div className="specialist-info">
            <h2>Dr. Alexandru Polonic – Specialist Dento-Alveolar</h2>
            <p>
              <b>Dr. Alexandru Polonic</b> este un specialist în chirurgie dento-alveolară, recunoscut pentru expertiza sa în domeniul implantologiei și chirurgiei orale. Cu o experiență vastă în tratamentele complexe de reconstrucție dentară, Dr. Polonic este dedicat îmbunătățirii sănătății orale a pacienților săi prin tehnici moderne și soluții personalizate.
            </p>
            <p>
            Absolvent al Facultății de Medicină Dentară, Dr. Polonic și-a continuat pregătirea prin cursuri de specializare în chirurgie dento-alveolară și implantologie în țară și în străinătate. El este pasionat de cercetare și inovare în stomatologie, participând activ la conferințe internaționale și cursuri de perfecționare.
            </p>
            <p>
            Dr. Polonic crede în tratamente minim invazive, personalizate în funcție de nevoile fiecărui pacient. Pentru el, comunicarea deschisă și transparența în relația cu pacienții sunt esențiale, asigurându-se că fiecare persoană înțelege pe deplin opțiunile de tratament disponibile și se simte confortabil pe tot parcursul procesului.
            </p>
            <p>Pacienții îl apreciază pe Dr. Alexandru Polonic pentru profesionalismul său, abordarea prietenoasă și atenția la confortul lor. El este considerat un medic de încredere, dedicat să ofere îngrijire de cea mai înaltă calitate și să contribuie la crearea unor zâmbete sănătoase și fericite.</p>
            
            <div className="specialist-stats">
              <div className="stat-item">
                <div className="stat-number">2500+</div>
                <div className="stat-label">Arcade reabilitate</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">25000+</div>
                <div className="stat-label">Implanturi inserate</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Arcade/săptămână</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">30000+</div>
                <div className="stat-label">Pacienți fericiți</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="specialist-details">
          <h3>Specializări și Competențe</h3>
          <ul>
            <li>Extracții complexe și chirurgie orală</li>
            <li>Implantologie avansată (zigomatică, pterigoidiană)</li>
            <li>Adiții osoase și reconstrucții dentare</li>
            <li>Implanturi subperiostale</li>
            <li>Reabilitări dentare complete</li>
          </ul>
        </div>
      </section>

      {/* Sectiune Riscuri */}
      <section className="riscuri-section">
        <h2>Care Sunt Riscurile?</h2>
        <div className="highlight-box">
          <p>Ca orice procedură medicală, există riscuri, însă acestea sunt minime și bine controlate:</p>
        </div>
        
        <div className="riscuri-grid">
          <div className="risc-card">
            <h3>💰 Costuri Ridicate</h3>
            <p>Investiție semnificativă, dar beneficii de durată</p>
          </div>
          
          <div className="risc-card">
            <h3>😣 Disconfort Temporar</h3>
            <p>Ușor disconfort post-operator gestionat cu analgezice</p>
          </div>
          
          <div className="risc-card">
            <h3>🦠 Risc de Infecție</h3>
            <p>Minimizat prin protocoale stricte de sterilizare</p>
          </div>
        </div>
      </section>

      {/* Sectiune Recomandari */}
      <section className="recomandari-section">
        <h2>Recomandările Noastre</h2>
        <div className="recomandari-list">
          <div className="recomandare">
            <div className="recomandare-icon">💡</div>
            <p>Consultă-te cu medicul specialist pentru discuția tuturor opțiunilor</p>
          </div>
          
          <div className="recomandare">
            <div className="recomandare-icon">🩺</div>
            <p>Realizează analizele complete înainte de intervenție</p>
          </div>
          
          <div className="recomandare">
            <div className="recomandare-icon">📋</div>
            <p>Respectă toate indicațiile post-operatorii</p>
          </div>
        </div>
      </section>

      {/* Sectiune Implanturi */}
      <section className="implanturi-section">
        <div className="implanturi-content">
          <div className="implanturi-info">
            <h2>Implanturile Folosite</h2>
            <p>Recunoscute pe plan mondial pentru:</p>
            
            <div className="implanturi-features">
              <div className="feature">
                <h3>🛡️ Fiabilitate și Siguranță</h3>
                <p>Rata de succes peste 90% în cercetări clinice</p>
              </div>
              
              <div className="feature">
                <h3>🌿 Biocompatibilitate</h3>
                <p>Potrivite pentru pacienții cu diabet sau osteoporoză</p>
              </div>
              
              <div className="feature">
                <h3>🏆 Garantie</h3>
                <p>Implanturi premium cu garanție extinsă</p>
              </div>
            </div>
          </div>
          
          <div className="implanturi-image">
            <img src={implantImage} alt="Implanturi dentare" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Gata pentru un Zâmbet Nou?</h2>
        <p>Programează-te acum pentru un consult personalizat</p>
        <Link to="/contact">
          <button className="cta-button">Programează Consult</button>
        </Link>
      </section>
    </div>
  );
};

export default FixedDentition;