import { Button, Text } from "../../atoms";
import { FillCard } from "../../atoms/cards";
import { GithubIcon } from "../../theme/icons";
import { StyledCardWrapper, StyledGitIcon, StyledWrapper } from "./styles";

export default function GithubSection() {
  return (
    <StyledWrapper>
      <FillCard>
        <StyledCardWrapper>
          <Text.Para>
            If you're enjoying what I've put together, feel free to{" "}
            <b>fork, use, and adapt it 🚀</b>—your support on GitHub would be{" "}
            <i>amazing 🙌,</i> so drop by and give the repo a star ⭐!
          </Text.Para>
          <Button color="purpleGradient">View on GitHub <StyledGitIcon src={GithubIcon} alt="github" /></Button>
        </StyledCardWrapper>
      </FillCard>
    </StyledWrapper>
  );
}
