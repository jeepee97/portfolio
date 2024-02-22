import React from 'react';
import './navbar.css';
import logo from '../../assets/BasicLogo.png'
 import messageLogo from '../../assets/messageLogo2.png'
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo'/>
            <div className='desktopMenu'>
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Clients</Link>
            </div>
            <button className='desktopMenuButton'>
                <img src={messageLogo} alt="" className='desktopMenuImage'/>
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar