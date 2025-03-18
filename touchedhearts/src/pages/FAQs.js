// FAQs.jsx
import React, { useState } from "react";
import "../styles/faq.css";

const faqs = [
  // Original FAQs
  {
    question: "How can I donate?",
    answer: 'You can donate by visiting our <a href="/donate">donation page</a>, where you can choose the amount you’d like to contribute and select your preferred payment method.',
    category: "Donations"
  },
  {
    question: "Where do funds go?",
    answer: 'All funds raised go directly to supporting our initiatives in education, healthcare, disability support, and community development. For details, visit our <a href="/our-work">Our Work</a> page.',
    category: "Donations"
  },
  {
    question: "How can I volunteer?",
    answer: 'To volunteer, simply fill out our <a href="/get-involved">volunteer sign-up form</a>. We appreciate any time and skills you can offer!',
    category: "Get Involved"
  },
  // Additional FAQs
  {
    question: "What is your organization's mission?",
    answer: 'Our mission is to empower Ugandan communities through sustainable education, healthcare, and development programs. Read more on our <a href="/about">About Us</a> page.',
    category: "About"
  },
  {
    question: "How do you ensure transparency?",
    answer: 'We publish annual reports and financial statements on our <a href="/transparency">Transparency</a> page. All donors receive detailed updates on project impacts.',
    category: "Donations"
  },
  {
    question: "Can businesses partner with you?",
    answer: 'Yes! We welcome corporate partnerships. Contact us at <a href="mailto:partnerships@touchedheartsug12.org">partnerships@touchedheartsug12.org</a> to discuss collaboration opportunities.',
    category: "Get Involved"
  },
  {
    question: "What impact have you made so far?",
    answer: 'Since inception, we’ve supported over 5,000 children with education and provided healthcare to 10,000+ individuals. See our <a href="/impact">Impact Report</a>.',
    category: "About"
  },
  {
    question: "Do you accept in-kind donations?",
    answer: 'Yes, we accept school supplies, medical equipment, and more. Check our <a href="/in-kind">In-Kind Donation</a> page for current needs.',
    category: "Donations"
  },
  {
    question: "How are volunteers trained?",
    answer: 'All volunteers receive comprehensive orientation and ongoing training specific to their roles. Learn more on our <a href="/volunteer-training">Training page</a>.',
    category: "Get Involved"
  },
  {
    question: "What’s your long-term vision?",
    answer: 'We aim to create self-sustaining communities across Uganda by 2035. Explore our <a href="/vision">Vision</a> page for details.',
    category: "About"
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = ["All", ...new Set(faqs.map(faq => faq.category))];

  const filteredFAQs = faqs.filter(faq => 
    (selectedCategory === "All" || faq.category === selectedCategory) &&
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="faq-container">
      <section className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-controls">
          <input
            type="search"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="faq-search"
          />
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-content">
        <div className="accordion">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <button
                  className={`accordion-button ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="accordion-icon">{activeIndex === index ? "−" : "+"}</span>
                </button>
                <div
                  className={`accordion-content ${activeIndex === index ? "open" : ""}`}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))
          ) : (
            <p className="no-results">No FAQs match your search.</p>
          )}
        </div>
      </section>

      <section className="cta-section">
        <p>Still need help? <a href="/contact">Contact our team</a> for personalized assistance.</p>
      </section>
    </main>
  );
};

export default FAQs;