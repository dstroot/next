import React from 'react';
import { storiesOf } from '@storybook/react';
import NextSlider from '../NextSlider';

storiesOf('NextSlider', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `This supports markdown!

      ~~~js
      console.log("hello");
      ~~~
      `,
    },
  })
  .add('show NextSlider', () => <NextSlider />);
