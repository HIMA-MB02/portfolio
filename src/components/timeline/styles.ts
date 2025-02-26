import styled from "styled-components";

export const StyledTimelineContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  max-width: 90%;

  @media (min-width: 768px) {
    max-width: 80%;
  }

  @media (min-width: 1024px) {
    max-width: 70%;
  }

  @media (min-width: 1440px) {
    max-width: 50%;
  }
`;

export const StyledTimelinePresent = styled.div`
  margin-top: 2rem;
  color: ${(p) => p.theme.color.secondary};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.ultraBold};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamily.moderustic};
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 3rem;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: left;
  }
`;
