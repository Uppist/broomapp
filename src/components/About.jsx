import React from 'react';
import ceoImage from '../assets/ceo.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={ceoImage} alt="Alfred Daboner, Founder & CEO" />
        </div>
        <div className="about-text">
          <blockquote>
            “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.”
          </blockquote>
          <p className="about-author">Alfred Daboner</p>
          <p className="about-title">Founder & CEO, The Broom App</p>
        </div>
      </div>
    </section>
  );
};

export default About;