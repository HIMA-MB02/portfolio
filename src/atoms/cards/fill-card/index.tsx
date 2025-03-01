import { CardProps } from "../types";
import { StyledFill } from "./styles";
import theme from "../../../theme";

export default function FillCard({
  children,
  color = "blueGradient",
  motion = false,
}: CardProps & { color?: keyof typeof theme.color }) {
  return (
    <StyledFill $borderColor={color} $borderMotion={motion}>
      {children}
    </StyledFill>
  );
}
