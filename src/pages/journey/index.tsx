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


const Journey: React.FC = () => {
  return (
    <StyledPageContainer>
      <NavigationBar />
      <StyledHeaderContainer>
        <Text.Title font="moderustic" size="3rem">MY JOURNEY</Text.Title>
        <Text.Title font="moderustic" size="2rem"> Beyond the Resume</Text.Title>
        <StyledCenteredDescription>
          Resumes are boring --<br />
          too much text, often exaggerated, and impersonal.
        </StyledCenteredDescription>
        <StyledFillCardContainer>
          <FillCard>
            <StyledFillCardContent>
              <Text.Para>
              Here is a timeline that has a more authentic take on my journey in tech, career, and life, highlighting the moments that truly shaped me.
              </Text.Para>
            </StyledFillCardContent>
          </FillCard>
        </StyledFillCardContainer>
      </StyledHeaderContainer>
      <Timeline />
    </StyledPageContainer>
  );
};

export default Journey;
