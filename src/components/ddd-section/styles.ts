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
    width: 55%;
  }
`;

export const StyledLeftSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const StyledDesktopButtonWrapper = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

export const StyledMobileButtonWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 1rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  box-sizing: border-box;
`;

export const StyledParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;


  @media (min-width: 1024px) {
    max-width: 21rem;
  }

  @media (min-width: 1440px) {
    max-width: 26rem;
  }
`;
