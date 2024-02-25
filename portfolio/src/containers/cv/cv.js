import React from 'react'
import './cv.css'
import { Feature } from '../../components'
import { TitleFormationAcademique, TitleManagement, TitleIngenerieInformatique, TitleMathematiques, LoremIpsum,
    TextFormationAcademique, TextManagement, TextIngenerieInformatique, TextMathematiques } from '../../text'

const CV = () => {
    return (
        <div className='cv section__margin' id='about'>
            <div className="cv-heading">
                <h1 className="gradient__text">Formations académiques</h1>
            </div>
            <div className='cv-container'>
                <Feature title={TitleMathematiques} text={TextMathematiques}/>
                <Feature title={TitleIngenerieInformatique} text={TextIngenerieInformatique}/>
                <Feature title={TitleManagement} text={TextManagement}/>
            </div>
        </div>
    )
}

export default CV