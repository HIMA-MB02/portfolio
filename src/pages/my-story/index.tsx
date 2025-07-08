import React from "react";
import {
  StyledPageContainer,
  StyledHeaderContainer,
  StyledCenteredDescription,
  StyledFillCardContainer,
  StyledFillCardContent,
} from "./styles";
import { NavigationBar, Timeline, SEO } from "../../components";
import { FillCard } from "../../atoms/cards";
import { Text } from "../../atoms";
import { PageTitles } from "../../constants";
import { createWorkExperienceStructuredData, createSkillsStructuredData } from "@/utils/structuredData";

const MyStory: React.FC = () => {
  return (
    <StyledPageContainer>
      <SEO 
        title="My Story - Himanshu Ganapavarapu's Journey in Tech"
        description="Follow my journey from a support engineer to a Senior Frontend Engineer. Discover my experiences at KodeKloud, Loop Health, and other tech companies, showcasing growth, challenges, and achievements."
        pageType="article"
        structuredData={[
          createWorkExperienceStructuredData(),
          createSkillsStructuredData()
        ]}
      />
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
              Presenting <b>My Story</b> — a timeline that <b>authentically captures my journey</b> in tech, career, and life, highlighting the <b>moments that truly shaped me</b>.
              </Text.Para>
            </StyledFillCardContent>
          </FillCard>
        </StyledFillCardContainer>
      </StyledHeaderContainer>
      <Timeline />
    </StyledPageContainer>
  );
};

export default MyStory;
