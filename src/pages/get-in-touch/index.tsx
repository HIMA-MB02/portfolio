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
import { NavigationBar, SEO } from "../../components";
import { ExternalLinks, PageTitles } from "../../constants";
import { createPersonStructuredData } from "@/utils/structuredData";

export default function GetInTouch() {
  const openLink = (link: ExternalLinks) => {
    // Track contact method clicks in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      const linkName = link.includes('linkedin') ? 'LinkedIn' :
                      link.includes('instagram') ? 'Instagram' :
                      link.includes('github') ? 'GitHub' :
                      link.includes('mailto') ? 'Email' : 'Unknown';
      
      window.gtag('event', 'contact_click', {
        contact_method: linkName,
        outbound: true,
        event_category: 'engagement'
      });
    }
    window.open(link, '_blank');
  };
  return (
    <StyledContainer>
      <SEO 
        title="Contact Himanshu Ganapavarapu - Senior Frontend Engineer"
        description="Connect with Himanshu Ganapavarapu for exciting opportunities in frontend engineering, full stack development, or technical leadership roles. Available for meaningful conversations about technology, innovation, and collaboration."
        pageType="profile"
        structuredData={[createPersonStructuredData()]}
      />
      <NavigationBar />
      <StyledCardWrapper>
        <StyledTitleWrapper>
          <Text.Title font="moderustic" size="3rem">
            {PageTitles.GET_IN_TOUCH.toUpperCase()}
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
              <StyledContactImageWrapper onClick={() => openLink(ExternalLinks.LINKEDIN)}>
                <StyledContactImage src={LinkedInIcon} alt="LinkedIn" />
              </StyledContactImageWrapper>
            </BouncyCard>
          </StyledContactCardWrapper>
          <StyledContactCardWrapper>
            <BouncyCard motion borderPulse>
              <StyledContactImageWrapper onClick={() => openLink(ExternalLinks.INSTAGRAM)}>
                <StyledContactImage src={InstagramIcon} alt="Instagram" />
              </StyledContactImageWrapper>
            </BouncyCard>
          </StyledContactCardWrapper>
          <StyledContactCardWrapper>
            <BouncyCard motion borderPulse>
              <StyledContactImageWrapper onClick={() => openLink(ExternalLinks.GITHUB)}>
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
              <StyledContactImageWrapper onClick={() => openLink(ExternalLinks.EMAIL)}>
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
