import { CardProps } from "../types";
import { StyledBorder, StyledWrapper } from "./styles";

export default function BorderCard({ children, color = 'orangeGradient', motion = false }: CardProps) {
  return (
    <StyledBorder $borderColor={color} $borderMotion={motion}>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledBorder>
  );
}
