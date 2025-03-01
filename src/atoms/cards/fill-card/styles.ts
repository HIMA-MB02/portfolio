import theme from "@/theme";
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
  $borderColor: keyof typeof theme.color;
  $borderMotion: boolean;
}>`
  border-radius: 1rem;
  background: ${(p) => {
    const colorValue = p.theme.color[p.$borderColor];
    return typeof colorValue === "function" ? colorValue() : colorValue;
  }};
  padding: 0.25rem;
  box-sizing: border-box;
  ${(p) =>
    p.$borderMotion &&
    css`
      animation: ${animatedgradient} 1s ease alternate infinite;
      background-size: 300% 300%;
    `}
  @media (min-width: 768px) {
    border-radius: 2rem;
  }
`;
