import React from 'react';
import logo from '../../assets/BasicLogo.png'
import messageLogo from '../../assets/MessageLogo.png'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='navbar-links_container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#portfolio">Portfolio</a></p>
                    <p><a href="#about">About me</a></p>
                    <p><a href="#clients">Clients</a></p>
                </div>
                <div className='navbar-contact'>
                    <button className='navbar-contact-button'>
                        <img src={messageLogo} alt="" className='navbar-contact-button-image'/>
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar