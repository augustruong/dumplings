import React from 'react'

import './AboutSection1.css'

function AboutSection1() {
  return (
    <section id='about-1' className='l-section about-1'>
      <div className='l-section__inner'>
        <div className='c-title--about__wrap'>
            <div className='c-title--about'>
              <h3>ABOUT</h3>
              <h1 className='jittery'>ダンプリング</h1>
              <h2>の種類</h2>
            </div>
        </div>
        <img className='shumai' src={process.env.PUBLIC_URL + '/images/shurui/shumai.png'}/>
        <img className='bao' src={process.env.PUBLIC_URL + '/images/shurui/bao.png'}/>
        <img className='gyouza' src={process.env.PUBLIC_URL + '/images/shurui/gyouza.png'}/>
        <img className='hargow' src={process.env.PUBLIC_URL + '/images/shurui/hargow.png'}/>
        <img className='box' src={process.env.PUBLIC_URL + '/images/shurui/box-2.png'}/>
      </div>  
    </section>
  )
}

export default AboutSection1