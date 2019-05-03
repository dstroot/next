import React from 'react';
import { create } from 'react-test-renderer';
import Contact from '../Contact';

describe('Contact', () => {
  it('it should render', () => {
    let tree = create(<Contact />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
