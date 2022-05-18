import "./ControlsContainer.scss";

import React from "react";

// Utils
import { containerFactory } from "../../utils";

// Svg Icons
import MicrophoneIcon from "../../icons/microphone.svg";
import HeadphoneIcon from "../../icons/headphones.svg";
import PhoneDisabledIcon from "../../icons/phone_disabled.svg";

interface Props {
  //
}

const Container = containerFactory(
  [6, 7],
  [4, 6],
  true,
  "0",
  "0",
  "transparent"
);

const ControlsContainer: React.FC<Props> = ({}) => {
  return (
    <Container>
      <img
        src={MicrophoneIcon}
        alt="Microphone Icon"
        style={{
          color: "white",
          fill: "white",
          stroke: "white",
          marginRight: "1rem",
        }}
      />
      <img
        src={HeadphoneIcon}
        alt="Microphone Icon"
        style={{
          color: "white",
          fill: "white",
          stroke: "white",
          marginRight: "1rem",
        }}
      />
      <img
        src={PhoneDisabledIcon}
        alt="Microphone Icon"
        style={{
          color: "white",
          fill: "white",
          stroke: "white",
          marginRight: "1rem",
        }}
      />
    </Container>
  );
};

export default ControlsContainer;
