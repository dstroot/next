import React from 'react';
import './scss/main.scss';

// Fonts
import 'circular-std';
import 'typeface-zilla-slab';

// Router
import { Router } from '@reach/router';

// Components
import NextSlider from './components/NextSlider';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

// Pages
import Home from './pages/Home';

const App = () => (
  <div className="mt-5">
    <NavBar />
    <Router>
      <Home path="/" />
      <NextSlider path="/slider" />
    </Router>
    <Footer />
  </div>
);

export default App;
