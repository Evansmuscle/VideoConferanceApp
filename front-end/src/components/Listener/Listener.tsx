import React from "react";

// Emotion CSS
import styled from "@emotion/styled";

interface Props {
  //
}

const ListenerContainer = styled.div`
  grid-row: 4 / 5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1vw + 0.3rem);
  background-color: var(--primary);
  color: var(--white);
`;

const Listener: React.FC<Props> = ({}) => {
  return <ListenerContainer>LISTENER</ListenerContainer>;
};

export default Listener;
