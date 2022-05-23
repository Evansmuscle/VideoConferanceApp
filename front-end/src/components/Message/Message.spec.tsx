import React from "react";
import { mount } from "@cypress/react";
import Message from "./Message";

it("Renders components", () => {
  mount(<Message content="Hello there!" />);

  // Your test code here..
});
