import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 100%;
  margin: 2rem 0;

  @media (min-width: 1024px) {
    width: 85%;
    margin: 3rem 0;
  }

  @media (min-width: 1440px) {
    width: 50%;
  }
`;

export const StyledSubtitle = styled.div`
  color: ${(p) => p.theme.color.white()};
  margin-bottom: 2rem;
`;
export const StyledCardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 55rem;
  padding: 1rem;
  box-sizing: border-box;
  margin: 0 auto;
  div {
    margin: 0.5rem;
    font-size: 1.2em;
    &:nth-of-type(odd) {
      font-size: 1.5em;
    }
    &:nth-of-type(even) {
      font-style: italic;
    }
    &:nth-of-type(3n) {
      font-weight: bolder;
    }
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
    div {
      margin: 0.75rem;
      font-size: 1.6em;
      &:nth-of-type(odd) {
        font-size: 2em;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 2rem;
    div {
      margin: 1rem;
      font-size: 2em;
      &:nth-of-type(odd) {
        font-size: 2.5em;
      }
    }
  }
`;
