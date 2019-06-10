import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import SectionQuoteToday from '../SectionQuoteToday';

describe('SectionQuoteToday', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<SectionQuoteToday />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<SectionQuoteToday />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
