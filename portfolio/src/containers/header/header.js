import React from 'react';
import './header.css'
import background from '../../assets/photo_comité.jpg'
// import background from '../../assets/ChangeMe.jpg'

const Header = () => {
    return (
        <div className='header section__padding' id='home'>
            <div className='header-content'>
                <h1 className='gradient__text'> Let's build something amazing</h1>
                <p>Welcome, my name is Jean-Philippe Anctil. I work in computer engineering since 2021 and I am here to help you make your projets a reality.</p>
            </div>
            <div className='header-image'>
                <img src={background} alt="background"/>
            </div>
        </div>
    )
}

export default Header