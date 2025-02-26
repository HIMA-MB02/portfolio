import { useNavigate } from "react-router-dom";
import { Button, Text } from "../../atoms";
import { BorderCard } from "../../atoms/cards";
import { AppRoutes } from "../../constants";
import UppercaseTransition from "../uppercase-transitions";
import { StyledContentWrapper, StyledWrapper, StyledParagraphContainer, StyledLeftSectionWrapper, StyledDesktopButtonWrapper, StyledMobileButtonWrapper } from "./styles";

const KnowMoreButton = () => {
  const navigate = useNavigate();
  return <Button color="blueGradient" onClick={() => navigate(AppRoutes.MY_STORY)}>Find Out More?</Button>
}

export default function DDDSection() {  
  return (
    <StyledWrapper>
      <Text.Title font="moderustic" size="4rem">HIMANSHU, WHO?</Text.Title>
      <BorderCard>
        <StyledContentWrapper>
          <StyledLeftSectionWrapper>
            <UppercaseTransition />
            <StyledDesktopButtonWrapper>
              <KnowMoreButton />
            </StyledDesktopButtonWrapper>
          </StyledLeftSectionWrapper>
          <StyledParagraphContainer>
            <Text.Para>
              I'm a software engineer, a proud husband, and a dog parent—building cool stuff while balancing code, love, and tail wags. 🚀🐶💙
            </Text.Para>
            <Text.Para>
              I’ve been building websites since way back when 'CSS grid' was
              just a dream 🌟 and 'responsive design' mostly involved saying
              'please' and 'thank you' to clients 🙏.
            </Text.Para>
            <Text.Para>The internet and I have been through a lot together 🌐❤️.</Text.Para>
            <StyledMobileButtonWrapper>
              <KnowMoreButton />
            </StyledMobileButtonWrapper>
          </StyledParagraphContainer>
        </StyledContentWrapper>
      </BorderCard>
    </StyledWrapper>
  );
}
