import React, { useState } from "react";
import '../styles/VolunteerForm.css';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Thank you for signing up to volunteer!");
  };

  return (
    <form id="volunteer-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Full Name" required onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Email Address" required onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="skills">Your Skills or Interests</label>
        <input type="text" id="skills" name="skills" placeholder="E.g., Teaching, Medical, Event Planning" required onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="message">Why Do You Want to Volunteer?</label>
        <textarea id="message" name="message" placeholder="Tell us your motivation" rows="4" required onChange={handleChange}></textarea>
      </div>
      <button type="submit">Sign Up to Volunteer</button>
    </form>
  );
};

export default VolunteerForm;
