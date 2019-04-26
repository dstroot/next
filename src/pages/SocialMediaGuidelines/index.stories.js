import React from "react";
import { storiesOf } from "@storybook/react";
import SocialMediaGuidelines from "../SocialMediaGuidelines";

storiesOf("SocialMediaGuidelines", module)
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
  .add("show SocialMediaGuidelines", () => <SocialMediaGuidelines />);
