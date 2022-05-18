import "./CallPage.scss";

import React from "react";

// Emotion CSS
import styled from "@emotion/styled";

// Components
import ControlsContainer from "../../components/ControlsContainer";
import ConferenceFeedsContainer from "../../components/ConferenceFeedsContainer";
import ChatContainer from "../../components/ChatContainer";

const CallPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  background-color: var(--bg);
  grid-template-columns:
    [col1-start] 40px [col1-end col2-start] repeat(6, [col-start] 1fr [col-end])
    [col-last-start] 40px [col-last-end];
  grid-template-rows: 10px repeat(5, 1fr) 10px;
  gap: calc(1vw + 10px);
`;

const CallPage: React.FC = () => {
  return (
    <CallPageContainer>
      <ConferenceFeedsContainer />
      <ChatContainer />
      <ControlsContainer />
    </CallPageContainer>
  );
};

export default CallPage;
