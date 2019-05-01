import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import SectionHero from '../SectionHero';

describe('SectionHero', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<SectionHero />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<SectionHero />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
