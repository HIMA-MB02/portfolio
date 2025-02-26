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

export const StyledBorder = styled.div<{
  $borderColor: "blueGradient" | "orangeGradient";
  $borderMotion: boolean;
}>`
  border-radius: 1rem;
  background: ${
    (p) => p.$borderColor === "orangeGradient"
      ? p.theme.color.orangeGradient
      : p.theme.color.blueGradient
  };
  padding: 0.25rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  
  @media (min-width: 768px) {
    border-radius: 1.5rem;
  }

  @media (min-width: 1024px) {
    border-radius: 2rem;
  }

  ${(p) => p.$borderMotion &&
    css`
      animation: ${animatedgradient} 1s ease alternate infinite;
      background-size: 300% 300%;
    `}
`;

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background: ${(p) => p.theme.color.black()};
  color: ${(p) => p.theme.color.white()};
  padding: 0rem;

  @media (min-width: 768px) {
    border-radius: 1.25rem;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    border-radius: 1.75rem;
    padding: 2rem;
  }
`;
