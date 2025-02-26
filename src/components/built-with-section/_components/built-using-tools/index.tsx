import { FirebaseIcon, ReactIcon, ReactSpringIcon, StyledComponentsIcon, TypescriptIcon } from "../../../../theme/icons";
import { StyledIconImage, StyledIconWrapper, StyledToolsWrapper, StyledWrapper } from "./styles";

export default function BuiltUsingTools() {
  return (
    <StyledWrapper>
      <StyledToolsWrapper>
        <StyledIconWrapper>
          <StyledIconImage src={FirebaseIcon} alt="Firebase Icon" />
        </StyledIconWrapper>
        <div>Firebase</div>
      </StyledToolsWrapper>
      <StyledToolsWrapper>
        <StyledIconWrapper>
          <StyledIconImage src={ReactIcon} alt="React Icon" />
        </StyledIconWrapper>
        <div>React JS</div>
      </StyledToolsWrapper>
      <StyledToolsWrapper>
        <StyledIconWrapper>
          <StyledIconImage
            style={{ height: "4.5rem" }}
            src={ReactSpringIcon}
            alt="React Spring Icon"
          />
        </StyledIconWrapper>
        <div>React Spring</div>
      </StyledToolsWrapper>
      <StyledToolsWrapper>
        <StyledIconWrapper>
          <StyledIconImage
            style={{ height: "3.2rem" }}
            src={StyledComponentsIcon}
            alt="StyledComponents Icon"
          />
        </StyledIconWrapper>
        <div>Styled</div>
        <div>Components</div>
      </StyledToolsWrapper>

      <StyledToolsWrapper>
        <StyledIconWrapper>
          <StyledIconImage
            style={{ height: "2.5rem" }}
            src={TypescriptIcon}
            alt="Typescript Icon"
          />
        </StyledIconWrapper>
        <div>Typescript</div>
      </StyledToolsWrapper>
    </StyledWrapper>
  );
}
