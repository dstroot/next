import React from "react";
import { create } from "react-test-renderer";
import Home from "../Home";

describe("Home", () => {
  it("it should render", () => {
    let tree = create(<Home />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
