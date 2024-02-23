import React from 'react'
import './home.css'
import { Navbar } from '../../components'
import { Header, AboutMe } from '../../containers'

const Home = () => {
    return (
        <div className="App">
            <div className='gradient__bg'>
                <Navbar/>
                <Header/>
            </div>
        </div>
    )
}

export default Home