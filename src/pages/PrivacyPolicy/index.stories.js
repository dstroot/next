import React from "react";
import { storiesOf } from "@storybook/react";
import PrivacyPolicy from "../PrivacyPolicy";

storiesOf("PrivacyPolicy", module)
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
  .add("show PrivacyPolicy", () => <PrivacyPolicy />);
