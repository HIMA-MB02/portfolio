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
    width: 90%;
  }

  @media (min-width: 1440px) {
    width: 55%;
  }
  color: ${(p) => p.theme.color.white()};
`;

export const StyledImage = styled.img`
  height: 5rem;
`;

export const StyledCardWrapper = styled.div`
  padding: 1rem 0rem;
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0rem 1rem;
  }

  @media (min-width: 1440px) {
    padding: 0rem 2rem;
    max-width: 70rem;
    text-align: left;
  }
`;

export const StyledPara = styled.div`
    margin-top: 2rem;
`;

