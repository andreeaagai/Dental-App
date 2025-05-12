import React, {useRef, useEffect} from "react";
import './Services.css';
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import service1 from '../../assets/albire-dentara.jpg'; 
import service2 from '../../assets/dantura-fixa.jpg'; 
import service3 from '../../assets/coroane-dentare.jpg';  
import service4 from '../../assets/endodontie.jpg'; 
import service5 from '../../assets/tratament-carii.jpg'; 
import service6 from '../../assets/igienizare-dentara.jpg'; 
import service7 from '../../assets/conturare-gingivala.jpg';
import service8 from '../../assets/parodontologie.jpg'; 
import service9 from '../../assets/fatete-dentare.jpg';
import service10 from '../../assets/ortodontie.jpg';
import service11 from '../../assets/implant-dentar.jpg';
import service12 from '../../assets/dinti-ficsi-24-ore.jpg';
import service13 from '../../assets/chirurgie-orala.jpg';
import TargetSection from "../TargetSection";
import serviceVideo1 from '../../assets/videos/ad-elena-1.mp4';
import serviceVideo2 from '../../assets/videos/ad-sabina-1.mp4';
import serviceVideo3 from '../../assets/videos/ad-elena-2.mp4';
import poster1 from '../../assets/poster.jpg';

const ourServices = [
    {
        id: 1,
        name: "Fațete Dentare",
        description: "Fațetele sunt coji subțiri confectionate din diverse materiale (E-max, Empress, zirconiu) care se aplică pe suprafața frontală a dinților pentru a îmbunătăți aspectul acestora. Beneficii: Îmbunătățesc estetica zâmbetului, corectează imperfecțiunile dentare precum pete, fisuri sau dinți strâmbi și oferă un zâmbet uniform și strălucitor.",
        image: service1,
    },
    {
        id: 2,
        name: "Proteze Dentare",
        description: "Dispozitive amovibile sau fixe care înlocuiesc dinții lipsă și țesuturile înconjurătoare. Beneficii: Refacerea completă a funcției masticatorii și estetice, îmbunătățirea vorbirii și a confortului general.",
        image: service2,
    },
    {
        id: 3,
        name: "Coroane dentare și Punți Dentare",
        description: "Coroanele sunt capace personalizate care acoperă dinții deteriorați, iar punțile sunt folosite pentru a înlocui unul sau mai mulți dinți lipsă, sprijinindu-se pe dinții adiacenți. Beneficii: Refacerea esteticii și funcționalității dentare, întărirea structurii dentare și îmbunătățirea mușcăturii și masticației.",
        image: service3,
    },
    {
        id: 4,
        name: "Endodonție (Tratament de Canal)",
        description: "Procedură care implică îndepărtarea pulpei infectate sau inflamate din interiorul dintelui, curățarea și dezinfectarea canalelor radiculare și sigilarea acestora. Beneficii: Salvează dintele de la extracție, elimină durerea și infecția, și permite restaurarea funcției normale a dintelui.",
        image: service4,
    },
    {
        id: 5,
        name: "Tratament Carii dentare (Obturații)",
        description: "Tratamentul cariilor implică îndepărtarea țesutului dentar afectat și umplerea cavităților rezultate cu materiale speciale precum compozitul. Beneficii: Previne extinderea cariilor, restabilește funcția normală a dintelui afectat și îmbunătățește estetica dentară.",
        image: service5,
    },
    {
        id: 6,
        name: "Igienizare Dentară, Detartraj, Airflow și Periaj Profesional",
        description: "Procedura de curățare a dinților prin îndepărtarea plăcii bacteriene și a tartrului acumulat pe suprafața dinților și sub gingii, urmată de un periaj profesional. Beneficii: Previne bolile parodontale, îmbunătățește sănătatea gingiilor, reduce riscul de carii și oferă un zâmbet mai curat și mai strălucitor.",
        image: service6,
    },
    {
        id: 7,
        name: "Consult Stomatologic",
        description: "Evaluarea inițială a sănătății orale a pacientului. Include examinarea dinților, gingiilor și a cavității bucale folosind instrumente speciale. Beneficii: Ajută la identificarea timpurie a problemelor dentare, permite planificarea tratamentelor necesare și oferă recomandări pentru îngrijirea orală personalizată.",
        image: service7,
    },
    {
        id: 8,
        name: "Parodontologie",
        description: "Tratamente specializate pentru prevenirea, diagnosticarea și tratarea bolilor gingiilor și a structurilor de susținere a dinților. Beneficii: Previne pierderea dinților, tratează afecțiunile gingivale și îmbunătățește sănătatea generală a cavității bucale.",
        image: service8,
    },
    {
        id: 9,
        name: "Albire Dentara",
        description: "Procedura de iluminare a nuanței dinților folosind agenți de albire speciali si neinvazivi. Beneficii: Oferă un zâmbet mai alb și mai strălucitor, îmbunătățind încrederea în sine.",
        image: service9,
    },
    {
        id: 10,
        name: "Ortodonție",
        description: "Corectarea alinierii dinților și a mușcăturii folosind aparate dentare fixe sau mobile. Beneficii: Îmbunătățește estetica zâmbetului, sănătatea orală și funcționalitatea dentară, și previne problemele ortodontice viitoare.",
        image: service10,
    },
    {
        id: 11,
        name: "Implanturi Dentare",
        description: "Rădăcini dentare artificiale din titan inserate în osul maxilar pentru a susține coroane, punți sau proteze dentare. Beneficii: Înlocuiesc dinții lipsă cu soluții durabile și stabile, mențin integritatea osului maxilar și oferă o funcționalitate similară dinților naturali.",
        image: service11,
    },
    {
        id: 12,
        name: "Dinți Ficși în 24 de Ore",
        description: "Procedura implică inserarea implanturilor dentare și fixarea unei proteze temporare în aceeași zi, oferind pacienților dinți ficși imediat. Beneficii: Oferă restaurare rapidă a funcției masticatorii și a esteticii dentare, reduce timpul de așteptare pentru pacienți și îmbunătățește imediat calitatea vieții.",
        image: service12,
    },
    {
        id: 13,
        name: "Chirurgie Orală și Maxilo-Facială",
        description: "Intervenții chirurgicale care includ extracții dentare complexe, excizii de chisturi și tumori, și tratamente ale fracturilor faciale. Beneficii: Tratarea afecțiunilor severe, prevenirea complicațiilor și refacerea funcției și structurii faciale normale.",
        image: service13,
    }
    
];

const servicesVideo = [
    {
      video: serviceVideo1,
      title: "Detraj și igienizare dentară",
      description: "BRIGHT & SHINE (Detartraj ultrasunete, periaj profesional, air flow)"
    },
    {
      video: serviceVideo2,
      title: "Tratament de canal",
      description: "Tratament endodontic (Tratament de canal)"
    },
    {
      video: serviceVideo3,
      title: "Lucrari protetice",
      description: "Lucrări protetice (Coroane dentare, punți dentare)"
    }
  ];

const Services = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, []);

    return (
        <div className="services-carousel">
            <TargetSection sectionId="ourServices" >
            <h2>Serviciile Noastre</h2>
            <p>La eDentify, oferim o gamă largă de servicii stomatologice pentru a răspunde tuturor nevoilor dumneavoastră dentare:</p>
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                loopedSlides={ourServices.length}
                autoplay={{ delay: 5000, disableOnInteraction: false, waitForTransition: false }}
                speed={2000}
                navigation={true}
                centeredSlides={true}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                easing="ease-in-out"
            >
                {ourServices.map((service, index) => (
                    <SwiperSlide key={`${service.id}-${index}`}>
                        <div className="service-information">
                            <img src={service.image} alt={service.name} />
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>

                <div className="services-grid-video">
                    {servicesVideo.map((service, index) => (
                    <div className="service-card-video" key={index}>
                        <div className="video-wrapper">
                        <video 
                            controls 
                            className="service-video"
                            poster={poster1}
                            
                        >
                            <source src={service.video} type="video/mp4" />
                            Browser-ul tău nu suportă tag-ul video.
                        </video>
                        </div>
                        <div className="service-info">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </TargetSection>
        </div>
    );
};

export default Services;

