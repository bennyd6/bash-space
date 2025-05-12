import './home.css'
import Navbar from './navbar'
import TypewriterHero from './typewriter'
import web from '../assets/webcom.png'

export default function Home(){
    return(
        <>
        <div className="h-main">
            <Navbar />
            <div className="h-in">   
                <div className="h-in-1">
                    <TypewriterHero />
                </div>
                <div className="h-in-2">
                    {/* <div className="web-out"> */}
                        <img src={web} alt="" />
                    {/* </div> */}
                </div>
            </div>
        </div>
        </>
    )
}
