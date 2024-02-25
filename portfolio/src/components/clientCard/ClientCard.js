import React from 'react'
import './ClientCard.css'
import ClientFeature from '../clientFeature/clientFeature'


const ClientCard = ({compagnie, role, text, image, dot1, dot2, dot3}) => {
    return (
        <div className="card">
            <div className='card-content'>
                <ClientFeature compagnie={compagnie} role={role} text={text} dot1={dot1} dot2={dot2} dot3={dot3}/>
            </div>
            <div className='card-image'>
                <img src={image} alt="image"/>
            </div>
        </div>
    )
}

export default ClientCard