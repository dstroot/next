import React from 'react';
import { storiesOf } from '@storybook/react';
import SectionFirstProduct from '../SectionFirstProduct';

storiesOf('NEXT|sections|SectionFirstProduct', module)
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
  .add('show SectionFirstProduct', () => <SectionFirstProduct />);
