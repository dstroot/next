import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import SectionBestLife from '../SectionBestLife';

describe('SectionBestLife', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<SectionBestLife />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<SectionBestLife />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
