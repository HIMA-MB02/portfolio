import { useNavigate } from "react-router-dom";
import { BouncyCard } from "../../atoms/cards";
import { AppRoutes, PageTitles } from "../../constants";
import {
  StyledCardWrapper,
  StyledNavigationDivider,
  StyledNavigationText,
  StyledNavigationTextWrapper,
  StyledNavigationWrapper,
  StyledWrapper,
} from "./styles";

export default function Navigator() {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <StyledNavigationDivider />
      <StyledNavigationWrapper>
        <StyledCardWrapper
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <BouncyCard motion borderPulse>
            <StyledNavigationTextWrapper>
              <StyledNavigationText>{PageTitles.ABOUT_ME}</StyledNavigationText>
            </StyledNavigationTextWrapper>
          </BouncyCard>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <BouncyCard motion borderPulse>
            <StyledNavigationTextWrapper onClick={() => navigate(AppRoutes.MY_STORY)}>
              <StyledNavigationText>{PageTitles.MY_STORY}</StyledNavigationText>
            </StyledNavigationTextWrapper>
          </BouncyCard>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <BouncyCard motion borderPulse>
            <StyledNavigationTextWrapper onClick={() => navigate(AppRoutes.GET_IN_TOUCH)}>
              <StyledNavigationText>{PageTitles.GET_IN_TOUCH}</StyledNavigationText>
            </StyledNavigationTextWrapper>
          </BouncyCard>
        </StyledCardWrapper>
      </StyledNavigationWrapper>
    </StyledWrapper>
  );
}
