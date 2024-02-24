import React from 'react'
import './portfolio.css'
import { Navbar, PortfolioCard } from '../../components'
import { CV } from '../../containers'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className='portfolio-navbar gradient__bg'>
                <Navbar/>
            </div>
            <div className='portfolio-content section__margin'>
                <PortfolioCard title="Test title" text="Test text"/>
            </div>
        </div>
    )
}

export default Portfolio