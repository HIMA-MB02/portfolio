import { BuiltWithSection, DDDSection, Landing, MyMantrasSection, GithubSection, HotTakes, SEO } from "@/components";
import {
  Wrapper,
} from "./styles";
import { createPersonStructuredData, createWebsiteStructuredData, createProfessionalServiceStructuredData } from "@/utils/structuredData";

export default function Home() {
  return (
    <Wrapper id="start">
        <SEO 
          title="Himanshu Ganapavarapu - Senior Frontend Engineer & Full Stack Developer"
          description="Experienced Senior Frontend Engineer with expertise in React, TypeScript, and modern web technologies. Proven track record in scaling applications, leading teams, and delivering high-impact solutions."
          pageType="website"
          structuredData={[
            createPersonStructuredData(),
            createWebsiteStructuredData(),
            createProfessionalServiceStructuredData()
          ]}
        />
        <Landing />
        <DDDSection />
        <MyMantrasSection />
        <HotTakes />
        <BuiltWithSection />
        <GithubSection />
    </Wrapper>
  );
}
