import { CardProps } from "../types";
import { StyledFill } from "./styles";

export default function FillCard({
  children,
  color = "blueGradient",
  motion = false,
}: CardProps) {
  return (
    <StyledFill $borderColor={color} $borderMotion={motion}>
      {children}
    </StyledFill>
  );
}
