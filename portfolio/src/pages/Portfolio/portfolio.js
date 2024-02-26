import React from 'react'
import './portfolio.css'
import WebsiteImage from '../../assets/website.png'
import PokemonImage from '../../assets/pokemon.png'
import AppImage from '../../assets/app.jpg'
import ImageRecognition from '../../assets/ImageRecognitionExample.png'
import BlockchainDesktop from '../../assets/blockchain_desktop_menu.png'
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
                    <PortfolioCard title="Jeu vidéo" image={PokemonImage} text={TextPokemon}/>
                </div>
                <div className="portfolio-content-normal">
                    <PortfolioCard title="Application Mobile & serveur" image={AppImage} text={TextAppMobile}/>
                </div>
                <div className="portfolio-content-reversed">
                    <PortfolioCard title="Reconnaissance de formes" image={ImageRecognition} text={TextImageRecognition}/>
                </div>
                <div className="portfolio-content-normal">
                    <PortfolioCard title="Blockchain" image={BlockchainDesktop} text={TextBlockchain}/>
                </div>

{/* 
                <div className="portfolio-content-reversed">
                    <PortfolioCard title="Déversement d'eaux usées" image={WebsiteImage} text={TextWater}/>
                </div>
                <div className="portfolio-content-normal">
                    <PortfolioCard title="Pathfinding" image={WebsiteImage} text={TextPathFinding}/>
                </div> 
                <div className="portfolio-content-reversed">
                    <PortfolioCard title="Discord bot" image={WebsiteImage} text={TextWater}/>
                </div>
*/}
            </div>
        </div>
    )
}

export default Portfolio