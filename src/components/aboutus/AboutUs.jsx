import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="hero-section">
        <h1>Despre Noi</h1>
        <p className="subtitle">Valorile eDENTIFY</p>
      </div>

      <div className="content-section">

        <div className="text-content">
          <p className="intro-text">
            La eDENTIFY, ne ghidăm după un set de valori fundamentale care ne definesc fiecare acțiune și decizie. Aceste valori reflectă angajamentul nostru față de excelență, integritate și îngrijire centrată pe pacient.
          </p>

          <div className="value-card">
            <h2>Excelență în Îngrijire</h2>
            <p>
              Ne străduim să oferim cea mai înaltă calitate a îngrijirii dentare. De la tehnologiile avansate pe care le utilizăm, până la standardele stricte de igienă și siguranță pe care le respectăm, fiecare aspect al practicii noastre este orientat către excelență. Echipa noastră de specialiști participă constant la cursuri de formare continuă pentru a rămâne la curent cu cele mai recente inovații în domeniu, asigurând astfel tratamente eficiente și moderne pentru toți pacienții noștri.
            </p>
          </div>

          <div className="value-card">
            <h2>Integritate și Transparență</h2>
            <p>
              Credem în construirea unor relații bazate pe încredere și onestitate. Comunicăm deschis și transparent cu fiecare pacient, explicând în detaliu opțiunile de tratament și costurile asociate. La eDENTIFY, veți fi informat la fiecare pas, astfel încât să puteți lua decizii educate și să aveți încredere deplină în îngrijirea pe care o primiți.
            </p>
          </div>

          <div className="value-card">
            <h2>Îngrijire Centrată pe Pacient</h2>
            <p>
              Pacienții noștri sunt întotdeauna pe primul loc. Fiecare plan de tratament este personalizat pentru a răspunde nevoilor și dorințelor individuale ale fiecărui pacient. Ne asigurăm că fiecare vizită la clinica noastră este o experiență pozitivă și confortabilă, oferindu-vă suportul și atenția de care aveți nevoie pentru a vă menține sănătatea orală în cele mai bune condiții.            </p>
          </div>

          <div className="value-card">
            <h2>Inovație Continuă</h2>
            <p>
              Suntem dedicați inovării și îmbunătățirii constante. Investim în echipamente și tehnici de ultimă generație pentru a asigura tratamente rapide, precise și minim invazive. Prin adoptarea celor mai noi tehnologii, reușim să oferim soluții eficiente și confortabile, îmbunătățind astfel rezultatele tratamentelor și experiența generală a pacientului.            </p>
          </div>

          <div className="value-card">
            <h2>Respect și Empatie</h2>
            <p>
              Respectul și empatia sunt pilonii interacțiunii noastre cu pacienții. Ascultăm cu atenție preocupările și așteptările fiecăruia și ne străduim să oferim o îngrijire empatică și personalizată. Înțelegem că vizitele la dentist pot fi stresante, de aceea ne angajăm să creăm un mediu prietenos și liniștit în care să vă simțiți în siguranță și confortabil.            </p>
          </div>

          <div className="value-card">
            <h2>Responsabilitate Socială</h2>
            <p>
              Ne asumăm responsabilitatea de a contribui la binele comunității. Participăm activ în campanii de educație și prevenție orală și susținem inițiative locale care promovează sănătatea și bunăstarea. Prin aceste eforturi, ne propunem să facem o diferență pozitivă în viața oamenilor din comunitatea noastră.            </p>
          </div>

          <div className="mission-section">
            <h2>Misiunea Noastră</h2>
            <p>
              Scopul nostru este să transformăm fiecare vizită într-o experiență plăcută și fără stres, concentrându-ne pe confortul și satisfacția pacienților noștri. Credem că un zâmbet sănătos și frumos poate schimba vieți, iar echipa noastră este aici pentru a vă ajuta să obțineți zâmbetul pe care îl meritați.            </p>
          </div>

          <div className="cta-section">
            <h2>Vă așteptăm la eDENTIFY!</h2>
            <p>
              La eDENTIFY, ne dedicăm să vă oferim îngrijire dentară de excepție într-un mediu prietenos și profesionist. Contactați-ne pentru a programa o consultație și pentru a descoperi cum valorile noastre fundamentale ne diferențiază.            </p>
            <p className="signature">La eDENTIFY, suntem aici pentru a vă ajuta să zâmbiți cu încredere!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;