import React from 'react';

const Payment = () => {
    return (
        <div className='transactions'>
            <div className='service'>
                <div className='transaction-icon'>This is my transaction</div>
                <div className='transaction-image'>Transaction done</div>
            </div>
            <div className='payments'>
                <div className='payments-icon'>This is my payment</div>
                <div className='payments-image'>Payment done</div>
            </div>
        </div>
    )

}

export default Payment;