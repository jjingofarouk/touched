import React, { useState } from "react";
import "../styles/components.css"; // Adjust styles import as needed
import "../styles/faq.css";

const faqs = [
  {
    question: "How can I donate?",
    answer:
      'You can donate by visiting our <a href="/donate">donation page</a>, where you can choose the amount you’d like to contribute and select your preferred payment method.',
  },
  {
    question: "Where do funds go?",
    answer:
      'All funds raised go directly to supporting our initiatives in education, healthcare, disability support, and community development. For details, visit our <a href="/our-work">Our Work</a> page.',
  },
  {
    question: "How can I volunteer?",
    answer:
      'To volunteer, simply fill out our <a href="/get-involved">volunteer sign-up form</a>. We appreciate any time and skills you can offer!',
  },
  {
    question: "What programs do you run?",
    answer:
      'We offer programs in education, healthcare, community development, and disability support. Learn more on our <a href="/programs">Programs</a> page.',
  },
  {
    question: "Can I fundraise for your cause?",
    answer:
      'Yes! You can start a fundraiser to support us. Visit our <a href="/get-involved">fundraise page</a> for details.',
  },
  {
    question: "How do I attend your events?",
    answer:
      'Find details on upcoming events on our <a href="/events">Events</a> page. Some may require registration.',
  },
  {
    question: "Are donations tax-deductible?",
    answer:
      'Yes, donations may be tax-deductible depending on your country’s laws. You’ll receive a receipt for tax purposes. Contact <a href="mailto:touchedheartsug12@gmail.com">touchedheartsug12@gmail.com</a> for assistance.',
  },
  {
    question: "How do you choose communities to support?",
    answer:
      'We focus on Ugandan communities with limited access to education and healthcare. We collaborate with local leaders to identify needs.',
  },
  {
    question: "Can I sponsor a child’s education?",
    answer:
      'Yes, you can support a child’s education through our sponsorship program. Visit our <a href="/education">Education page</a> to learn more.',
  },
  {
    question: "How can I stay updated on your work?",
    answer:
      'Subscribe to our newsletter on the <a href="/">homepage</a> or follow us on social media.',
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="faq-container">
      <section className="faq-section">
        <h2>Common Questions</h2>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <button
                className={`accordion-button ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
              </button>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "open" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <p>
          Still have questions? <a href="/contact">Contact us</a> and we’d be
          happy to assist you!
        </p>
      </section>
    </main>
  );
};

export default FAQs;