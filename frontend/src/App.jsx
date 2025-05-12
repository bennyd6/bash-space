import './App.css';
import Home from './components/home';
import Service from './components/service';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="main">
      <Home />
      <Service />
      <About
        titleComponent={
          <>
          </>
        }
      >
        <img
          src="/linear.webp"
          alt="hero"
          height={720}
          width={1400}
          draggable={false}
        />
      </About>
        <Footer></Footer>
    </div>
  );
}

export default App;
