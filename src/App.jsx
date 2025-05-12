import React from 'react';  
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import DespreNoi from './pages/DespreNoi';
import DanturaFixa from './pages/DanturaFixa';
import Preturi from './pages/Preturi';
import Contact from './pages/Contact';
import EsteticaDentara from './pages/EsteticaDentara';
import { ScrollProvider } from './contexts/ScrollContext';
import ScrollHandler from './components/ScrollHandler';
import Footer from './components/footer/Footer';
import TermeniSiConditii from './pages/TermeniSiConditii';
import PoliticaConfidentialitate from './pages/PoliticaConfidentialitate';
import PoliticaCookie from './pages/PoliticaCookie';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';
import TopBar from './components/topBar/TopBar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <ScrollProvider>
        <ScrollHandler />
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estetica-dentara" element={<EsteticaDentara />} />
          <Route path="/dantura-fixa" element={<DanturaFixa />} />
          <Route path="/preturi" element={<Preturi />} />
          <Route path="/despre-noi" element={<DespreNoi />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termeni-si-conditii" element={<TermeniSiConditii />} />
          <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
          <Route path="/politica-cookie-uri" element={<PoliticaCookie />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
        </ScrollProvider>
    </Router>
  );
}

export default App;
