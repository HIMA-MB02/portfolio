import { Button } from "@/atoms";
import { StyledGitIcon } from "@/components/github-section/styles";
import { GithubIcon } from "@/theme/icons";

const GithubButton = ({ url }: { url: string }) => {
  return (
    <Button color="purpleGradient" onClick={() => window.open(url, "_blank")}>
      View on GitHub <StyledGitIcon src={GithubIcon} alt="github" />
    </Button>
  );
};

export default GithubButton;
