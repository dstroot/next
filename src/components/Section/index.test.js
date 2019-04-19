import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Section from '../Section';

describe('Section', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<Section />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<Section />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
