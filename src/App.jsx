import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Navbar from './components/Navbar.jsx';
import Features from './components/Features.jsx';
import Home from './components/Home.jsx';
import Benefits from './components/Benefits.jsx';
import AppStore from './components/AppStore.jsx';
import FAQ from './components/FAQ.jsx';
import About from './components/About.jsx';

function App() {
  const features = useRef (null)
  const scrollTo = (element) => {
    window.scrollTo ({
      top:element.current.offsetTop,
      behavior:"smooth"
    })
  }
  return <div>
    <Navbar />
    <Home />
    <Features />
    <Benefits />
    <AppStore />
    <FAQ />
    <About />
  </div>
}

export default App;