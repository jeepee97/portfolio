import React from 'react'
import './portfolio.css'
import WebsiteImage from '../../assets/website.png'
import PokemonImage from '../../assets/pokemon.png'
import AppImage from '../../assets/app.jpg'
import { LoremIpsum, TextSiteWeb, TextPokemon, TextAppMobile, TextBlockchain, TextImageRecognition, TextPathFinding, TextWater } from '../../text'
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
                    <PortfolioCard title="Pokemon" image={PokemonImage} text={TextPokemon}/>
                </div>
                <div className="portfolio-content-normal">
                    <PortfolioCard title="Application Mobile" image={AppImage} text={TextAppMobile}/>
                </div>


                <div className="portfolio-content-normal">
                    <PortfolioCard title="Reconnaissance d'image" image={WebsiteImage} text={TextImageRecognition}/>
                </div>
                <div className="portfolio-content-reversed">
                    <PortfolioCard title="Blockchain" image={WebsiteImage} text={TextBlockchain}/>
                </div>
                <div className="portfolio-content-normal">
                    <PortfolioCard title="Déversement d'eaux usées" image={WebsiteImage} text={TextWater}/>
                </div>
                <div className="portfolio-content-reversed">
                    <PortfolioCard title="Pathfinding" image={WebsiteImage} text={TextPathFinding}/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio