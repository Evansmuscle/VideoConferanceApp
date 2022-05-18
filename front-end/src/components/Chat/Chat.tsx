import React from "react";

// Emotion CSS
import styled from "@emotion/styled";

interface Props {
  //
}

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--primary);
`;

const HeaderText = styled.h1`
  font-size: calc(1vw + 0.5rem);
  font-weight: 400;
  color: var(--primary);
`;

const MessageContainer = styled.div`
  height: 77.5%;
  width: 100%;
`;

const InputContainer = styled.div`
  height: 12.5%;
  width: 100%;
`;

const Chat: React.FC<Props> = ({}) => {
  return (
    <ChatContainer>
      <Header>
        <HeaderText>Chat Room</HeaderText>
      </Header>
      <MessageContainer>Hi</MessageContainer>
      <InputContainer>Hi</InputContainer>
    </ChatContainer>
  );
};

export default Chat;
