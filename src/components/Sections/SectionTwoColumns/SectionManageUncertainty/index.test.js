import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import SectionManageUncertainty from '../SectionManageUncertainty';

describe('SectionManageUncertainty', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<SectionManageUncertainty />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<SectionManageUncertainty />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
