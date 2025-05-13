import './App.css';
import Home from './components/home';
import Service from './components/service';
import About from './components/about';
import Footer from './components/footer';
import pad from './assets/ipad.jpg'
import Team from './components/team';
import Contact from './components/contact';
import { useEffect, useState } from 'react';

function App() {
  const members = [
  {
    quote: "The attention to detail and innovative features have completely transformed our workflow.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    quote: "Implementation was seamless and the results exceeded our expectations.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    quote: "Outstanding support and robust features.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39",
  },
];
const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

  return (
    <div className="main">
      {showSplash ? (
  <div className="splash splash-exit">
    <h1>Welcome to <br /> <span> Bash Space </span> </h1>
  </div>
) : (
  <>
    <Home />
    <About
      titleComponent={
        <div>
          <h1>Welcome to BashSpace</h1>
          <span>Where imagination Meets Reality</span>
        </div>
      }
    >
      <img
        src={pad}
        alt="hero"
        height={720}
        width={1400}
        draggable={false}
      />
    </About>
      <Service />
    {/* <Team members={members} autoplay /> */}
    <Contact />
    <Footer />
  </>
)}

    </div>
  );
}

export default App;
