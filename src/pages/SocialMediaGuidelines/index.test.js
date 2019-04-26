import React from "react";
import { create } from "react-test-renderer";
import SocialMediaGuidelines from "../SocialMediaGuidelines";

describe("SocialMediaGuidelines", () => {
  it("it should render", () => {
    let tree = create(<SocialMediaGuidelines />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
