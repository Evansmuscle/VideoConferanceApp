import "./ControlsContainer.scss";

import React from "react";

// Svg Icons
import MicrophoneIcon from "../../icons/microphone.svg";
import HeadphoneIcon from "../../icons/headphones.svg";
import PhoneDisabledIcon from "../../icons/phone_disabled.svg";

interface Props {
  //
}

const ControlsContainer: React.FC<Props> = ({}) => {
  return (
    <img
      src={MicrophoneIcon}
      alt="Microphone Icon"
      style={{ color: "white", fill: "white", stroke: "white" }}
    />
  );
};

export default ControlsContainer;
