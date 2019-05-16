import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Button from '.';

describe('Button', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<Button path="/" />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<Button path="/" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
