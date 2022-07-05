import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';

import storeData from './StoreData'

import './Pagination.css'

const Pagination = ({paginate, currentIndex}) => {
    // function handleClick(key) {
    //     const thumbKey = document.getElementById(key);
    //     const prevElement = document.getElementsByClassName('active-thumb');
    //     const activeElement = thumbKey.childNodes[0].children[0];
    //     const prevOverlay = prevElement[0].children[0];
    //     const activeOverlay = activeElement.children[0];
    //     prevElement[0].classList.remove('active-thumb')
    //     activeElement.classList.add('active-thumb')
    //     prevOverlay.classList.remove('hidden')
    //     activeOverlay.classList.add('hidden')
    // }

    const [currentPage,setCurrentPage] = useState(1);
    const prevPage = () => setCurrentPage(1);
    const nextPage = () => setCurrentPage(2); 

    //Get current stores
    const indexOfLastStore = currentPage * 5;
    const indexOfFirstStore = indexOfLastStore - 5;
    const currentStores = storeData.slice(indexOfFirstStore,indexOfLastStore)

    // console.log(currentIndex)

    return (
        <div className='pagination'>
            {currentPage === 2 &&
                <MdChevronLeft size={60} color="#FFDC61" className="slider-icon left" onClick={prevPage}/>
            }
            {currentStores.map((store,index) => (
                <a  className = {currentIndex === (index+1) || currentIndex == (index+6)  ? "thumbnail active-thumb" : "thumbnail"}
                    onClick = {() => {
                        if (currentPage==1) paginate(index+1);
                        else paginate(index+6); 
                    }} 
                    href="javascript:void(0)" onclick="return false"  activeClassName="active"
                >
                    <div className={currentIndex === (index+1) || currentIndex == (index+6)  ? "thumb-overlay hidden" : "thumb-overlay"}></div>
                    <img className = {currentIndex === (index+1) || currentIndex == (index+6)  ? "thumb-img active-thumb" : "thumb-img"} src={process.env.PUBLIC_URL + `/images/stores/${store.id}/01.png`}/>
                </a>
            ))}
            
            {currentPage === 1 &&
                <MdChevronRight size={60} color="#FFDC61" className="slider-icon right" onClick={nextPage}/>
            }
        </div>
    )
}

export default Pagination