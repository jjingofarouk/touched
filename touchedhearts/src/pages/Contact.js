// src/pages/Contact.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm'; // Assuming this exists
 // Adjust based on your CSS setup

const Contact = () => {
  return (
    <div className="contact-page">


      <main>
        {/* Contact Form Section */}
        <section className="contact-form">
          <h2>Get in Touch</h2>
          <ContactForm
            action="https://formsubmit.co/jjingofarouq@gmail.com"
            method="POST"
            fields={[
              { id: 'name', type: 'text', label: 'Name', placeholder: 'Your Name', required: true },
              { id: 'email', type: 'email', label: 'Email', placeholder: 'Your Email', required: true },
              { id: 'message', type: 'textarea', label: 'Message', placeholder: 'Your Message', rows: 5, required: true },
            ]}
            hiddenFields={[
              { name: '_next', value: 'https://touch-tau.vercel.app' },
              { name: '_captcha', value: 'false' },
            ]}
            submitText="Send Message"
          />
        </section>

        {/* Google Maps Section */}
        <section className="map">
          <h2>Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151515.675574223!2d29.32265846057074!3d1.3732654543104955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177cc2a54a5371df%3A0x7eb5a3c219c5fdc!2sUganda!5e0!3m2!1sen!2sug!4v1649412264912!5m2!1sen!2sug"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Touched Hearts Location"
          ></iframe>
        </section>

        {/* Contact Details Section */}
        <section className="contact-details">
          <h2>Our Contact Details</h2>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:touchedheartsfoundation@gmail.com">touchedheartsfoundation@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+256123456789">+256 123 456 789</a>
          </p>
          <p>
            <strong>Address:</strong> 123 Kampala Road, Kampala, Uganda
          </p>
        </section>
      </main>

      
    </div>
  );
};

export default Contact;