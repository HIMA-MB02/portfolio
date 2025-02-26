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
          Resumes are boring.<br />
          Too much text, often exaggerated and lacks personal touch.
        </StyledCenteredDescription>
        <StyledFillCardContainer>
          <FillCard>
            <StyledFillCardContent>
              <Text.Para>
                Here's is my approach to solving the resume problem. <br />
                This timeline aims to reflect my growth in technology, career
                achievements, and life's precious moments, but in a more
                personal way.
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
