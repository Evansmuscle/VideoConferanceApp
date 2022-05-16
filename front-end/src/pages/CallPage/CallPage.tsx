import "./CallPage.scss";

import React from "react";

// Emotion
import styled from "@emotion/styled";
import ControlsContainer from "../../components/ControlsContainer";

const CallPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  background-color: black;
`;

const Hi = styled.p`
  color: white;
`;

const CallPage: React.FC = () => {
  return (
    <CallPageContainer>
      <ControlsContainer />
      <Hi>Hi</Hi>
    </CallPageContainer>
  );
};

export default CallPage;
