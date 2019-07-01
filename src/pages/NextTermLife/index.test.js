import React from 'react';
import { create } from 'react-test-renderer';
import NextTermLife from '../NextTermLife';

describe('NextTermLife', () => {
  it('it should render', () => {
    let tree = create(<NextTermLife />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
