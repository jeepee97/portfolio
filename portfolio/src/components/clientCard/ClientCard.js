import React from 'react'
import './ClientCard.css'
import ClientFeature from '../clientFeature/clientFeature'


const ClientCard = ({compagnie, role, text, image}) => {
    return (
        <div className="card">
            <div className='card-content'>
                <ClientFeature compagnie={compagnie} role={role} text={text}/>
            </div>
            <div className='card-image'>
                <img src={image} alt="image"/>
            </div>
        </div>
    )
}

export default ClientCard