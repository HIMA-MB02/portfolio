import styled from "styled-components";

export const StyledSignatureDesktop = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;
export const StyledSignatureMobile = styled.div`
  display: block;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledNavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(p) => p.theme.color.black(0.8)};
  backdrop-filter: blur(5px);
  z-index: 1000;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  @media (min-width: 480px) {
    padding: 0.75rem 1.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 90%;
    padding: 1rem 1.5rem;
    gap: 0;
  }

  @media (min-width: 1440px) {
    padding: 1rem 2rem;
    max-width: 70%;
  }
`;

export const StyledNavBarRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

