import React from 'react';
import { create } from 'react-test-renderer';
import NextDeferredIncomeAnnuity from '../NextDeferredIncomeAnnuity';

describe('NextDeferredIncomeAnnuity', () => {
  it('it should render', () => {
    let tree = create(<NextDeferredIncomeAnnuity />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
