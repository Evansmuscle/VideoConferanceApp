import React from "react";
import { mount } from "@cypress/react";

import ControlIcon from "./ControlIcon";

import Icon from "../../icons/microphone.svg";

it("Renders components", () => {
  mount(<ControlIcon iconName={Icon} />);

  // Your test code here..
});
