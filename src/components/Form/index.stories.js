import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from '../Form';

storiesOf('NEXT|sections|Form', module)
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
  .add('show Form', () => <Form />);
