import { Text } from "../../atoms";
import { BorderCard } from "../../atoms/cards";
import { StyledCardContent, StyledSubtitle, StyledWrapper } from "./styles";

export default function MyMantrasSection() {
  return (
    <StyledWrapper>
      <Text.Title>My Mantras</Text.Title>
      <StyledSubtitle>These principles aren’t mere words—they’re my way of life.</StyledSubtitle>
      <BorderCard color="blueGradient" motion>
        <StyledCardContent>
          <div>Curiosity.</div>
          <div>Persistance.</div>
          <div>Transparency.</div>
          <div>Obession.</div>
          <div>Passion.</div>
          <div>Perseverance.</div>
          <div>Authenticity.</div>
        </StyledCardContent>
      </BorderCard>
    </StyledWrapper>
  );
}
