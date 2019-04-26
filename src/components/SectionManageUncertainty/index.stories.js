import React from 'react';
import { storiesOf } from '@storybook/react';
import SectionManageUncertainty from '../SectionManageUncertainty';

storiesOf('NEXT|sections|SectionManageUncertainty', module)
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
  .add('show SectionManageUncertainty', () => <SectionManageUncertainty />);
