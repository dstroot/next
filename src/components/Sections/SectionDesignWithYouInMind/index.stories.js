import React from 'react';
import { storiesOf } from '@storybook/react';
import SectionDesignWithYouInMind from '../SectionDesignWithYouInMind';

storiesOf('NEXT|sections|SectionDesignWithYouInMind', module)
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
  .add('show SectionDesignWithYouInMind', () => <SectionDesignWithYouInMind />);
