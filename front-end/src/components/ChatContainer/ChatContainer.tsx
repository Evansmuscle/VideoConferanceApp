import "./ChatContainer.scss";

import React from "react";

// Utils
import { containerFactory } from "../../utils";
import Chat from "../Chat/Chat";

interface Props {
  //
}

const Container = containerFactory([2, 6], [6, 8], false, "10px", "0");

const ChatContainer: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Chat />
    </Container>
  );
};

export default ChatContainer;
