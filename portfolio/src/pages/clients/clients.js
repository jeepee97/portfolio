import React from 'react'
import './clients.css'
import LiggoLogo from '../../assets/liggo_logo.png'
import MtlgaymerLogo from '../../assets/logo_mtlgaymers.png'
import PositronLogo from '../../assets/positron_logo.jpg'
import TelcoBridgeLogo from '../../assets/TB_logo.jpg'
import AEPLogo from '../../assets/aep_logo.png'
import CEGInfoLogo from '../../assets/cegl_ceginfo_logo.jpg'
import PolytechniqueLogo from '../../assets/logo_mtlgaymers.png'
import BombarderLogo from '../../assets/logo_mtlgaymers.png'
import { Navbar, ClientCard } from '../../components'
import { LoremIpsum,
    TextLiggo, Dot1Liggo, Dot2Liggo, Dot3Liggo,
    TextMtlGaymers, Dot1MtlGaymers, Dot2MtlGaymers, Dot3MtlGaymers,
    TextPositron, Dot1Positron, Dot2Positron, Dot3Positron,
    TextTelcobridges, Dot1Telcobridges, Dot2Telcobridges, Dot3Telcobridges,
    TextAEP, Dot1AEP, Dot2AEP, Dot3AEP,
    TextCEGInfo, Dot1CEGInfo, Dot2CEGInfo, Dot3CEGInfo } from '../../text'

const Clients = () => {
    return (
        <div className="clients">
            <div className='clients-navbar gradient__bg'>
                <Navbar/>
            </div>
            <div className='clients-content section__margin'>
                <div className='clients-content-normal'>
                    <ClientCard 
                        image={LiggoLogo} 
                        compagnie="Liggo" 
                        role='Développeur logiciel' 
                        text={TextLiggo}
                        dot1={Dot1Liggo}
                        dot2={Dot2Liggo}
                        dot3={Dot3Liggo}
                        />
                </div>
                <div className='clients-content-reversed'>
                    <ClientCard 
                        image={MtlgaymerLogo}
                        compagnie="Montréal Gaymers" 
                        role="Trésorier du conseil d'administration" 
                        text={TextMtlGaymers}
                        dot1={Dot1MtlGaymers}
                        dot2={Dot2MtlGaymers}
                        dot3={Dot3MtlGaymers}/>
                </div>
                <div className='clients-content-normal'>
                    <ClientCard
                        image={PositronLogo}
                        compagnie="Positron Access Solution"
                        role="Développeur logiciel"
                        text={TextPositron}
                        dot1={Dot1Positron}
                        dot2={Dot2Positron}
                        dot3={Dot3Positron}
                        />
                </div>
                <div className='clients-content-reversed'>
                    <ClientCard
                        image={TelcoBridgeLogo}
                        compagnie="TelcoBridges"
                        role="Développeur logiciel"
                        text={TextTelcobridges}
                        dot1={Dot1Telcobridges}
                        dot2={Dot2Telcobridges}
                        dot3={Dot3Telcobridges}
                        />
                </div>
                <div className='clients-content-normal'>
                    <ClientCard 
                        image={AEPLogo}
                        compagnie="AEP"
                        role="Member du conseil central"
                        text={TextAEP}
                        dot1={Dot1AEP}
                        dot2={Dot2AEP}
                        dot3={Dot3AEP}
                        />
                </div>
                <div className='clients-content-reversed'>
                    <ClientCard
                        image={CEGInfoLogo}
                        compagnie="CEGInfo"
                        role="Président & VP-éducation"
                        text={TextCEGInfo}
                        dot1={Dot1CEGInfo}
                        dot2={Dot2CEGInfo}
                        dot3={Dot3CEGInfo}
                        />
                </div>

                {/*
                <div className='clients-content-normal'>
                    <ClientCard image={PolytechniqueLogo} compagnie="Polytechnique Montréal" role="Chargé de cours"  text={LoremIpsum}/>
                </div>
                <div className='clients-content-reversed'>
                    <ClientCard image={LiggoLogo} compagnie="" role="Stage en développement logiciel"  text={LoremIpsum}/>
                </div>
                <div className='clients-content-normal'>
                    <ClientCard image={BombarderLogo} compagnie="Bombardier" role="Stage en développement logiciel"  text={LoremIpsum}/>
                </div>
                */}
            </div>
        </div>
    )
}

export default Clients