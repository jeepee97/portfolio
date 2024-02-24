import React from 'react'
import './portfolio.css'
import WebsiteImage from '../../assets/website.png'
import PokemonImage from '../../assets/pokemon.png'
import { LoremIpsum, TextSiteWeb } from '../../text'
import { Navbar, PortfolioCard } from '../../components'
import { CV } from '../../containers'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className='portfolio-navbar gradient__bg'>
                <Navbar/>
            </div>
            <div className='portfolio-content section__margin'>
                <div className="portfolio-content-normal">
                    <PortfolioCard title="Site web" image={WebsiteImage} text={TextSiteWeb}/>
                </div>
                <div className="portfolio-content-reversed">
                    <PortfolioCard title="Pokemon" image={PokemonImage} text={LoremIpsum}/>
                </div>
                <div className="portfolio-content-normal">
                    <PortfolioCard title="Application Mobile" image={WebsiteImage} text={LoremIpsum}/>
                </div>


                <div className="portfolio-content-normal">
                    <PortfolioCard title="Reconnaissance d'image" image={WebsiteImage} text={LoremIpsum}/>
                </div>
                <div className="portfolio-content-reversed">
                    <PortfolioCard title="Blockchain" image={WebsiteImage} text={LoremIpsum}/>
                </div>
                <div className="portfolio-content-normal">
                    <PortfolioCard title="Déversement d'eaux usées" image={WebsiteImage} text={LoremIpsum}/>
                </div>
                <div className="portfolio-content-reversed">
                    <PortfolioCard title="Pathfinding" image={WebsiteImage} text={LoremIpsum}/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio