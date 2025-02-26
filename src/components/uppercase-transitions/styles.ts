import { animated } from "react-spring";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  
  @media (min-width: 768px) {
    min-width: 380px;
  }
`;

export const StyledMain = styled.div`
  min-width: 100px;
  padding: 0 1rem;
  margin: 0 auto;
  height: 150px; /* Adjusted for 2.5em font size and 50px line height */

  @media (min-width: 768px) {
    padding: 0 20px;
    height: 210px; /* Adjusted for 3.2em font size and 70px line height */
  }

  @media (min-width: 1024px) {
    height: 240px; /* Adjusted for 4em font size and 80px line height */
  }
`;

export const StyledAnimatedDiv = styled(animated.div)`
  overflow: hidden;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity, height;
  white-space: nowrap;
  cursor: pointer;
  line-height: 50px;
  font-family: ${(p) => p.theme.fontFamily.moderustic};
  letter-spacing: 1.2px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 3.2em;
    line-height: 70px;
    letter-spacing: 1.4px;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
    font-size: 4em;
    line-height: 80px;
    letter-spacing: 1.6px;
  }
`;
