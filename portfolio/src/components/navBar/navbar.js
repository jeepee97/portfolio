import React, {useState} from 'react';
import logo from '../../assets/MainLogo.png'
import messageLogo from '../../assets/MessageLogo.png'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';
import {Link} from 'react-scroll';

const Menu = () => (
    <>
    <div className='navbar-links_link'>
        <p><a href="/">Home</a></p>
        <div/>
    </div>
    <div className='navbar-links_link'>
        <p><a href="/about">About me</a></p>
        <div/>
    </div>
    <div className='navbar-links_link'>
        <p><a href="/portfolio">Portfolio</a></p>
        <div/>
    </div>
    <div className='navbar-links_link'>
        <p><a href="/clients">Clients</a></p>
        <div/>
    </div>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar">
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='navbar-links_container'>
                    <Menu/>
                </div>
                <div className='navbar-contact'>
                    <button className='navbar-contact-button'>
                        <img src={messageLogo} alt="" className='navbar-contact-button-image'/>
                        Contact Me
                    </button>
                </div>
                <div className='navbar-menu'>
                    {toggleMenu 
                    ? <RiCloseLine color="white" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="white" size={27} onClick={() => setToggleMenu(true)}/>
                    }
                    {toggleMenu && (
                        <div className='navbar-menu_container scale-up-center'>
                            <div className='navbar-menu_container-links'>
                                <Menu/>
                                <div className='navbar-menu_container-links-contact'>
                                    <button className='navbar-contact-button'>
                                        <img src={messageLogo} alt="" className='navbar-contact-button-image'/>
                                        Contact Me
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar