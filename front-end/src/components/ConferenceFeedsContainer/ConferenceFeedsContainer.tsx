import "./ConferenceFeedsContainer.scss";

import React from "react";

// Emotion CSS
import styled from "@emotion/styled";

// Components
import Moderator from "../Moderator";
import Listener from "../Listener";

interface Props {
  //
}

const Container = styled.div`
  grid-column: 2 / 6;
  grid-row: 2 / 6;
  border-radius: 10px;
  padding: 1rem;
  background-color: var(--light-bg);
  display: grid;
  gap: calc(0.5vw + 5px);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const ConferenceFeedsContainer: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Moderator />
      <Listener />
      <Listener />
      <Listener />
      <Listener />
    </Container>
  );
};

export default ConferenceFeedsContainer;
