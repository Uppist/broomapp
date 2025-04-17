import React from 'react';
import iphone from '../assets/iphone12.jpg'; // Import the iPhone image

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Text Content */}
        <div className="hero-text">
          <h1>Find vetted and trusted cleaning service providers nearest to you.</h1>
          <p>Our platform instantly connects individuals in need of cleaning services with trusted, thoroughly vetted providers.</p>
          <button className="join-waitlist-btn">Join Waitlist</button>
        </div>

        {/* iPhone Image */}
        <div className="hero-image">
          <img src={iphone} alt="iPhone with The Broom App" />
        </div>
      </div>
    </section>
  );
};

export default Home;