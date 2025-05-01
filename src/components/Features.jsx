import React from 'react';

const Features = () => {
  const consumersFeatures = [
    'On-demand access to different types of cleaning services',
    'Geolocation-enabled architecture that helps you find service providers closest to you, thus saving on costs',
    'Rewards-based system that celebrates milestones',
    'Streamlined in-app transactions, payment and more',
  ];

  const providersFeatures = [
    'Geolocation-enabled architecture to help find customers closest to you',
    'Rewards-based system that celebrates milestones',
    'Streamlined in-app transactions, payment and more',
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2>Discover Our Key Features</h2>
        <div className="features-grid">
          <div className="headings-row">
            <h3>For Consumers:</h3>
            <h3 className='service'>For Service Providers:</h3>
          </div>
          <div className="features-content">
            <div className="feature-column">
              <ul>
                {consumersFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="divider"></div>
            <span className="service-mobile"> For Service Providers: </span>
            <div className="feature-column">
              <ul>
                {providersFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;