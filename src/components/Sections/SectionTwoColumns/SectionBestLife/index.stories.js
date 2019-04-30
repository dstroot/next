import React from 'react';
import { storiesOf } from '@storybook/react';
import SectionBestLife from '../SectionBestLife';

storiesOf('NEXT|sections|SectionBestLife', module)
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
  .add('show SectionBestLife', () => <SectionBestLife />);
