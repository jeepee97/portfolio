import React from 'react'
import './clients.css'
import LiggoLogo from '../../assets/liggo_logo.png'
import MtlgaymerLogo from '../../assets/logo_mtlgaymers.png'
import PositronLogo from '../../assets/positron_logo.jpg'
import TelcoBridgeLogo from '../../assets/TB_logo.jpg'
import AEPLogo from '../../assets/aep_logo.png'
import CEGInfoLogo from '../../assets/logo_mtlgaymers.png'
import PolytechniqueLogo from '../../assets/logo_mtlgaymers.png'
import BombarderLogo from '../../assets/logo_mtlgaymers.png'
import { Navbar, ClientCard } from '../../components'
import { LoremIpsum } from '../../text'

const Clients = () => {
    return (
        <div className="clients">
            <div className='clients-navbar gradient__bg'>
                <Navbar/>
            </div>
            <div className='clients-content section__margin'>
                <div className='clients-content-normal'>
                    <ClientCard image={LiggoLogo} compagnie="Liggo" role='Développeur logiciel' text={LoremIpsum}/>
                </div>
                <div className='clients-content-normal'>
                    <ClientCard image={MtlgaymerLogo} compagnie="Montreal Gaymer" role="Trésorier du conseil d'administration" text={LoremIpsum}/>
                </div>
                <div className='clients-content-normal'>
                    <ClientCard image={PositronLogo} compagnie="PositronAccess" role="Développeur logiciel" text={LoremIpsum}/>
                </div>
                <div className='clients-content-normal'>
                    <ClientCard image={TelcoBridgeLogo} compagnie="TelcoBridge" role="Développeur logiciel" text={LoremIpsum}/>
                </div>
                <div className='clients-content-normal'>
                    <ClientCard image={AEPLogo} compagnie="AEP" role="Member du conseil central" text={LoremIpsum}/>
                </div>
                <div className='clients-content-normal'>
                    <ClientCard image={CEGInfoLogo} compagnie="CEGInfo" role="Président & VP-éducation" text={LoremIpsum}/>
                </div>
                <div className='clients-content-normal'>
                    <ClientCard image={PolytechniqueLogo} compagnie="Polytechnique Montréal" role="Chargé de cours"  text={LoremIpsum}/>
                </div>
                <div className='clients-content-normal'>
                    <ClientCard image={LiggoLogo} compagnie="" role="Stage en développement logiciel"  text={LoremIpsum}/>
                </div>
                <div className='clients-content-normal'>
                    <ClientCard image={BombarderLogo} compagnie="Bombardier" role="Stage en développement logiciel"  text={LoremIpsum}/>
                </div>
            </div>
        </div>
    )
}

export default Clients