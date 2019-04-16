import React from "react";
import renderer from "react-test-renderer";

import NavBar from "../NavBar";

describe("NavBar", () => {
  it("it should render", () => {
    const component = renderer.create(<NavBar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
