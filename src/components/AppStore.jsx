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
          <h2>The Broom App simplifies access to on-demand cleaning services, making it more convenient for everyday users.</h2>
          <p>We’ll love to let you know once we’ve launched!</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBkICxa-qhgs9yWX2sVB8-DnfIsLaXb7Vny-HmxeT0ClS_iw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="join-waitlist-btn">Join Waitlist</button>
          </a>
          <div className="store-buttons">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBkICxa-qhgs9yWX2sVB8-DnfIsLaXb7Vny-HmxeT0ClS_iw/viewform" target="_blank" rel="noopener noreferrer">
              <img src={appStoreButton} alt="Download on the App Store" className="store-button" />
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBkICxa-qhgs9yWX2sVB8-DnfIsLaXb7Vny-HmxeT0ClS_iw/viewform" target="_blank" rel="noopener noreferrer">
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