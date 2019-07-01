import React from 'react';
import { create } from 'react-test-renderer';
import NotFound from '../NotFound';

describe('NotFound', () => {
  it('it should render', () => {
    let tree = create(<NotFound />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
