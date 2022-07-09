import React, { useState, useEffect }  from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

import './AboutSection1.css'

function AboutSection1() {
  var initDevice;
  if (window.innerWidth > 1100) { initDevice = "pc" } 
  else if (window.innerWidth > 512) { initDevice = "tablet"}
  else { initDevice = "mobile" }
  const [device,setDevice] = useState(initDevice);
    
  useEffect(() => {
    Aos.init();
      function handleResize() {
        if (window.innerWidth > 1100) { setDevice("pc")} 
        else if (window.innerWidth > 512) {setDevice("tablet")}
        else {setDevice("mobile")}
      }
      window.addEventListener('resize',handleResize);
  })
  
  return (
    <section id='about-1' className='l-section about-1'>
        <img className='bg' src={process.env.PUBLIC_URL + `/images/section-bg/about-1-bg-${device}.png`}/>
        <div className='c-title--about__wrap'>
            <div className='c-title--about'>
              <h3>ABOUT</h3>
              <h1 className='jittery'>ダンプリング</h1>
              <h2>の種類</h2>
            </div>
        </div>
        <img className='shumai' src={process.env.PUBLIC_URL + `/images/shurui/shumai-${device}.png`} 
            data-aos="fade-down" data-aos-delay="650"/>
        <img className='bao' src={process.env.PUBLIC_URL + '/images/shurui/bao.png'} 
            data-aos="fade-down" data-aos-delay="500"/>
        <img className='gyouza' src={process.env.PUBLIC_URL + '/images/shurui/gyouza.png'} 
            data-aos="fade-down" data-aos-delay="350"/>
        <img className='hargow' src={process.env.PUBLIC_URL + '/images/shurui/hargow.png'} 
            data-aos="fade-down" data-aos-delay="200"/>
        <img className='box' src={process.env.PUBLIC_URL + '/images/shurui/box.png'} 
            data-aos="fade-down"/>
    </section>
  )
}

export default AboutSection1