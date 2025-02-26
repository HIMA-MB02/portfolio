import { PropsWithChildren } from "react";
import { StyledPara } from "./styles";
import theme from "../../../theme";

interface ParaProps extends PropsWithChildren {
  color?: keyof typeof theme.color;
}

const Para = ({ children, color = "white" }: ParaProps) => {
  return <StyledPara $color={color}>{children}</StyledPara>;
};

export default Para;
