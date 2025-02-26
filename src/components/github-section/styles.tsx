import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 5rem 0;
  color: ${(p) => p.theme.color.white()};
`;

export const StyledCardWrapper = styled.div`
  padding: 1rem;
  display: flex;
  max-width: 60rem;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 5rem;
  }
`;

export const StyledGitIcon = styled.img`
  height: 1.5rem;
  margin-left: 1rem;
`;

export const StyledPara = styled.div`
  margin-right: 3rem;
`;
