import React from "react";

// Emotion CSS
import styled from "@emotion/styled";

// Formik
import { Formik, FormikHelpers } from "formik";

// Icons
import SendIcon from "../../icons/send.svg";

interface Props {
  //
}

interface InitialValues {
  message: string;
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
  background-color: var(--white);
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const Input = styled.input`
  width: 80%;
  height: 120%;
  border: none;
  font-size: 1rem;
  padding: 0.5rem;

  &:focus {
    border: none;
  }

  &:focus-visible {
    border: none;
  }
`;

const InputSendIcon = styled.img`
  cursor: pointer;
`;

const InputSend = styled.button`
  background-color: transparent;
  border: none;
  margin-left: auto;
`;

const initialValues: InitialValues = { message: "" };

const Chat: React.FC<Props> = () => {
  const onMessageSent = (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    //
  };

  return (
    <ChatContainer>
      <Header>
        <HeaderText>Chat Room</HeaderText>
      </Header>
      <MessageContainer>Hi</MessageContainer>
      <Formik initialValues={initialValues} onSubmit={onMessageSent}>
        <InputContainer>
          <Input autoFocus />
          <InputSend type="submit">
            <InputSendIcon src={SendIcon} />
          </InputSend>
        </InputContainer>
      </Formik>
    </ChatContainer>
  );
};

export default Chat;
