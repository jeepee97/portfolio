import React from 'react'
import './aboutme.css'
import { Navbar } from '../../components'
import { CV } from '../../containers'

const AboutMe = () => {
    return (
        <div className="about">
            <div className='about-navbar gradient__bg'>
                <Navbar/>
            </div>
            <div className='about-content'>
                <CV/>
            </div>
        </div>
    )
}

export default AboutMe