import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import CookieMessage from '../CookieMessage';

// CookieMessage section
storiesOf('Pac Life|CookieMessage', module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
      text: `
        Example component to show a cookie message.
    `,
    },
  })
  .add('show CookieMessage', () => <CookieMessage />);
