import { BuiltWithSection, DDDSection, Landing, MyMantrasSection, GithubSection, HotTakes } from "@/components";
import {
  Wrapper,
} from "./styles";

export default function Home() {
  return (
    <Wrapper id="start">
        <Landing />
        <DDDSection />
        <MyMantrasSection />
        <HotTakes />
        <BuiltWithSection />
        <GithubSection />
    </Wrapper>
  );
}
