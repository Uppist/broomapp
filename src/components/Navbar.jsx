import React from 'react';
import logo from '../assets/logo.jpg'; // Adjust based on your logo file

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo (image with icon and text) */}
        <div className="navbar-logo">
          <img src={logo} alt="The Broom App Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Join Waitlist Button */}
        <div className="navbar-button">
          <button className="join-waitlist-btn">Join Waitlist</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;