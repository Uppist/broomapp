import React from 'react';
import iphone from '../assets/iphone13.png'; // Import the iPhone image

const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="benefits-container">
        {/* Text Content */}
        <div className="benefits-text">
          <h2>What is The Broom App?</h2>
          <p>
            The Broom App simplifies access to on-demand cleaning services, making it more convenient for every user.
            <br />
            <br />
            Our platform instantly connects individuals in need of cleaning services with trusted, thoroughly vetted providers.
          </p>
        </div>

        {/* iPhone Image */}
        <div className="benefits-image">
          <img src={iphone} alt="iPhone with The Broom App Login Screen" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;