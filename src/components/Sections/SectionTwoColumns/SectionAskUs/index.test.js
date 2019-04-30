import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import SectionAskUs from '../SectionAskUs';

describe('SectionAskUs', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<SectionAskUs />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<SectionAskUs />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
