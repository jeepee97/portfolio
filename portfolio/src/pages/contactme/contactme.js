import React from 'react'
import './contactme.css'
import { Navbar } from '../../components'
import { EmailInfo } from '../../containers'

const ContactMe = () => {
    return (
        <div className="contact">
            <div className='contact-navbar gradient__bg'>
                <Navbar/>
            </div>
            <div className='contact-content section__margin'>
                <EmailInfo/>
            </div>
        </div>
    )
}

export default ContactMe