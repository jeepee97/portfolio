import React from 'react'
import './aboutMe.css'
import { Feature } from '../../components'

const AboutMe = () => {
    return (
        <div className='aboutme section__margin' id='about'>
            <div className='aboutme-feature'>
                <Feature/>
            </div>
            <div className="aboutme-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the library</p>
            </div>
            <div className='aboutme-container'>
                <Feature/>
                <Feature/>
                <Feature/>
            </div>
        </div>
    )
}

export default AboutMe