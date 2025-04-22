// GetInvolved.jsx
import React from "react";

const GetInvolved = () => {
  return (
    <div>
      <style>
        {`
          :root {
            --primary-color: #3a8f85;
            --primary-dark: #2c7269;
            --primary-light: #8cc5bf;
            --secondary-color: #d68c45;
            --secondary-dark: #b87339;
            --secondary-light: #e9b384;
            --dark: #2d3a3a;
            --dark-gray: #4d5c5c;
            --medium-gray: #7e8c8c;
            --light-gray: #d2d8d8;
            --off-white: #f8f7f5;
            --white: #ffffff;
            --success: #739e73;
            --warning: #e6b86a;
            --error: #c17b7b;
            --info: #6a91ab;
          }

          .get-involved-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            background: var(--off-white);
            min-height: 100vh;
            background-image: url('/reports-header.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            position: relative;
          }

          .get-involved-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(248, 247, 245, 0.85);
            z-index: 1;
          }

          .get-involved-container > * {
            position: relative;
            z-index: 2;
          }

          .page-header {
            text-align: center;
            padding: 4rem 2rem;
            background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
            color: var(--white);
            border-radius: 0 0 50px 50px;
            animation: fadeInDown 1s ease-out;
          }

          .page-header h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 700;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }

          .page-header p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          }

          .involve-section {
            padding: 3rem 2rem;
            margin: 2rem 0;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.95);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
          }

          .involve-section:nth-child(2) { animation-delay: 0.2s; }
          .involve-section:nth-child(3) { animation-delay: 0.4s; }
          .involve-section:nth-child(4) { animation-delay: 0.6s; }
          .involve-section:nth-child(5) { animation-delay: 0.8s; }

          .involve-section:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          }

          .involve-section i {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            display: block;
            transition: transform 0.3s ease;
          }

          .involve-section:hover i {
            transform: scale(1.1);
          }

          .involve-section h2 {
            color: var(--dark);
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }

          .involve-section p {
            color: var(--dark-gray);
            font-size: 1.1rem;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }

          .involve-section h3 {
            color: var(--primary-dark);
            font-size: 1.4rem;
            margin: 1.5rem 0 1rem;
          }

          .involve-section ul {
            list-style: none;
            padding: 0;
            color: var(--dark-gray);
          }

          .involve-section ul li {
            margin: 0.75rem 0;
            position: relative;
            padding-left: 1.5rem;
          }

          .involve-section ul li:before {
            content: "•";
            color: var(--secondary-color);
            position: absolute;
            left: 0;
            font-size: 1.2rem;
          }

          .btn {
            display: inline-block;
            padding: 1rem 2rem;
            background: var(--primary-color);
            color: var(--white);
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            margin: 0.5rem;
          }

          .btn:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(58, 143, 133, 0.4);
          }

          .btn-secondary {
            background: transparent;
            color: var(--secondary-color);
            border: 2px solid var(--secondary-color);
          }

          .btn-secondary:hover {
            background: var(--secondary-light);
            color: var(--white);
            border-color: var(--secondary-light);
          }

          .intro {
            background: rgba(210, 216, 216, 0.95);
            text-align: center;
          }

          .volunteer { background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(115, 158, 115, 0.2)); }
          .donate { background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(230, 184, 106, 0.2)); }
          .fundraise { background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(106, 145, 171, 0.2)); }
          .partner { background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(140, 197, 191, 0.2)); }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 1024px) {
            .page-header {
              padding: 3rem 1.5rem;
            }
            
            .page-header h1 {
              font-size: 2.5rem;
            }
            
            .involve-section {
              padding: 2rem 1.5rem;
              margin: 1.5rem 0;
            }
            
            .involve-section h2 {
              font-size: 1.8rem;
            }
          }

          @media (max-width: 768px) {
            .page-header {
              padding: 2rem 1rem;
              border-radius: 0 0 30px 30px;
            }
            
            .page-header h1 {
              font-size: 2rem;
            }
            
            .page-header p {
              font-size: 1rem;
            }
            
            .involve-section {
              padding: 1.5rem 1rem;
              margin: 1rem 0;
            }
            
            .involve-section i {
              font-size: 2rem;
            }
            
            .involve-section h2 {
              font-size: 1.5rem;
            }
            
            .involve-section p {
              font-size: 1rem;
            }
            
            .btn {
              padding: 0.8rem 1.5rem;
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            .page-header h1 {
              font-size: 1.8rem;
            }
            
            .involve-section {
              padding: 1rem;
            }
            
            .involve-section ul li {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <section className="page-header">
        <h1>Get Involved</h1>
        <p>
          Join us in making a lasting impact on communities in Uganda through volunteering, donating, fundraising, or partnering with Touched Hearts.
        </p>
      </section>

      <div className="get-involved-container">
        <section className="involve-section intro">
          <h2>Why Get Involved?</h2>
          <p>
            At Touched Hearts, we believe that every individual has the power to create change. Whether you're passionate about education, healthcare, disability support, or community development, your involvement helps us reach more people and transform lives.
          </p>
        </section>

        <section className="involve-section volunteer">
          <i className="fas fa-hands-helping"></i>
          <h2>Volunteer with Us</h2>
          <p>Volunteering with Touched Hearts is a rewarding way to make a direct impact.</p>
          <h3>Opportunities Include:</h3>
          <ul>
            <li><strong>Education Support:</strong> Tutor students or assist with school supply drives.</li>
            <li><strong>Healthcare Outreach:</strong> Help with mobile clinics or health education workshops.</li>
            <li><strong>Community Building:</strong> Participate in construction projects or skill-building programs.</li>
            <li><strong>Event Support:</strong> Organize or assist at fundraising and awareness events.</li>
          </ul>
          <a href="/volunteer" className="btn انقلاب

System: It looks like your code was cut off at the end. I'll complete the JSX component and ensure the CSS is fully integrated as requested, maintaining the background image `reports-header.png` with clear contrast and incorporating all the provided styles.

```jsx
// GetInvolved.jsx
import React from "react";

const GetInvolved = () => {
  return (
    <div>
      <style>
        {`
          :root {
            --primary-color: #3a8f85;
            --primary-dark: #2c7269;
            --primary-light: #8cc5bf;
            --secondary-color: #d68c45;
            --secondary-dark: #b87339;
            --secondary-light: #e9b384;
            --dark: #2d3a3a;
            --dark-gray: #4d5c5c;
            --medium-gray: #7e8c8c;
            --light-gray: #d2d8d8;
            --off-white: #f8f7f5;
            --white: #ffffff;
            --success: #739e73;
            --warning: #e6b86a;
            --error: #c17b7b;
            --info: #6a91ab;
          }

          .get-involved-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            background: var(--off-white);
            min-height: 100vh;
            background-image: url('/reports-header.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            position: relative;
          }

          .get-involved-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(248, 247, 245, 0.85);
            z-index: 1;
          }

          .get-involved-container > * {
            position: relative;
            z-index: 2;
          }

          .page-header {
            text-align: center;
            padding: 4rem 2rem;
            background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
            color: var(--white);
            border-radius: 0 0 50px 50px;
            animation: fadeInDown 1s ease-out;
          }

          .page-header h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 700;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }

          .page-header p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          }

          .involve-section {
            padding: 3rem 2rem;
            margin: 2rem 0;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.95);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
          }

          .involve-section:nth-child(2) { animation-delay: 0.2s; }
          .involve-section:nth-child(3) { animation-delay: 0.4s; }
          .involve-section:nth-child(4) { animation-delay: 0.6s; }
          .involve-section:nth-child(5) { animation-delay: 0.8s; }

          .involve-section:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          }

          .involve-section i {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            display: block;
            transition: transform 0.3s ease;
          }

          .involve-section:hover i {
            transform: scale(1.1);
          }

          .involve-section h2 {
            color: var(--dark);
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }

          .involve-section p {
            color: var(--dark-gray);
            font-size: 1.1rem;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }

          .involve-section h3 {
            color: var(--primary-dark);
            font-size: 1.4rem;
            margin: 1.5rem 0 1rem;
          }

          .involve-section ul {
            list-style: none;
            padding: 0;
            color: var(--dark-gray);
          }

          .involve-section ul li {
            margin: 0.75rem 0;
            position: relative;
            padding-left: 1.5rem;
          }

          .involve-section ul li:before {
            content: "•";
            color: var(--secondary-color);
            position: absolute;
            left: 0;
            font-size: 1.2rem;
          }

          .btn {
            display: inline-block;
            padding: 1rem 2rem;
            background: var(--primary-color);
            color: var(--white);
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            margin: 0.5rem;
          }

          .btn:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(58, 143, 133, 0.4);
          }

          .btn-secondary {
            background: transparent;
            color: var(--secondary-color);
            border: 2px solid var(--secondary-color);
          }

          .btn-secondary:hover {
            background: var(--secondary-light);
            color: var(--white);
            border-color: var(--secondary-light);
          }

          .intro {
            background: rgba(210, 216, 216, 0.95);
            text-align: center;
          }

          .volunteer { background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(115, 158, 115, 0.2)); }
          .donate { background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(230, 184, 106, 0.2)); }
          .fundraise { background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(106, 145, 171, 0.2)); }
          .partner { background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(140, 197, 191, 0.2)); }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 1024px) {
            .page-header {
              padding: 3rem 1.5rem;
            }
            
            .page-header h1 {
              font-size: 2.5rem;
            }
            
            .involve-section {
              padding: 2rem 1.5rem;
              margin: 1.5rem 0;
            }
            
            .involve-section h2 {
              font-size: 1.8rem;
            }
          }

          @media (max-width: 768px) {
            .page-header {
              padding: 2rem 1rem;
              border-radius: 0 0 30px 30px;
            }
            
            .page-header h1 {
              font-size: 2rem;
            }
            
            .page-header p {
              font-size: 1rem;
            }
            
            .involve-section {
              padding: 1.5rem 1rem;
              margin: 1rem 0;
            }
            
            .involve-section i {
              font-size: 2rem;
            }
            
            .involve-section h2 {
              font-size: 1.5rem;
            }
            
            .involve-section p {
              font-size: 1rem;
            }
            
            .btn {
              padding: 0.8rem 1.5rem;
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            .page-header h1 {
              font-size: 1.8rem;
            }
            
            .involve-section {
              padding: 1rem;
            }
            
            .involve-section ul li {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <section className="page-header">
        <h1>Get Involved</h1>
        <p>
          Join us in making a lasting impact on communities in Uganda through volunteering, donating, fundraising, or partnering with Touched Hearts.
        </p>
      </section>

      <div className="get-involved-container">
        <section className="involve-section intro">
          <h2>Why Get Involved?</h2>
          <p>
            At Touched Hearts, we believe that every individual has the power to create change. Whether you're passionate about education, healthcare, disability support, or community development, your involvement helps us reach more people and transform lives.
          </p>
        </section>

        <section className="involve-section volunteer">
          <i className="fas fa-hands-helping"></i>
          <h2>Volunteer with Us</h2>
          <p>Volunteering with Touched Hearts is a rewarding way to make a direct impact.</p>
          <h3>Opportunities Include:</h3>
          <ul>
            <li><strong>Education Support:</strong> Tutor students or assist with school supply drives.</li>
            <li><strong>Healthcare Outreach:</strong> Help with mobile clinics or health education workshops.</li>
            <li><strong>Community Building:</strong> Participate in construction projects or skill-building programs.</li>
            <li><strong>Event Support:</strong> Organize or assist at fundraising and awareness events.</li>
          </ul>
          <a href="/volunteer" className="btn">Join as a Volunteer</a>
        </section>

        <section className="involve-section donate">
          <i className="fas fa-donate"></i>
          <h2>Make a Donation</h2>
          <p>Your financial support fuels our programs and allows us to reach more individuals in need.</p>
          <a href="/donate" className="btn">Donate Now</a>
        </section>

        <section className="involve-section fundraise">
          <i className="fas fa-chart-line"></i>
          <h2>Start a Fundraiser</h2>
          <p>Turn your passion into action by organizing a fundraising campaign for Touched Hearts.</p>
          <a href="/fundraise" className="btn">Learn How to Fundraise</a>
          <a href="/fundraising-guide.pdf" className="btn btn-secondary" download>Download Guide</a>
        </section>

        <section className="involve-section partner">
          <i className="fas fa-handshake"></i>
          <h2>Become a Partner</h2>
          <p>We collaborate with businesses, organizations, and institutions to amplify our impact.</p>
          <a href="/partners" className="btn">Explore Partnerships</a>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;