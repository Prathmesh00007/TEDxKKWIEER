import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import desktopVideo from './assets/intro.mp4';
import mobileVideo from './assets/intromob.mp4';
import tabletVideo from './assets/intromob.mp4'; // Assuming same as mobile for now, you might need a different video for tablet
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecentSpeakers from './components/RecentSpeakers';
import Terms from './components/Terms';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TimeLine from './components/TimeLine';
import SpeakerDetails from './components/SpeakerDetails';

// Lazy load components
const About = lazy(() => import('./components/Contact'));
const Team = lazy(() => import('./components/Team'));

// Loader component
const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const App = () => {
  const [spinner, setSpinner] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);

  // Determine video source based on screen size
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setVideoSrc(desktopVideo); // Desktop
      } else if (screenWidth >= 768) {
        setVideoSrc(tabletVideo); // Tablet (adjust breakpoint if needed)
      } else {
        setVideoSrc(mobileVideo); // Mobile
      }
    };

    // Initialize spinner for the intro video screen
    setSpinner(true);
    handleResize(); // Set video source on initial render
    setTimeout(() => setSpinner(false), 3500); // Remove spinner after 3.5 seconds

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize AOS (animations on scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      {spinner && videoSrc ? (
        <div id="autovideo">
          <video
            loop
            muted
            autoPlay
            id="introVideo"
            className="video"
            style={{
              width: '100%',
              height: '100vh',
              objectFit: 'cover', // Crucial for fitting to screen
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <main id="main">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/speakers" element={<RecentSpeakers />} />
                <Route path='/terms' element={<Terms />} />
                <Route path="/speakers-details" element={<SpeakerDetails/>} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;