// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BasicExample from './components/BasicExample';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Education from './pages/Education';
import Healthcare from './pages/Healthcare';
import Disabilities from './pages/Disabilities';
import Community from './pages/Community';
import Stories from './pages/Stories';
import Gallery from './pages/Gallery';
import GetInvolved from './pages/GetInvolved';
import Volunteers from './pages/Volunteers';
import PartnersPage from './pages/Partners'; // Renamed to avoid conflict with Partners component
import Donate from './pages/Donate';
import Blog from './pages/Blog';
import CommunityNews from './pages/news/Community';
import CampNews from './pages/news/Camp';
import CommunitySkillingNews from './pages/news/CommunitySkilling';
import Events from './pages/Events';
import AnnualReports from './pages/AnnualReports';
import FinancialStatements from './pages/FinancialStatements';
import Media from './pages/Media';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Accessibility from './pages/Accessibility';
import Fundraise from './pages/Fundraise';
import Team from './pages/Team';

// Global styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/basic" element={<BasicExample />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/education" element={<Education />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/disabilities" element={<Disabilities />} />
            <Route path="/community" element={<Community />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/news/community" element={<CommunityNews />} />
            <Route path="/news/camp" element={<CampNews />} />
            <Route path="/news/community-skilling" element={<CommunitySkillingNews />} />
            <Route path="/events" element={<Events />} />
            <Route path="/annual-reports" element={<AnnualReports />} />
            <Route path="/financial-statements" element={<FinancialStatements />} />
            <Route path="/media" element={<Media />} />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/fundraise" element={<Fundraise />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;