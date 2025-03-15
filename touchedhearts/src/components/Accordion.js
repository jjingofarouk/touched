// src/components/Accordion.js
import React, { useState } from 'react';

const Accordion = ({ title, details }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="program-item">
      <div className="program-header" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <span className={`toggle-icon ${isActive ? 'active' : ''}`}>▼</span>
      </div>
      <div className={`program-details ${isActive ? 'active' : ''}`}>
        {details.map((detail, idx) => (
          <p key={idx}>{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default Accordion;