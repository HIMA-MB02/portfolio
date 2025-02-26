import { Text } from "../../atoms";
import { BouncyCard, FillCard } from "../../atoms/cards";
import {
  EmailIcon,
  GithubSquareIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../../theme/icons";
import {
  StyledContactImage,
  StyledContactImageWrapper,
  StyledContactCardsWrapper,
  StyledInroWrapper,
  StyledCardWrapper,
  StyledReasoningWrapper,
  StyledContactCardWrapper,
  StyledContainer,
  StyledTitleWrapper,
  StyledFillCardWrapper,
} from "./styles";
import { NavigationBar } from "../../components";

export default function GetInTouch() {
  return (
    <StyledContainer>
      <NavigationBar />
      <StyledCardWrapper>
        <StyledTitleWrapper>
          <Text.Title font="moderustic" size="3rem">
            LET'S CONNECT
          </Text.Title>
          <Text.Title font="moderustic" size="2rem">
            When it matters
          </Text.Title>
        </StyledTitleWrapper>
        <StyledFillCardWrapper>
          <FillCard color="orangeGradient">
            <StyledInroWrapper>
              <Text.Para color="white">
                I&apos;m a bit of an introvert, so I treasure meaningful
                conversations over small talk.
              </Text.Para>
              <Text.Para color="white">
                If you have an exciting opportunity, an idea worth exploring, or
                just want to chat about something truly fascinating, I&apos;d love
                to hear from you!
              </Text.Para>
            </StyledInroWrapper>
          </FillCard>
        </StyledFillCardWrapper>
        <StyledContactCardsWrapper>
          <StyledContactCardWrapper>
            <BouncyCard motion borderPulse>
              <StyledContactImageWrapper>
                <StyledContactImage src={LinkedInIcon} alt="LinkedIn" />
              </StyledContactImageWrapper>
            </BouncyCard>
          </StyledContactCardWrapper>
          <StyledContactCardWrapper>
            <BouncyCard motion borderPulse>
              <StyledContactImageWrapper>
                <StyledContactImage src={InstagramIcon} alt="Instagram" />
              </StyledContactImageWrapper>
            </BouncyCard>
          </StyledContactCardWrapper>
          <StyledContactCardWrapper>
            <BouncyCard motion borderPulse>
              <StyledContactImageWrapper>
                <StyledContactImage
                  src={GithubSquareIcon}
                  style={{ filter: "invert(1)" }}
                  alt="Github"
                />
              </StyledContactImageWrapper>
            </BouncyCard>
          </StyledContactCardWrapper>
          <StyledContactCardWrapper>
            <BouncyCard motion borderPulse>
              <StyledContactImageWrapper>
                <StyledContactImage src={EmailIcon} alt="Email" />
              </StyledContactImageWrapper>
            </BouncyCard>
          </StyledContactCardWrapper>
        </StyledContactCardsWrapper>
        <StyledReasoningWrapper>
          <Text.Para color="muted">
            Tell me a bit about yourself or the reason you&apos;re reaching out
            — it helps make our conversations more personal and purposeful.
          </Text.Para>
        </StyledReasoningWrapper>
      </StyledCardWrapper>
    </StyledContainer>
  );
}
