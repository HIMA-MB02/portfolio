import { CardProps } from "../types";
import { StyledBorder, StyledWrapper } from "./styles";

export default function BorderCard({ children, color = 'orangeGradient', motion = false }: CardProps & { color?: 'blueGradient' | 'orangeGradient' }) {
  return (
    <StyledBorder $borderColor={color} $borderMotion={motion}>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledBorder>
  );
}
