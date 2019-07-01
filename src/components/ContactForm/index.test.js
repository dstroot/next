import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<ContactForm />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(<ContactForm />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
