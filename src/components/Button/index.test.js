import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import ButtonComponent from '.';

describe('ButtonComponent', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<ButtonComponent />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<ButtonComponent />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
