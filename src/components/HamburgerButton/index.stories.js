import React from "react";
import { storiesOf } from "@storybook/react";
import HamburgerButton from "../HamburgerButton";

storiesOf("HamburgerButton", module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `This supports markdown!
      
      ~~~js
      console.log("hello");
      ~~~
      `
    }
  })
  .add("show HamburgerButton", () => <HamburgerButton />);
