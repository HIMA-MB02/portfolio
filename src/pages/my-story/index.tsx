import React from "react";
import {
  StyledPageContainer,
  StyledHeaderContainer,
  StyledCenteredDescription,
  StyledFillCardContainer,
  StyledFillCardContent,
} from "./styles";
import { NavigationBar, Timeline } from "../../components";
import { FillCard } from "../../atoms/cards";
import { Text } from "../../atoms";
import { PageTitles } from "../../constants";


const MyStory: React.FC = () => {
  return (
    <StyledPageContainer>
      <NavigationBar />
      <StyledHeaderContainer>
        <Text.Title font="moderustic" size="3rem">{PageTitles.MY_STORY.toUpperCase()}</Text.Title>
        <Text.Title font="moderustic" size="2rem"> Beyond the Resume</Text.Title>
        <StyledCenteredDescription>
          Resumes are boring --<br />
          too much text, often exaggerated, and impersonal.
        </StyledCenteredDescription>
        <StyledFillCardContainer>
          <FillCard>
            <StyledFillCardContent>
              <Text.Para>
              Presenting <b>My Story</b> — a timeline that <b>authentically captures my journey</b> in tech, career, and life, highlighting the <b>moments that truly shaped me</b>.              </Text.Para>
            </StyledFillCardContent>
          </FillCard>
        </StyledFillCardContainer>
      </StyledHeaderContainer>
      <Timeline />
    </StyledPageContainer>
  );
};

export default MyStory;
