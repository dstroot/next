import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Card from '../Card';

describe('Card', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<Card />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<Card />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
