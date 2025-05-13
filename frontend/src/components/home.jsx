import './home.css'
import Navbar from './navbar'
import TypewriterHero from './typewriter'
import web from '../assets/webcom.png'
import Fade from 'react-awesome-reveal';

export default function Home() {
    return (
        <>
            <div className="h-main">
                <Navbar />
                <div className="h-in">
                    <div className="h-in-1">
                        <Fade direction="up">
                            <TypewriterHero />
                        </Fade>
                    </div>
                    <div className="h-in-2">
                        {/* <Fade direction="right"> */}
                        <img src={web} alt="" />
                        {/* </Fade> */}
                    </div>
                </div>
            </div>
        </>
    )
}
