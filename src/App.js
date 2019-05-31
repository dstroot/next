import React from 'react';
import './scss/main.scss';

// Fonts
import 'circular-std';
import 'typeface-zilla-slab';

// Router
import { Router } from '@reach/router';

// Components
import Footer from './components/Footer';
import NavBar from './components/NavBar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import NextDeferredIncomeAnnuity from './pages/NextDeferredIncomeAnnuity';
import Contact from './pages/Contact';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SocialMediaGuidelines from './pages/SocialMediaGuidelines';

const App = () => (
  <div className="mt-5">
    <NavBar />
    <Router>
      <Home path="/" default />
      <About path="/about" />
      <NextDeferredIncomeAnnuity path="/nextdeferredincomeannuity" />
      <Contact path="/contact" />
      {/*footer*/}
      <TermsOfUse path="/terms" />
      <PrivacyPolicy path="/privacy" />
      <SocialMediaGuidelines path="/social" />
    </Router>
    <Footer />
  </div>
);

export default App;
