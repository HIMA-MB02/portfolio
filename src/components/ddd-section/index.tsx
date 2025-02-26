import { Text } from "../../atoms";
import { BorderCard } from "../../atoms/cards";
import UppercaseTransition from "../uppercase-transitions";
import { StyledContentWrapper, StyledWrapper, StyledParagraphContainer } from "./styles";

export default function DDDSection() {
  return (
    <StyledWrapper>
      <BorderCard>
        <StyledContentWrapper>
          <UppercaseTransition />
          <StyledParagraphContainer>
            <Text.Para>
              I’ve been building websites since way back when 'CSS grid' was
              just a dream 🌟 and 'responsive design' mostly involved saying
              'please' and 'thank you' to clients 🙏.
            </Text.Para>
            <br />
            <Text.Para>The internet and I have been through a lot together 🌐❤️.</Text.Para>
          </StyledParagraphContainer>
        </StyledContentWrapper>
      </BorderCard>
    </StyledWrapper>
  );
}
