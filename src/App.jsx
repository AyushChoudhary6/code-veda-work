import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AudioProvider } from './context/AudioContext';
import Header from './components/Header/Header.jsx'; // Add the .jsx extension
import Footer from './components/Footer/Footer';
import AudioPlayer from './components/AudioPlayer';
import Head from './components/Head';
import Home from './pages/Home';
import WhyCodeVeda from './pages/WhyCodeVeda';
import Schedule from './pages/Schedule';
import Events from './pages/Events';
import Prizes from './pages/Prizes';
import Sponsors from './pages/Sponsors';
import Team from './pages/Team';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  // Preload assets
  useEffect(() => {
    const preloadImages = [
      'mandala-pattern.svg',
      'hero-bg.jpg',
      'logo.png',
      // Add more image paths as needed
    ];
    
    preloadImages.forEach(image => {
      const img = new Image();
      img.src = `/assets/images/${image}`;
    });
  }, []);

  return (
    <AudioProvider>
      <Router>
        <Head />
        <GlobalStyles />
        <Header />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/why-code-veda" element={<WhyCodeVeda />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/events" element={<Events />} />
              <Route path="/prizes" element={<Prizes />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <AudioPlayer /> {/* Audio player floating component */}
      </Router>
    </AudioProvider>
  );
}

export default App;