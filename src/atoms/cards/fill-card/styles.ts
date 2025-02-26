import styled, { css, keyframes } from "styled-components";

const animatedgradient = keyframes`
0% {
    background-position: 0% 50%;
}
50% {
    background-position: 100% 50%;
}
100% {
    background-position: 0% 50%;
}
`;

export const StyledFill = styled.div<{
  $borderColor: "blueGradient" | "orangeGradient";
  $borderMotion: boolean;
}>`
  border-radius: 2rem;
  background: ${
    (p) => p.$borderColor === "orangeGradient"
      ? p.theme.color.orangeGradient
      : p.theme.color.blueGradient
  };
  padding: 0.25rem;
  box-sizing: border-box;
  ${(p) => p.$borderMotion &&
    css`
      animation: ${animatedgradient} 1s ease alternate infinite;
      background-size: 300% 300%;
    `}
`;