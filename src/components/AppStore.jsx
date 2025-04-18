import React from 'react';
import personImage from '../assets/person-using-iphone.jpg';
import appStoreButton from '../assets/appstore-button.png';
import googlePlayButton from '../assets/googleplay-button.png';

const AppStore = () => {
  return (
    <section id="appstore" className="appstore">
      <div className="appstore-container">
        {/* Text Content */}
        <div className="appstore-text">
          <h2>The Broom App simplifies access to on-demand cleaning services, making it more convenient for every user.</h2>
          <p>We’ll love to let you know once we’ve launched!</p>
          <button className="join-waitlist-btn">Join Waitlist</button>
          <div className="store-buttons">
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <img src={appStoreButton} alt="Download on the App Store" className="store-button" />
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <img src={googlePlayButton} alt="Get it on Google Play" className="store-button" />
            </a>
          </div>
        </div>

        {/* Person Image */}
        <div className="appstore-image">
          <img src={personImage} alt="Person using The Broom App" />
        </div>
      </div>
    </section>
  );
};

export default AppStore;