import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import SectionStayInTouch from '../SectionStayInTouch';

describe('SectionStayInTouch', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<SectionStayInTouch />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<SectionStayInTouch />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
