import React from "react";

// Emotion CSS
import styled from "@emotion/styled";

interface Props {
  //
}

const ModeratorContainer = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(2vw + 0.5rem);
  background-color: var(--primary);
  color: var(--white);
`;

const Moderator: React.FC<Props> = ({}) => {
  return <ModeratorContainer>MODERATOR</ModeratorContainer>;
};

export default Moderator;
