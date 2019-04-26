import React from "react";
import { create } from "react-test-renderer";
import PrivacyPolicy from "../PrivacyPolicy";

describe("PrivacyPolicy", () => {
  it("it should render", () => {
    let tree = create(<PrivacyPolicy />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
