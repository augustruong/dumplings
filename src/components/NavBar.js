import React, { useState, useEffect } from "react";
import {Link} from 'react-scroll';
import './NavBar.css'
import logo from '../logo.svg';

export default class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            menuIcon:"",
            color: false,
            show: true,
            logoShow: true,
            scrollPos: 0
        }
    }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
        console.log("click")
    }

    handleResize = () => {
        if (window.innerWidth <= 1100) {this.setState({menuIcon: true})}
        else {this.setState({menuIcon: false})}
    }

    handleScroll = () => {
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        })

        //change color // show/hide logo mob
        if (window.scrollY >= 100) {
            this.setState({color:true, logoShow:false})
        } else {
            this.setState({color:false, logoShow:true})
        }

        //close mobile menu 
        this.setState({clicked: false})
    }

    changeDisplay = () => {this.setState({show: true})}

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize",this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        window.addEventListener("resize",this.handleResize);
    }
    
    render() {
        return (
            <div>
                {window.innerWidth <= 1100 &&
                    <div className='nav-bar'>
                        <img src={logo} className={this.state.logoShow ? "logo show" : "logo hidden"}/>
                            <div className='menu-icon' onClick={this.handleClick}>
                                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                            </div>
                            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>
                                    <Link to='about-1' spy={true} smooth={true} offset={50} duration={500} onClick={this.closeMobileMenu}>About</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='map' spy={true} smooth={true} offset={50} duration={500} onClick={this.closeMobileMenu}>Map</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='stores' spy={true} smooth={true} offset={50} duration={500} onClick={this.closeMobileMenu}>Stores</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={this.closeMobileMenu}>Contact</Link>
                                </li>
                            </ul>
                                                 
                    </div>
                }
                {window.innerWidth > 1100 &&
                    <div className={this.state.show ? "show" : "hidden"}>
                        <div className={this.state.color ? "nav-bar color" : "nav-bar"}>
                            <Link to='hero' spy={true} smooth={true} offset={50} duration={500} onClick={this.closeMobileMenu}>
                                <img src={logo} className="logo"/>
                            </Link>

                            <ul className='nav-menu'>
                                <li className='nav-item'>
                                    <Link to='about-1' spy={true} smooth={true} offset={50} duration={500} onClick={this.closeMobileMenu}>About</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='map' spy={true} smooth={true} offset={50} duration={500} onClick={this.closeMobileMenu}>Map</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='stores' spy={true} smooth={true} offset={50} duration={500} onClick={this.closeMobileMenu}>Stores</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={this.closeMobileMenu}>Contact</Link>
                                </li>
                            </ul>
                        </div> 
                    </div>
                }
            </div>
        )
    }
}

