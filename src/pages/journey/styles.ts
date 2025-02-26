import styled from "styled-components";

export const StyledPageContainer = styled.div`
  color: white;
  box-sizing: border-box;
  padding-bottom: 10rem;
`;

export const StyledHeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }

  @media (min-width: 768px) {
    max-width: 80%;
    margin-bottom: 2rem;
  }

  @media (min-width: 1440px) {
    max-width: 70%;
    margin-bottom: 3rem;
  }
`;
export const StyledCenteredDescription = styled.p`
  max-width: 100%;
  text-align: center;
  color: ${(props) => props.theme.color.muted};
  margin: 0;
  line-height: 1.6;
  margin-top: 2rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    max-width: 85%;
    font-size: 1.05rem;
  }

  @media (min-width: 1024px) {
    max-width: 70%;
    font-size: 1.1rem;
  }
`;

export const StyledFillCardContainer = styled.div`
  padding: 1.5rem 1rem;
  max-width: 100%;

  @media (min-width: 768px) {
    padding: 2rem 1.25rem;
    max-width: 85%;
    font-size: 1.05rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 1.5rem;
    max-width: 70%;
    font-size: 1.1rem;
  }
  @media (min-width: 1440px) {
    max-width: 55%;
    font-size: 1.1rem;
  }
`;

export const StyledFillCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
`;
