import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How much does The BroomApp charge users?',
      answer: 'We only charge for one-off transaction fee when an order is successfully placed', // Placeholder content
    },
    {
      question: 'How does the BroomApp recommend service providers?',
      answer: "Our powerful algorithms scan for vendors listed on the app's backend to suggest the most suitable provider nearest to you, which helps you save costs.", // Placeholder content
    },
    {
      question: 'Are there any rewards when I use the app?',
      answer: 'The Broom App has an in-built rewards system that compensates frequent users that have been consistently active over a period of time.', // Placeholder content
    },
    {
      question: 'What happens if I place an order and the service provider does not deliver?',
      answer: "We adhere to strict vetting procedures. In the event that a service provider fails to show up, you'll have the option of rescheduling with another provider or seeking a refund.", // Placeholder content
    },
  ];

  // State to track which FAQ item is open (null if none are open)
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the dropdown for a specific FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <h2>FAQs</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)} // Moved onClick to the entire question area
                role="button" // Add role for accessibility
                tabIndex={0} // Make focusable for keyboard navigation
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleFAQ(index); // Support keyboard toggle
                    e.preventDefault();
                  }
                }}
              >
                <span>{faq.question}</span>
                <button
                  className="faq-toggle"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {openIndex === index ? '>' : '>'}
                </button>
              </div>
              <div
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
                id={`faq-answer-${index}`}
              >
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;