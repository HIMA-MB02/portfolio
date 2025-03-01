import { Button } from "@/atoms";
import { ProjectGithubLinks, ProjectSiteLinks } from "..";
import {
  TimelineTags,
  TimelineItemType,
} from "../../components/timeline/types";
import GithubButton from "./_components/github-button";
import { blockchainImage, galactaGameImage } from "./images";

export const projects: TimelineItemType<TimelineTags.Project>[] = [
  {
    date: { month: "NOV", year: "2016" },
    title: "Galacta Game",
    content: [
      "Galacta Game was my first-ever game project, built using C and SDL2, and a proud milestone in my coding journey. It was my first venture outside the web development world, where I explored game mechanics, memory management, and real-time rendering. The game features adaptive difficulty, dynamic enemy behavior, and a structured scoring system.",
      "Looking back, this project was a stepping stone into thinking beyond web apps and embracing low-level programming challenges. 🚀🎮",
    ],
    imageSrc: galactaGameImage,
    tags: [TimelineTags.Project],
    ShowcaseButtonA: <GithubButton url={ProjectGithubLinks.GALACTA_GAME} />,
  },
  {
    date: { month: "NOV", year: "2017" },
    title: "Vahan Purchase Website",
    content: [
      "Vahan Purchase Website was my first-ever freelance project, built using C# and ASP.NET, and a proud milestone in my coding journey. It was my first venture outside the college world, where I got to work with a real client and deliver a product that they could use.",
      "Though this project is no longer live, it was a great learning experience and taught me a lot about working with clients and delivering products on time.",
      "I am unable to host this project due to IP rights, but I've shared the github link below.",
    ],
    tags: [TimelineTags.Project],
    ShowcaseButtonA: <GithubButton url={ProjectGithubLinks.VAHAN_PURCHASE_WEBSITE} />,
  },
  {
    date: { month: "SEP", year: "2020" },
    title: "Mini Blockchain in Typescript",
    content: [
      "Mini Blockchain in TypeScript was an experimental project where I dived into the world of blockchain by building a simplified proof-of-work system. I learn best by doing, so I implemented transaction handling, mining, and chain validation from scratch.", 
      "This project gave me hands-on experience with cryptographic hashing, data structures, and consensus mechanisms."
    ],
    tags: [TimelineTags.Project],
    ShowcaseButtonA: <GithubButton url={ProjectGithubLinks.MINI_BLOCKCHAIN_IN_TYPESCRIPT} />,
    imageSrc: blockchainImage,
  },
  {
    date: { month: "FEB", year: "2021" },
    title: "G Group Exim Website",
    content: [
      "This is the webiste of my own company, G Group Exim. I had started this comany to export Coir Pith to the world.",
      "Though I closed the company, I had super fun branding something from scratch.",
      "Techinically, this was my first startup experience 😄"
    ],
    tags: [TimelineTags.Project],
    ShowcaseButtonA: <GithubButton url={ProjectGithubLinks.G_GROUP_EXIM} />,
    ShowcaseButtonB: <Button color="orangeGradient" onClick={() => window.open(ProjectSiteLinks.G_GROUP_EXIM, "_blank")}>Visit Website</Button>,
    imageSrc: blockchainImage,
  },
];
