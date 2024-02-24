import React from 'react'
import './cv.css'
import { Feature } from '../../components'
import { TitleFormationAcademique, TitleGestion, TitleIngenerieInformatique, TitleUnknown, LoremIpsum,
    TextFormationAcademique, TextGestion, TextIngenerieInformatique } from '../../text'

const AboutMe = () => {
    return (
        <div className='aboutme section__margin' id='about'>
            <div className='aboutme-feature'>
                <Feature title={TitleFormationAcademique} text={TextFormationAcademique}/>
            </div>
            <div className="aboutme-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the library</p>
            </div>
            <div className='aboutme-container'>
                <Feature title={TitleUnknown} text={LoremIpsum}/>
                <Feature title={TitleIngenerieInformatique} text={TextIngenerieInformatique}/>
                <Feature title={TitleGestion} text={TextGestion}/>
            </div>
        </div>
    )
}

export default AboutMe