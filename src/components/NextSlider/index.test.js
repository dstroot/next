import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import NextSlider from '../NextSlider';

describe('NextSlider', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<NextSlider />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<NextSlider />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
