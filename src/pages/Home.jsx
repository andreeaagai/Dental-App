import React from 'react';
import HeroSection from '../components/herosection/HeroSection';
import Despre from '../components/despre-noi/Despre';
import OurTeam from '../components/ourTeam/OurTeam';
import Services from '../components/servicii/Services';
import BeforeAfterTabs from '../components/beforeAndAfter/BeforeAfterTabs';
import LocationCards from '../components/locationCards/LocationCards';
import TargetSection from '../components/TargetSection';
import ReviewPacienti from '../components/reviewPacienti/ReviewPacienti';
import WhyChooseUs from '../components/whyChooseUs/WhyChooseUs';
import Testimonials from '../components/testimoniale/Testimonials';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <Despre />
      <Services />
      <TargetSection sectionId="ourTeam" >
        <OurTeam />
      </TargetSection>
      <BeforeAfterTabs />
      <LocationCards />  
      <ReviewPacienti />
      <Testimonials />

      
    </div>
  );
};

export default Home;