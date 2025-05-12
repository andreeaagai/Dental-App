import React, {useEffect, useRef } from 'react';
import './OurTeam.css';
import teamMember1 from '../../assets/Polonic.jpg';
import teamMember2 from '../../assets/surmei.jpg';
import teamMember3 from '../../assets/sabina-ionita.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import TargetSection from '../TargetSection';

const doctors = [
    {
      id: 1,
      name: "Dr. Polonic Alexandru",
      specialty: "Chirurgie Dento-Alveolara",
      image: teamMember1
    },
    {
      id: 2,
      name: "Dr. Surmei Elena",
      specialty: "Medic Specialist Protetica si Estetica",
      image: teamMember2
    },
    {
      id: 3,
      name: "Dr. Sabina Cristina Ionita",
      specialty: "Medic Specialist Endodontie",
      image: teamMember3
    }
];
const duplicatedDoctors = [...doctors, ...doctors, ...doctors];

const OurTeam = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, []);
    
  return (
    <div className="team-carousel">
      <TargetSection sectionId="ourTeam" >
        <h2>Echipa noastră</h2>
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, Navigation]}
                slidesPerView={1} 
                spaceBetween={30}
                loop={true}
                loopedSlides={doctors.length}
                autoplay={{ delay: 7500, disableOnInteraction: false, waitForTransition: false }}
                speed={3500}
                navigation={true}
                centeredSlides={true}
                breakpoints={{
                    768: { slidesPerView: 2 }, 
                    1024: { slidesPerView: 3 }, 
                }}
            >
                {duplicatedDoctors.map((doctor, index) => (
                <SwiperSlide key={`${doctor.id}-${index}`}>
                    <div className="team-member">
                    <img src={doctor.image} alt={doctor.name} />
                    <h3>{doctor.name}</h3>
                    <p>{doctor.specialty}</p>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
      </TargetSection>
    </div>
  );
};

export default OurTeam;