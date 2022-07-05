import React, { useState, useEffect } from 'react'
import {Link} from 'react-scroll';

import './HeroSection.css'


const HeroSection = () => {
    const [device,setDevice] = useState("pc");
    
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1100) { setDevice("pc")} 
            else if (window.innerWidth > 512) {setDevice("tablet")}
            else {setDevice("mobile")}
        }
        window.addEventListener('resize',handleResize);
    })
    return (
    <section id='hero' className='l-kv__wrap'>
        <div className='l-kv__inner'>
            <div className='l-kv__left'>
                <div className='l-kv__text'>
                    <h2>お茶の水で</h2>
                    <h1>ダンプリング</h1>
                    <h3>店舗をご紹介するサイト</h3>
                </div>
                <div className='l-kv__cta'>
                    <Link to='map' spy={true} smooth={true} offset={50} duration={500}>
                        <button className='view-map-btn'>View Map</button>
                    </Link>
                    <Link className='link-button' to='about-2' spy={true} smooth={true} offset={50} duration={500}>
                        ダンブリングとは？
                    </Link>

                </div>
            </div>
            
            <div className='l-kv__right'>
                <img className='l-kv__img' src={process.env.PUBLIC_URL + `/images/hero-visual/kv-${device}.gif`}/>
            </div>
            
        </div>
        <div className='kemuri-path__wrapper'>
            <div className={`kemuri-path__img-${device}`}></div>
        </div>
    </section>
    )
}

export default HeroSection