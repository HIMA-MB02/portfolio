import { BuiltWithSection, DDDSection, Landing, MyMantrasSection, GithubSection } from "../../components";
import {
  Wrapper,
} from "./styles";

export default function Home() {
  return (
    <Wrapper id="start">
        <Landing />
        <DDDSection />
        <MyMantrasSection />
        <BuiltWithSection />
        <GithubSection />
    </Wrapper>
  );
}
