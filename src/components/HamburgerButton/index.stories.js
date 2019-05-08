import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import HamburgerButton from '../HamburgerButton';

storiesOf('Pac Life|HamburgerButton', module)
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
  .add('show HamburgerButton unclicked', () => (
    <HamburgerButton clicked={false} toggler={action('button-click')} />
  ))
  .add('show HamburgerButton clicked', () => (
    <HamburgerButton clicked={true} toggler={action('button-click')} />
  ));
