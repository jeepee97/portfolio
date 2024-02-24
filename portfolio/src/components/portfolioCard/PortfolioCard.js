import React from 'react'
import './PortfolioCard.css'
import Feature from '../feature/feature'


const PortfolioCard = ({title, text, image}) => {
    return (
        <div className="card">
            <div className='card-content'>
                <Feature title={title} text={text}/>
            </div>
            <div className='card-image'>
                <img src={image} alt="image"/>
            </div>
        </div>
    )
}

export default PortfolioCard