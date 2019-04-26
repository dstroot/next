import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import SectionDesignWithYouInMind from '../SectionDesignWithYouInMind';

describe('SectionDesignWithYouInMind', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<SectionDesignWithYouInMind />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<SectionDesignWithYouInMind />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
