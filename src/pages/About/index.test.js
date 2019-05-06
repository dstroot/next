import React from 'react';
import { create } from 'react-test-renderer';
import About from '../About';

describe('About', () => {
  it('it should render', () => {
    let tree = create(<About />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
