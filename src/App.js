import React from 'react';
import './scss/main.scss';
import NextSliders from './components/NextSliders';

const Doubler = ({ number }) => {
  let value = number * 2;
  return <div>doubled number is {value}</div>;
};

const Header = () => <div>Header</div>;

const App = () => (
  <div className="mt-5">
    <Header />
    <NextSliders />
    <div className="lead">
      Welcome Team!
      <Doubler number={4} />
      <Doubler number={9} />
    </div>
  </div>
);

export default App;
