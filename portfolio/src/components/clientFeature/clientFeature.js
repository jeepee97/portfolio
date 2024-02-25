import React from 'react'
import './clientFeature.css'

const ClientFeature = ({compagnie, role, text, dot1, dot2, dot3}) => {
    return (
        <div className='clientFeatures-container_feature'>
            <div className='clientFeatures-container_feature-title'>
                <div/>
                <h1>{compagnie}</h1>
            </div>
            <div className='clientFeatures-container_feature-role'>
                <h1>{role}</h1>
            </div>
            <div className='clientFeatures-container_feature-text'>
                <p>{text}</p>
                <p>&#x2022; {dot1}</p>
                <p>&#x2022; {dot2}</p>
                <p>&#x2022; {dot3}</p>
            </div>
        </div>
    )
}

export default ClientFeature