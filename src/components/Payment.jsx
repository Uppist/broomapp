import React from 'react';
import tick1 from '../assets/tick1.svg';
import tick2 from '../assets/tick2.svg';
import man1 from '../assets/man1.png';
import iphone15 from '../assets/iphone15.png';

const Payments = () => {
  return (
    <section className="payments">
      <div className="payments-container">
        {/* Row 1 */}
        <div className="payments-row">
          <div className="payments-text-left">
            <img src={tick1} alt="Tick Icon 1" />
            <p>Transparent in-app transactions. <br />Your payments are safely and <br />
            genuinely processed.</p>
          </div>
          <div className="payments-text-right">
            <p>Simply place an order and <br />watch our algorithm match you <br /> with the most suitable service <br /> provider.</p>
            <img src={iphone15} alt="iPhone 15" />
          </div>
        </div>
        {/* Row 2 */}
        <div className="payments-row">
          <div className='payment-text-bg-color'>
            <img className='payment-text-bg-color-icon2' src={tick2} alt="Tick Icon 2" />
            <p>Experience convenient home cleaning services at the tap of a button.</p>
            </div>
          <div className="payments-text-right2">
            <p>Earn redeemable reward points as you transact frequently on the app.</p>
            <img src={man1} alt="Man with Phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;