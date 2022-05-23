import React from "react";

// Emotion CSS
import styled from "@emotion/styled";

interface ControlIconProps {
  iconName: string;
  exit?: boolean;
}

const Icon = styled.img`
  margin-right: 2rem;
  background-color: var(--primary);
  border-radius: 900rem;
  padding: 0.5rem;
  cursor: pointer;
`;

const ControlIcon: React.FC<ControlIconProps> = ({ iconName, exit }) => {
  return (
    <Icon
      src={iconName}
      alt="Icon"
      style={exit ? { backgroundColor: "var(--red)" } : {}}
    />
  );
};

export default ControlIcon;
