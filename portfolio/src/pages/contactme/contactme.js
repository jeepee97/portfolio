import React from 'react'
import './contactme.css'
import { Navbar } from '../../components'
import { EmailInfo } from '../../containers'

const ContactMe = () => {
    return (
        <div className="home">
            <div className='home-content gradient__bg'>
                <Navbar/>
                <EmailInfo/>
            </div>
        </div>
    )
}

export default ContactMe