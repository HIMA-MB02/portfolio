import { TimelineTags, TimelineItemType } from "../../components/timeline/types";
import { Button } from "@/atoms";
import { ProjectGithubLinks, ProjectSiteLinks } from "..";
import GithubButton from "./_components/github-button";
import { gGroupEximImage } from "./images";

export const mix: TimelineItemType<TimelineTags.Project | TimelineTags.Work | TimelineTags.Personal>[] = [
  {
    date: { month: "FEB", year: "2021" },
    title: "G Group EXIM",
    content: [
      "I had always yearned to build something of my own.",
      "Entrepreneurship constantly occupied my thoughts, yet I never found an idea I truly believed in—until now.",
      "Then I discovered a product called Coir Pith, and it instantly captivated me.",
      "For the unfamiliar, Coir Pith is a coconut-industry by-product that serves as a sustainable soil alternative for horticulture and landscaping.",
      "Growing up in Bahrain—a desert nation where fertile soil is scarce—I immediately recognized its potential. Connecting the dots, I decided to launched G Group Exim.",
      "I was a one-man army, managing the website, business card, permits, follow-ups, cold calls, site visits—everything. I tapped into my network to spread the word, securing a handful of clients in the first month and setting the business in motion.",
      "Even after building a stable client base and exporting roughly 100MT in a year, I couldn't envision devoting my entire career to it.",
      "I finally decided to close the company in 2023, and I'm glad I did. It was a great learning experience, and I'm proud of what I built."
    ],
    tags: [TimelineTags.Project, TimelineTags.Work, TimelineTags.Personal],
    ShowcaseButtonA: <GithubButton url={ProjectGithubLinks.G_GROUP_EXIM} />,
    ShowcaseButtonB: <Button color="orangeGradient" onClick={() => window.open(ProjectSiteLinks.G_GROUP_EXIM, "_blank")}>Visit Website</Button>,
    imageElement: <img src={gGroupEximImage} alt="G Group EXIM" style={{ width: '50%', height: 'auto', borderRadius: '8px' }} />,
  },
];
