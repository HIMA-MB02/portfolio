import { Text } from "../../atoms";
import { BorderCard } from "../../atoms/cards";
import { LoveIcon } from "../../theme/icons";
import { BuiltUsingTools } from "./_components";
import {
  StyledCardWrapper,
  StyledImage,
  StyledWrapper,
} from "./styles";

export default function BuiltWithSection() {
  return (
    <StyledWrapper>
      <Text.Title>
        Built with <StyledImage src={LoveIcon} alt="animated-love-icon" /> using
      </Text.Title>
      <BorderCard>
        <StyledCardWrapper>
          <BuiltUsingTools />
          <Text.Para>
            I <i>personally</i> designed, developed, and deployed this website, pulling inspiration from many amazing sites along the way 🌐.
            <br />
            Every line of code here is my own work, <i>crafted with care</i> to create this unique experience 💻✨.
          </Text.Para>
        </StyledCardWrapper>
      </BorderCard>
    </StyledWrapper>
  );
}
