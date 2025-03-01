import {
  Label,
  Line,
  Text,
  // AnimatedTextWrapper,
  Wrapper,
  LabelText,
  StyledScrollIndicator,
  StyledDownArrow,
} from "./styles";
import Signature from "../../atoms/signature";
import { Navigator } from "..";
import useLandingHooks from "./hooks";
import { DownArrowIcon } from "../../theme/icons";
import { useEffect, useState } from "react";

export default function Landing() {
  const { words, springs, getWordStyle } = useLandingHooks();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <StyledScrollIndicator $isVisible={isVisible}>
        <StyledDownArrow
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          src={DownArrowIcon}
          alt="down-arrow"
        />
      </StyledScrollIndicator>
      {words.map((word, w_idx) => (
        <Line key={w_idx} style={springs[w_idx]}>
          <Text>{getWordStyle(word, w_idx)}</Text>
        </Line>
      ))}
      <Label>
        <Signature animate />
        <LabelText>Welcome to my personal corner of the web</LabelText>
      </Label>
      <Navigator />
    </Wrapper>
  );
}
