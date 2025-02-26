import styled from "styled-components";
import theme from "../../../theme";

export const StyledHeading = styled.div<{ $font: keyof typeof theme.fontFamily, $size: string }>`
  font-size: calc(${(p) => p.$size} * 0.6);
  font-family: ${(p) => p.theme.fontFamily[p.$font]};
  color: ${(p) => p.theme.color.white()};
  line-height: 1.2;
  ${p => p.$font === "moderustic" && `
    font-weight: 800;
  `}

  @media (min-width: 768px) {
    font-size: calc(${(p) => p.$size} * 0.8);
  }

  @media (min-width: 1024px) {
    font-size: ${(p) => p.$size};
  }
`;

const Title = ({ children, font = "comfortaBrush", size = "5rem" }: { children: React.ReactNode, font?: keyof typeof theme.fontFamily, size?: string }) => {
  return <StyledHeading $font={font} $size={size}>{children}</StyledHeading>;
};

export default Title;