import React from "react";

// Testing Libraries
import { mount } from "@cypress/react";

import App from "./App";

it("Renders the Call Page", () => {
  mount(<App />);

  cy.get("p").contains("Hi");
});
