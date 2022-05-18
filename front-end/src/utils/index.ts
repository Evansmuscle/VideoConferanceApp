// Emotion CSS
import styled from "@emotion/styled";

export const containerFactory = (
  [rowStart, rowEnd]: [number, number],
  [colStart, colEnd]: [number, number],
  isButtonControlContainer: boolean = false,
  borderRadius = "10px",
  padding = "1rem",
  backgroundColor = "var(--light-bg)"
) => {
  const Container = styled.div`
    grid-column: ${colStart} / ${colEnd};
    grid-row: ${rowStart} / ${rowEnd};
    border-radius: ${borderRadius};
    padding: ${padding};
    background-color: ${backgroundColor};
    ${isButtonControlContainer
      ? "display: flex; align-items: center; justify-content: center"
      : ""}
  `;

  return Container;
};
