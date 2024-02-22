import React from 'react';
import './navbar.css';
import logo from '../../assets/BasicLogo.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" className='logo'/>
            <div className='desktopMenu'>

            </div>
            <button className='desktopMenuButton'>
                <img src="" alt="" className='desktopMenuImage'/>
            </button>
        </nav>
    )
}

export default Navbar