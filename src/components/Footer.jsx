import React from 'react';
import logo2 from '../assets/broomapp-logo2.png';
import locationIcon from '../assets/location-icon.svg';
import contactIcon from '../assets/contact-icon.svg';
import hoursIcon from '../assets/hours-icon.svg';
import facebookIcon from '../assets/facebookicon.svg';
import xIcon from '../assets/xicon.svg';
import linkedinIcon from '../assets/linkedinicon.svg';
import instagramIcon from '../assets/instagramicon.svg';
import uppistIcon from '../assets/uppist-icon.png'; // Placeholder for Uppist icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <div className="footer-info-item">
            <img src={locationIcon} alt="Location" className="footer-icon" />
            <div>
              <h3>Location</h3>
              <p>Yaba, Lagos</p>
            </div>
          </div>
          <div className="footer-info-item">
            <img src={contactIcon} alt="Contact" className="footer-icon" />
            <div>
              <h3>Contact</h3>
              <p>Email: <a href="mailto:info@thebroomapp.com">info@thebroomapp.com</a></p>
              <p>Phone: +2349137454110</p>
            </div>
          </div>
          <div className="footer-info-item">
            <img src={hoursIcon} alt="Work Hours" className="footer-icon" />
            <div>
              <h3>Work Hours</h3>
              <p>Monday to Friday</p>
              <p className="time">9am–5pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-brand">
            <img src={logo2} alt="The Broom App Logo" className="footer-logo" />
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Connect with us</h3>
            <div className="social-icons">
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <img src={xIcon} alt="X" className="social-icon" />
              </a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© The BroomApp 2025 All Rights Reserved.</p>
          <p className="footer-designed">
            designed by{' '}
            <a href="http://www.uppist.xyz/" target="_blank" rel="noopener noreferrer">
              <img src={uppistIcon} alt="Uppist" className="uppist-icon" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;