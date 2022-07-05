import React from 'react'

import './AboutSection1.css'

function AboutSection1() {
  return (
    <section id='about-1' className='l-section about-1'>
      <div className='l-section__inner'>
        <img className='shumai' src={process.env.PUBLIC_URL + '/images/shumai-stick.png'}/>
        <img className='bao' src={process.env.PUBLIC_URL + '/images/bao-2.png'}/>
        <img className='gyouza' src={process.env.PUBLIC_URL + '/images/gyouza-2.png'}/>
        <img className='hargow' src={process.env.PUBLIC_URL + '/images/hargow.png'}/>
        <img className='box' src={process.env.PUBLIC_URL + '/images/box-2.png'}/>
        <div className='c-title--about__wrap'>
          <div className='c-title--about'>
            <h3>ABOUT</h3>
            <h1>ダンプリング</h1>
            <h2>の種類</h2>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default AboutSection1