import React from 'react';
import './header.css'
import background from '../../assets/photo_comité.jpg'
import { useNavigate } from 'react-router';
// import background from '../../assets/ChangeMe.jpg'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header section__padding' id='home'>
            <div className='header-content'>
                <h1 className='gradient__text'> Construisons quelque chose d'incroyable</h1>
                <p>Bonjour, je m'appelle Jean-Philippe Anctil. J'évolue dans le domaine de l'ingénierie informatique depuis 2021 et je suis là pour faire de vos projets une réalité.</p>
                <button className='header-content-button' onClick={() => navigate('/contact')}>
                    Travaillons ensemble
                </button>
            </div>
            <div className='header-image'>
                <img src={background} alt="background"/>
            </div>
        </div>
    )
}

export default Header