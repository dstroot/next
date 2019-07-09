import React from 'react';
import { create } from 'react-test-renderer';
import Faq from '../Faq';

describe('Faq', () => {
  it('it should render', () => {
    let tree = create(<Faq />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
