import './footer.css';
import l from '../assets/linkedin.png'
import i from '../assets/instagram.png'

export default function Footer() {
    return (
        <footer className="f-main">
            <div className="f-content">
                <h2 className="brand-name">Bash Space</h2>
                <div className="social-links">
                    <a href="www.linkedin.com/in/benny-bandarupalli" target="_blank" rel="noopener noreferrer">
                        <img src={l} alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com/_bashspace_" target="_blank" rel="noopener noreferrer">
                        <img src={i} alt="Instagram" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
