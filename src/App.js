import React from 'react';
import './scss/main.scss';
import { ParallaxProvider } from 'react-scroll-parallax';

// Fonts
import 'circular-std';
import 'typeface-zilla-slab';

// Router
import { Router } from '@reach/router';

// Components
import NavBar from './components/NavBar';

// Pages
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import NextDeferredIncomeAnnuity from './pages/NextDeferredIncomeAnnuity';
import Contact from './pages/Contact';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SocialMediaGuidelines from './pages/SocialMediaGuidelines';

const App = () => (
  <div className="mt-5">
    <ParallaxProvider>
      <NavBar />
      <Router>
        <NotFound path="/404" default />
        <Home path="/" />
        <About path="/about" />
        <NextDeferredIncomeAnnuity path="/nextdeferredincomeannuity" />
        <Contact path="/contact" />
        <TermsOfUse path="/terms" />
        <PrivacyPolicy path="/privacy" />
        <SocialMediaGuidelines path="/social" />
      </Router>
    </ParallaxProvider>
  </div>
);

export default App;
