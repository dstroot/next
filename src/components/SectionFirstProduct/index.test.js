import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import SectionFirstProduct from '../SectionFirstProduct';

describe('SectionFirstProduct', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<SectionFirstProduct />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<SectionFirstProduct />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
