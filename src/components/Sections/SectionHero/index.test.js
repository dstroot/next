import React from 'react';
import { create } from 'react-test-renderer';
// import { mount } from 'enzyme';
import SectionHero from '../SectionHero';

const propsObject = {
  backgroundImage: 'URL',
  heading: 'heading',
  content: 'content',
  linkElement: 'link',
};

describe('SectionHero', () => {
  it('it should render', () => {
    let tree = create(<SectionHero props={propsObject} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
