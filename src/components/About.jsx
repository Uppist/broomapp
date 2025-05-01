import React from 'react';
import ceoImage from '../assets/ceo.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={ceoImage} alt="Alfred Daboner, Founder & CEO" />
        </div>
        <div className="about-text">
          <blockquote>
            “Our vision for The Brooom App is to be the leading and most trusted partner of comprehensive cleaning services, recognized for our reliability, excellence, and commitment to customer satisfaction.”
          </blockquote>
          <p className="about-author">Alfred Daboner</p>
          <p className="about-title">Founder & CEO, The Broom App</p>
        </div>
      </div>
    </section>
  );
};

export default About;