import React, { useState, useEffect } from 'react';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';

import './StoreImgSlider.css'


const StoreImgSlider = (storeId) => {
    const [currentIndex, setCurrentIndex] = useState(1);

    //change page
    const moveDot = index => setCurrentIndex(index);
    
    const nextSlide = () => {
        if (currentIndex !== 4) setCurrentIndex(currentIndex + 1)
        else if (currentIndex === 4) setCurrentIndex(1)
    }

    const prevSlide = () => {
        if (currentIndex !== 1) setCurrentIndex(currentIndex - 1)
        else if (currentIndex === 1) setCurrentIndex(4)
    }

    return (
        <div id='store-img-slider'>
            <div className='img-slider-wrapper'>
                <MdChevronLeft size={60} color="#FFDC61" className="slider-icon left" onClick={prevSlide}/>
                

                <div className='store-img-wrapper'>
                    <img className='store-mask'
                        src={process.env.PUBLIC_URL + `/images/stores/${storeId.storeId}/0${currentIndex}.png`}/>
                </div>
                
                <MdChevronRight size={60} color="#FFDC61" className="slider-icon right" onClick={nextSlide}/>
                
            </div>            
            <div className='dots-wrapper'>
                {Array.from({length: 2}).map((item,index) => (
                    <div 
                        onClick = {() => moveDot(index + 1)}
                        className = {currentIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default StoreImgSlider