import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';

storiesOf('NEXT|sections|Button', module)
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
  .add('show Button', () => <Button />);
