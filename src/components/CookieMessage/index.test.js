import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import CookieMessage from '../CookieMessage';

describe('CookieMessage', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<CookieMessage />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    const component = renderer.create(<CookieMessage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should be at the bottom of the page', () => {
    expect(
      getMountedComponent()
        .find('div')
        .first()
        .hasClass('fixed-bottom')
    ).toBe(true);
  });

  it('it should contain the expected text', () => {
    const tableCell = getMountedComponent()
      .find('td')
      .first();
    expect(tableCell.text()).toContain(
      'We use cookies to understand the performance of our web site, enable social media features, and serve more relevant content to you. We may also use cookies on our and our partners’ behalf to help us manage advertising and assess the performance of our campaigns. For further information please see our'
    );
  });

  it('it should have a link to /cookiepolicy', () => {
    const link = getMountedComponent().find("[href='/cookiepolicy']");
    expect(link.length).toBeGreaterThan(0);
  });

  it('it should have a button that says "I agree"', () => {
    const button = getMountedComponent().find('button');
    expect(button.text()).toContain('I Agree');
  });

  it('it should disappear when the button is clicked', () => {
    let div = getMountedComponent()
      .find('div')
      .first();
    expect(div.length).toBeGreaterThan(0);

    // now click the button
    const button = getMountedComponent().find('button');
    button.simulate('click');

    // div should be gone
    div = getMountedComponent()
      .find('div')
      .first();
    expect(div.length).toBe(0); // doesn't exist anymore
  });
});
