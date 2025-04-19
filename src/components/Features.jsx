import React from 'react';
import icon from '../assets/icon.jpg'; // Import the icon image

const Features = () => {
  const featuresList = [
    {
      title: 'On-demand cleaning services',
      description: '',
    },
    {
      title: 'Soft marketplace that allows service providers to set up shop on the app.',
      description: '',
    },
    {
      title: 'Geolocation-enabled architecture so that you find service providers closest to you.',
      description: 'This in turn helps you save money as you do not need to pay more for long-distance providers.',
    },
    {
      title: 'Rewards-based system that celebrates milestones',
      description: '',
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2>Discover Our Key Features</h2>
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div key={index} className="feature-item">
              <img src={icon} alt="Feature Icon" className="feature-icon" />
              <div className='disk'>
              <h3>{feature.title}</h3>
              {feature.description && <p>{feature.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;