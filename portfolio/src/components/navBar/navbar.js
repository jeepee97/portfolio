import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/MainLogo.png'
import messageLogo from '../../assets/MessageLogo.png'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();

    const Menu = () => (
        <>
        <button className='navbar-links_link' onClick={() => navigate('/')}>
            Accueil
            <div/>
        </button>
        <button className='navbar-links_link' onClick={() => navigate('/about')}>
            À propos de moi
            <div/>
        </button>
        <button className='navbar-links_link' onClick={() => navigate('/portfolio')}>
            Portfolio
            <div/>
        </button>
        <button className='navbar-links_link' onClick={() => navigate('/clients')}>
            Clients
            <div/>
        </button>
        </>
    )
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
                    <button className='navbar-contact-button' onClick={() => navigate('/contact')}>
                        Me contacter
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
                                    <button className='navbar-contact-button' onClick={() => navigate('/contact')}>
                                        Me contacter
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