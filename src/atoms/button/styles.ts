import styled from "styled-components";

interface StyledButtonProps {
  $color: 'blueGradient' | 'orangeGradient' | 'purpleGradient' | 'linkedInGradient';
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: ${(p) => p.theme.color[p.$color]};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
  &:focus {
    outline: none;
  }
`;