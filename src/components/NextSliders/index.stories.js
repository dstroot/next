import React from "react";
import { storiesOf } from "@storybook/react";
import NextSliders from "../NextSliders";

storiesOf("NextSliders", module)
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
  .add("show NextSliders", () => <NextSliders />);
