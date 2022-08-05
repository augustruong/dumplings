import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import AboutSection1 from './sections/AboutSection1';
import AboutSection2 from './sections/AboutSection2';
import MapSection from './sections/MapSection';
import StoreSection from './sections/StoreSection';
import ContactSection from './sections/ContactSection';
import BounceLoader from "react-spinners/BounceLoader";

import './App.css';
import './Animation.css'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },4000)
  }, [])

  return (
    <>
      {
        loading ? (
          <div className='preload-container'>
            <BounceLoader size={100} color={"#F8E71C"} loading={loading} /> 
          </div>
        ) : (
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
        )
      }
      
    </>
  );
}

export default App;
