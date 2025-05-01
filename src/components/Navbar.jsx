import React, { useState } from 'react';
import logo from '../assets/broomapp-logo.png'; // Adjust based on your logo file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="The Broom App Logo" />
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="navbar-hamburger-x">×</span>
          ) : (
            <span className="navbar-hamburger-icon">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </span>
          )}
        </div>

        {/* Navigation Links (visible on desktop, hidden on mobile unless menu is open) */}
        <ul className={`navbar-links ${isMenuOpen ? 'navbar-links-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Join Waitlist Button (visible on desktop, hidden on mobile unless menu is open) */}
        <div className={`navbar-button ${isMenuOpen ? 'navbar-button-open' : ''}`}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeBkICxa-qhgs9yWX2sVB8-DnfIsLaXb7Vny-HmxeT0ClS_iw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="join-waitlist-btn">Join Waitlist</button>
        </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;