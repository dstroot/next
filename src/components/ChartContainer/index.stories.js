import React from 'react';
import { storiesOf } from '@storybook/react';
import ChartContainer from '../ChartContainer';

storiesOf('Pac Life|ChartContainer', module)
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
  .add('show chart', () => <ChartContainer />);
