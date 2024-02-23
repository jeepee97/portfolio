import React from 'react'
import './aboutme.css'
import { Navbar } from '../../components'
import { CV } from '../../containers'

const AboutMe = () => {
    return (
        <div className="about">
            <div className='gradient__bg'>
                <Navbar/>
                <CV/>
            </div>
        </div>
    )
}

export default AboutMe