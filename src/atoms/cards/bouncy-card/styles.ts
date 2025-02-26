import { animated } from "react-spring";
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

const animatedPulse = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
  }
  50% {
      -moz-box-shadow: 0px 0px 20px -5px rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 20px -5px rgba(255, 255, 255, 1);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
  }
`;
export const Card = styled(animated.div)<{
  $borderColor: "blueGradient" | "orangeGradient";
  $borderMotion: boolean;
  $borderPulse: boolean;
  $isExpanded: boolean;
}>`
  position: relative;
  border-radius: min(35px, calc(100% / 4));
  width: 100%;
  height: 100%;
  box-shadow: 0px 10px 30px -5px ${(p) => p.theme.color.white(0.3)};
  animation: ${(p) => !p.$isExpanded && p.$borderPulse ? css`${animatedPulse} 2s infinite`: 'none'};
  will-change: transform;
  cursor: ${(p) => p.$isExpanded ? 'default' : 'grab'};
  overflow: hidden;
  touch-action: none;
  padding: 4px;
  background: ${(p) => p.$borderColor === 'blueGradient' ? p.theme.color.blueGradient : p.theme.color.orangeGradient};
  &:hover {
    animation: none;
  }
  &:hover::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    z-index: -1;
    background: ${(p) => p.$borderColor === 'blueGradient' ? p.theme.color.orangeGradient : p.theme.color.blueGradient};
    animation: ${(p) => !p.$isExpanded && p.$borderMotion ? css`${animatedgradient} 2s ease alternate infinite`: 'none'};
    background-size: 300% 300%;
  }
`;
export const CardContent = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: min(35px, calc(100% / 5));  overflow: hidden;
  position: relative;
`;
