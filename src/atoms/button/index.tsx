import { StyledButton } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'blueGradient' | 'orangeGradient' | 'purpleGradient' | 'linkedInGradient';
}

const Button = ({ children, color = 'blueGradient', ...props }: ButtonProps) => {
  return <StyledButton {...props} $color={color}>{children}</StyledButton>;
};

export default Button;
