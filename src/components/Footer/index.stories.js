import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../Footer';

storiesOf('NEXT|Footer', module)
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
  .add('show Footer', () => <Footer />);
