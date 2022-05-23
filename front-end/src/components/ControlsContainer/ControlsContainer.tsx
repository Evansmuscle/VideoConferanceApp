import "./ControlsContainer.scss";

import React from "react";

// Utils
import { containerFactory } from "../../utils";

// Svg Icons
import MicrophoneIcon from "../../icons/microphone.svg";
import HeadphoneIcon from "../../icons/headphones.svg";
import PhoneDisabledIcon from "../../icons/phone_disabled.svg";
import ControlIcon from "../ControlIcon";

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
      <ControlIcon iconName={MicrophoneIcon} />
      <ControlIcon iconName={HeadphoneIcon} />
      <ControlIcon iconName={PhoneDisabledIcon} exit />
    </Container>
  );
};

export default ControlsContainer;
