import styled from "styled-components";


export const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
`;

export const StyledIconWrapper = styled.div`
  background-color: ${(p) => p.theme.color.white()};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  height: 4rem;
  width: 4rem;
`;

export const StyledToolsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 0.25rem;

  @media (min-width: 768px) {
    margin: 0 0.5rem;
  }

  @media (min-width: 1024px) {
    margin: 0 0.75rem;
  }

  @media (min-width: 1440px) {
    margin: 0 1rem;
  }
`;

export const StyledIconImage = styled.img`
  height: 2.5rem;
`;