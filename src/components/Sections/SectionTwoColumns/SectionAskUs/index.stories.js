import React from 'react';
import { storiesOf } from '@storybook/react';
import SectionAskUs from '../SectionAskUs';

storiesOf('NEXT|sections|SectionAskUs', module)
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
  .add('show SectionAskUs', () => <SectionAskUs />);
