import { useNavigate } from "react-router-dom";
import { BouncyCard } from "../../atoms/cards";
import { AppRoutes } from "../../routes";
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
              <StyledNavigationText>About Me</StyledNavigationText>
            </StyledNavigationTextWrapper>
          </BouncyCard>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <BouncyCard motion borderPulse>
            <StyledNavigationTextWrapper onClick={() => navigate(AppRoutes.JOURNEY)}>
              <StyledNavigationText>My Journey</StyledNavigationText>
            </StyledNavigationTextWrapper>
          </BouncyCard>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <BouncyCard motion borderPulse>
            <StyledNavigationTextWrapper onClick={() => navigate(AppRoutes.GET_IN_TOUCH)}>
              <StyledNavigationText>Get In Touch</StyledNavigationText>
            </StyledNavigationTextWrapper>
          </BouncyCard>
        </StyledCardWrapper>
      </StyledNavigationWrapper>
    </StyledWrapper>
  );
}
