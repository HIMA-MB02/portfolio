import styled from "styled-components";

export const StyledFilterContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
  justify-content: center;
  flex-wrap: wrap;
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
    max-width: 90%;
  }

  @media (min-width: 1024px) {
    max-width: 70%;
  }
  @media (min-width: 1440px) {
    max-width: 50%;
  }
`;

export const StyledFilterButton = styled.button<{ $isSelected?: boolean }>`
  padding: 0.75rem 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: ${(props) => (props.$isSelected ? "#fff" : "transparent")};
  color: ${(props) => (props.$isSelected ? "#000" : "#fff")};
  cursor: pointer;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: ${(props) =>
    props.$isSelected ? "0 2px 8px rgba(255,255,255,0.2)" : "none"};
  opacity: ${(props) => (props.$isSelected ? 1 : 0.8)};

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
    border: 2px solid rgba(255, 255, 255, 0.4);
  }
`;