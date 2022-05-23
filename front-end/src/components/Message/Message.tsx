import React from "react";

// Emotion CSS
import styled from "@emotion/styled";

interface MessageProps {
  content: string;
  isMine?: boolean;
}

const MessageContainer = styled.div`
  border-radius: 10rem;
  background-color: var(--primary);
`;

const Message: React.FC<MessageProps> = ({ content, isMine }) => {
  return <MessageContainer>{content}</MessageContainer>;
};

export default Message;
