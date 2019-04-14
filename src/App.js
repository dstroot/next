import React from 'react';
import './scss/main.scss';
import NextSliders from './components/NextSliders';

const Doubler = ({ number }) => {
  let value = number * 2;
  return <div>doubled number is {value}</div>;
};

const Header = () => <h1 className="text-primary">Header</h1>;

const Footer = () => <div>Footer</div>;

const App = () => (
  <div className="mt-5">
    <Header />
    <NextSliders />
    <div className="lead">Welcome Team!</div>
    <Doubler number={4} />
    <Doubler number={9} />
    <Footer />
  </div>
);

export default App;
