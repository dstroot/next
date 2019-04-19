import React from 'react';
import renderer from 'react-test-renderer';

import NavBar from '../NavBar';
import { isActive } from '../NavBar';

describe('NavBar', () => {
  it('it should render', () => {
    const component = renderer.create(<NavBar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe('isActive', () => {
//   it("it should return 'active nav-link' if active", () => {
//     let expected = { className: 'nav-link' };
//     let isCurrent = true
//     let result = isActive();
//     expect(result).toEqual(expected);
//   });
//   it("it should return 'nav-link' if not active", () => {
//     let expected = { className: 'active nav-link' };
//     let result = isActive();
//     expect(result).toEqual(expected);
//   });
// });
