import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

// component to test
import NavBar from '../NavBar';

// simulate window resize
const fireResize = width => {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};

describe('NavBar', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<NavBar />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render small', () => {
    fireResize(320);
    const component = renderer.create(<NavBar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render large', () => {
    fireResize(1000);
    const component = renderer.create(<NavBar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should be at the top of the page', () => {
    expect(
      getMountedComponent()
        .find('nav')
        .first()
        .hasClass('fixed-top')
    ).toBe(true);
  });

  // it('menu should appear when button is pressed', () => {
  //   // make the window small
  //   fireResize(320);

  //   // now click the button
  //   const button = getMountedComponent().find('button');
  //   button.simulate('click');

  //   // menu items should be visible
  //   expect(
  //     getMountedComponent()
  //       .find('button')
  //       .first()
  //       .hasClass('navbar-toggler')
  //   ).toBe(true);

  //   // now click the button again
  //   button.simulate('click');

  //   // menu items should be hidden
  //   expect(
  //     getMountedComponent()
  //       .find('button')
  //       .first()
  //       .hasClass('navbar-toggler collapsed')
  //   ).toBe(true);

  //   // make the window large
  //   fireResize(1000);

  //   // now click the button again
  //   button.simulate('click');

  //   // menu items should be hidden
  //   expect(
  //     getMountedComponent()
  //       .find('button')
  //       .first()
  //       .hasClass('navbar-toggler collapsed')
  //   ).toBe(true);
  // });
});
