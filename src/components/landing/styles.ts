import { animated } from "react-spring";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
`;

export const AnimatedTextWrapper = styled.div((p) => `
  width: 100%;
  position: relative;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`);

export const Label = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    margin: 1rem 0;
  }
`;

export const LabelText = styled.div`
  color: ${(p) => p.theme.color.white()};
  margin: 1rem 0rem;
  text-align: center;
  padding: 0 1rem;
  font-size: 1.2rem;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Line = styled(animated.div)(
  (p) => `
  width: 100%;
  &:nth-of-type(1) {
    display: flex;
    justify-content: center;
  }
  &:nth-of-type(2) {
    display: flex;
    justify-content: center;
  }
  &:nth-of-type(3) {
    position: absolute;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`
);

export const Text = styled.div(
  (p) => `
  font-weight: ${p.theme.fontWeight.bold};
  font-size: ${p.theme.fontSize.xxl};
  color: ${p.theme.color.white()};
  line-height: ${p.theme.fontSize.xxl};
  font-family: ${p.theme.fontFamily.moderustic};

  span {
    font-family: ${p.theme.fontFamily.comfortaBrush};
    letter-spacing: 14px;
    font-size: 5.4rem;
    font-weight: ${p.theme.fontWeight.bold};
    background: ${p.theme.color.orangeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    &:nth-of-type(2) {
      background: ${p.theme.color.blueGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }
  }

  @media (max-width: 768px) {
    font-size: ${p.theme.fontSize.l};
    line-height: ${p.theme.fontSize.xl};
    span {
      font-size: 3.5rem;
      letter-spacing: 8px;
    }
  }

  @media (max-width: 480px) {
    font-size: ${p.theme.fontSize.m};
    line-height: ${p.theme.fontSize.l};

    span {
      font-size: 2rem;
      letter-spacing: 8px;
    }
  }
`
);

export const StyledScrollIndicator = styled.div<{ $isVisible: boolean }>`
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  animation: float 2s ease-in-out infinite;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 480px) {
    bottom: 10px;
  }
`;

export const StyledDownArrow = styled.img((p) => `
  width: 50px;
  height: 50px;
  filter: invert(1);
  cursor: pointer;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`)