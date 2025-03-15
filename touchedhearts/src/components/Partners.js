// src/components/Partners.js
import React, { useRef, useState } from "react";
import "./Partners.css"; // Ensure to create a corresponding CSS file for styling

const partnersList = [
  { img: require("../assets/images/indo.jpg"), alt: "Indo Africa" },
  { img: require("../assets/images/mtn.PNG"), alt: "MTN" },
  { img: require("../assets/images/carewave.png"), alt: "CareWave" },
  { img: require("../assets/images/airtel.PNG"), alt: "Airtel Uganda" },
  { img: require("../assets/images/agrisonic.jpg"), alt: "AgriSonic" },
  { img: require("../assets/images/askosler.jpg"), alt: "AskOsler" },
  { img: require("../assets/images/frank.jpg"), alt: "Frank Shoe World" },
  { img: require("../assets/images/nfaako.jpg"), alt: "Nfaako AI Mentor" },
  { img: require("../assets/images/ssuubi.jpg"), alt: "Sssubi Pro" },
  { img: require("../assets/images/senticare.jpg"), alt: "SentiCare" },
];

const Partners = ({ partners = partnersList }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(partners.length / 3);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Adjust scrolling distance as needed
    }
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  return (
    <section className="partners" aria-labelledby="partners-title">
      <h2 id="partners-title" className="section-title">Our Trusted Partners</h2>
      <p className="partners-text">
        We collaborate with industry leaders to deliver exceptional solutions and create lasting impact.
      </p>

      <div className="partners-grid-container">
        <button className="partners-nav partners-nav-prev" onClick={scrollLeft} disabled={currentIndex === 0}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="partners-grid" ref={scrollRef}>
          {partners.map((partner, index) => (
            <div className="partner-logo" key={index}>
              <img src={partner.img} alt={partner.alt} />
            </div>
          ))}
        </div>

        <button className="partners-nav partners-nav-next" onClick={scrollRight} disabled={currentIndex === totalSlides - 1}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="partners-indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span key={index} className={`partners-dot ${index === currentIndex ? "active" : ""}`}></span>
        ))}
      </div>

      <a href="/partners" className="text-link">
        Become a Partner <i className="fas fa-arrow-right"></i>
      </a>
    </section>
  );
};

export default Partners;