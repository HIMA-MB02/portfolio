import styled from "styled-components";

export const HotTakesCard = styled.div`
  padding: 1rem;
  text-transform: uppercase;
  font-family: ${(p) => p.theme.fontFamily.moderustic};
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${(p) => p.theme.color.white()};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const StyledSmallText = styled.div`
  font-size: 0.7rem;
  font-family: ${(p) => p.theme.fontFamily.moderustic};
  font-weight: 700;
  text-transform: uppercase;
  color: ${(p) => p.theme.color.white()};
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const StyledBigText = styled.div`
  font-size: 1.2rem;
  font-family: ${(p) => p.theme.fontFamily.moderustic};
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${(p) => p.theme.color.white()};
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;



export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 4rem 0rem;
`;
export const StyledTitleSpan = styled.span`
  font-family: ${(p) => p.theme.fontFamily.moderustic};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  background: ${(p) => p.theme.color.redGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  letter-spacing: 2px;
  display: block;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 3rem;
    display: inline;
    width: auto;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const StyledCarouselWrapper = styled.div`
  max-width: 100vw;
  position: relative;
  overflow-x: hidden;
  margin-top: 2rem;
  cursor: pointer;
`;