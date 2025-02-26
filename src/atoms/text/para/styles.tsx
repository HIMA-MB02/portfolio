import styled from "styled-components";
import theme from "../../../theme";

export const StyledPara = styled.div<{ $color: keyof typeof theme.color }>`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Comfortaa", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;
  font-size: 0.9rem;
  line-height: 1.4rem;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  color: ${(p) => {
    const colorValue = p.theme.color[p.$color];
    return typeof colorValue === 'function' ? colorValue() : colorValue;
  }};
  margin: 0.5rem 0;
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.6rem;
    padding: 0 1rem;
    margin: 0.75rem 0;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.8rem;
    padding: 0;
    margin: 1rem 0;
  }
`;
