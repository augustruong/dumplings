import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import AboutSection1 from './sections/AboutSection1';
import AboutSection2 from './sections/AboutSection2';
import MapSection from './sections/MapSection';
import StoreSection from './sections/StoreSection';
import ContactSection from './sections/ContactSection';


import './App.css';
import './Animation.css'

const App = () => {
  return (
    <>
      {window.innerWidth <= 1100 &&
          <NavBar menuIcon={true} />
      }
      {window.innerWidth >= 1100 &&
          <NavBar menuIcon={false} />
      }
      <HeroSection/>
      <AboutSection1 />
      <AboutSection2 />
      <MapSection/>
      <StoreSection />
      <ContactSection />
    </>
  );
}

export default App;
