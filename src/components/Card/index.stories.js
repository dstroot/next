import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../Card';

storiesOf('NEXT|sections|Card', module)
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
  .add('show Card', () => <Card />);
