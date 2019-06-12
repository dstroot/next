import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import SectionHowItWorks from '../SectionHowItWorks';

describe('SectionHowItWorks', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<SectionHowItWorks />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<SectionHowItWorks />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
