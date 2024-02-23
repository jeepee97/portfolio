import React from 'react'
import './home.css'
import { Navbar } from '../../components'
import { Header, AboutMe } from '../../containers'

const Home = () => {
    return (
        <div className="home">
            <div className='home-content gradient__bg'>
                <Navbar/>
                <Header/>
            </div>
        </div>
    )
}

export default Home