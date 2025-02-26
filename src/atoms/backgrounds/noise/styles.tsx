import { animated } from "react-spring";
import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const AnimatedNoise = styled(animated.div)`
  opacity: 0.2;
  inset: -200%;
  width: 400%;
  height: 400%;
  position: absolute;
  background-repeat: repeat;
  background: url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png");
`;
