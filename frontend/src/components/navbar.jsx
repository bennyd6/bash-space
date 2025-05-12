import './navbar.css'
import logo from '../assets/logo.png'

export default function Navbar(){
    return(
        <>
        <div className="nav-main">
            <div className="nav-in-1">
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">About Us</a>
            </div>
            <div className="nav-logo">
                <h1>bash space.</h1>
            </div>
            <div className="nav-in-2">
                <a href="">Experience</a>
                <a href="">Team</a>
                <a href="">Contact</a>
            </div>
        </div>
        </>
    )
}