// src/pages/PrivacyPolicy.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/privacy-policy.css';  // Add styles specific to this page

const PrivacyPolicy = () => {
  return (
    <div>

      
      <main>
        <section className="privacy-policy-section">
          <h2>Introduction</h2>
          <p>Your privacy is important to us. This Privacy Policy explains how Touched Hearts collects, uses, and protects your personal information. By using our website, you agree to the terms outlined in this policy.</p>

          <h2>Data Collection</h2>
          <p>We collect personal information that you provide directly to us when you use our services. This may include:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details.</li>
            <li><strong>Payment Information:</strong> Data related to donations, including payment method and transaction details.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser types, and pages visited.</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your experience. For more information, see our Cookie Policy.</li>
          </ul>

          <h2>Data Usage</h2>
          <p>The information we collect is used to:</p>
          <ul>
            <li>Provide and improve our services.</li>
            <li>Process donations and manage volunteer applications.</li>
            <li>Respond to inquiries and support requests.</li>
            <li>Send newsletters, updates, and promotional materials (if you have opted in).</li>
            <li>Analyze website traffic and improve user experience.</li>
          </ul>

          <h2>User Rights</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> You can request access to the personal data we hold about you.</li>
            <li><strong>Correction:</strong> You can request correction of any inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> You can request the deletion of your personal data under certain circumstances.</li>
            <li><strong>Opt-out:</strong> You can opt-out of marketing communications at any time by unsubscribing from our emails.</li>
            <li><strong>Data Portability:</strong> You can request your personal data in a structured, commonly used format.</li>
          </ul>

          <h2>Data Security</h2>
          <p>We implement security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top of the page.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:touchedheartsfoundation@gmail.com">touchedheartsfoundation@gmail.com</a>.</p>
        </section>
      </main>
      
      
    </div>
  );
};

export default PrivacyPolicy;