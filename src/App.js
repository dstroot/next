import React from 'react';
import './scss/main.scss';

// components
import NextSliders from './components/NextSliders';

const Doubler = ({ number }) => {
  let value = number * 2;
  return <div>Doubled number is {value}</div>;
};

const Header = () => (
  <h1 className="text-center slab">
    What’s your <span className="text-primary">next</span> adventure?
  </h1>
);

const Footer = () => <h1 className="text-center">Footer</h1>;

const App = () => (
  <div className="mt-5">
    <Header />
    <NextSliders />
    <Doubler number={4} />
    <Doubler number={9} />
    <Footer />
  </div>
);

export default App;
