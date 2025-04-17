import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import Navbar from './components/Navbar.jsx';
import Features from './components/Features.jsx';
import Home from './components/Home.jsx';
import Benefits from './components/Benefits.jsx';
import AppStore from './components/AppStore.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Features />
    <Benefits />
    <AppStore />
  </React.StrictMode>
)