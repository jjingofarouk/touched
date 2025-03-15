import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <div className="terms-page">
      {/* Navbar */}


      {/* Terms Section */}
      <main>
        <section className="terms-section">
          <h2>Usage Terms</h2>
          <p>
            By accessing and using this website, you agree to comply with the following terms and conditions. These terms apply to all users of the site, including but not limited to donors, volunteers, and visitors. If you do not agree with these terms, you must refrain from using this site.
          </p>

          <h3>1. Eligibility</h3>
          <p>
            You must be at least 18 years of age to use this site. By using the site, you represent that you are of legal age to form a binding contract.
          </p>

          <h3>2. Acceptable Use</h3>
          <p>
            You agree to use this website for lawful purposes only and not to engage in any conduct that may harm or interfere with the functioning of the site or disrupt its users’ access. You must not misuse our site by knowingly introducing viruses, trojans, worms, or other harmful material.
          </p>

          <h3>3. User Account</h3>
          <p>
            If you create an account on our website, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2>Liability</h2>
          <p>
            Touched Hearts makes no representations or warranties of any kind, express or implied, regarding the accuracy or reliability of the content on the website. We are not liable for any damages resulting from the use or inability to use this site, including but not limited to any loss of data or personal information.
          </p>

          <h3>1. Limitation of Liability</h3>
          <p>
            In no event shall Touched Hearts, its directors, employees, or affiliates be liable for any damages, including but not limited to direct, indirect, incidental, special, or consequential damages, even if we have been advised of the possibility of such damages. This applies to any claim, loss, or damage resulting from the use of our website or services.
          </p>

          <h3>2. Indemnity</h3>
          <p>
            You agree to indemnify, defend, and hold harmless Touched Hearts, its directors, employees, affiliates, and volunteers from any claim, liability, loss, or damage arising from your use of the site, your breach of these terms, or your violation of any applicable laws.
          </p>

          <h2>Updates to the Terms</h2>
          <p>
            We reserve the right to update or modify these terms and conditions at any time. When changes are made, we will update the "Last Updated" date at the bottom of this page. Continued use of this site after such changes constitutes your acceptance of the new terms.
          </p>

          <h3>1. Notification of Changes</h3>
          <p>
            We may notify you of significant changes to the Terms & Conditions by posting an announcement on our website or sending a notification to the email address associated with your account. It is your responsibility to regularly check this page for updates.
          </p>

          <h3>2. Governing Law</h3>
          <p>
            These terms shall be governed and construed in accordance with the laws of Uganda. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Uganda.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at{" "}
            <a href="mailto:touchedheartsfoundation@gmail.com">touchedheartsfoundation@gmail.com</a>.
          </p>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default TermsOfService;