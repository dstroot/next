import React from "react";
import { create } from "react-test-renderer";
import TermsOfUse from "../TermsOfUse";

describe("TermsOfUse", () => {
  it("it should render", () => {
    let tree = create(<TermsOfUse />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
