import {
  TimelineTags,
  TimelineItemType,
} from "../../components/timeline/types";
import { capgeminiImage, digitalTronsImage, gulfAirImage, kodekloudImage, loopHealthImage, oneplusImage } from "./images";

export const work: TimelineItemType<TimelineTags.Work>[] = [
  {
    date: { month: "JUN", year: "2017" },
    title: "Software Internship with GulfAir",
    content: [
      "During my internship at Gulf Air, Bahrain, I got hands-on with ASP.NET MVC and contributed to business applications for the Finance Department. I was excited to see how technology could streamline financial processes.",
      "I created unit tests, added backend functions using C#, and refactored code for consistency, learning a lot about building enterprise-level applications.",
      "This experience not only sharpened my technical skills but also gave me insight into how small improvements could have a big impact on a business.",
    ],
    tags: [TimelineTags.Work],
    imageElement: <img src={gulfAirImage} alt="Gulf Air" style={{ width: '35%', height: 'auto', objectFit: 'contain', borderRadius: '8px', marginTop: '20px', marginBottom: '20px' }} />,
  },
  {
    date: { month: "AUG", year: "2018" },
    title: "Marketing Internship with OnePlus India",
    content: [
      "It all started on a random day when I got a call from OnePlus India asking if I was interested in an internship. I had forgotten I even applied, but I thought, why not give it a try?",
      "I had no marketing experience but decided to take the plunge. I contributed to brand recognition on campus, managed events, and helped with social media KPIs, and also was present during the official OnePlus 6T launch in Delhi.",
      "It was an eye-opening experience, but I quickly realized that while marketing was interesting, I was much more passionate about coding!",
    ],
    tags: [TimelineTags.Work],
    imageElement: <img src={oneplusImage} alt="OnePlus" style={{ width: '30%', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} />,
  },
  {
    date: { month: "AUG", year: "2019" },
    title: "Senior Analyst at Capgemini",
    content: [
      "I joined Capgemini through campus placement, excited to start my career. Little did I know that getting into the development team was like a lottery.",
      "I was initially assigned to the support team. It was frustrating at first, but I kept pushing to get involved in development. Eventually, I contributed to migrating The Co-operative Bank’s payments module from Kony to React.",
      "This development work was short-lived, and as soon as the project was over, I was assigned to the support team again.",
      "I tried my best, but I felt I was wasting energy trying to get into the development team, and I decided to leave the company.",
    ],
    tags: [TimelineTags.Work],
    imageElement: <img src={capgeminiImage} alt="Capgemini" style={{ width: '50%', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} />,
  },
  {
    date: { month: "NOV", year: "2020" },
    title: "Software Engineer at Digital Trons",
    content: [
      "After leaving my previous role, I struggled to land development work due to my background in support. But I didn’t let that hold me back.",
      "I worked as a Software Engineer at Digital Trons, developing a MERN stack application for secure cloud-based document storage tailored to enterprises.",
      "Here, I took a pay cut, but I was happy to be working on something I enjoyed.",
      "Digital Trons is a small company, tight-knit and I love them for taking a chance on me.",
      "Here, I was able to get rid of that support engineer tag, contribute productively to the development team and build my resume.",
    ],
    tags: [TimelineTags.Work],
    imageElement: <img src={digitalTronsImage} alt="Digital Trons" style={{ width: '15%', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} />,
  },
  {
    date: { month: "OCT", year: "2021" },
    title: "Software Engineer at Loop Health",
    content: [
      "Loop Health was my first true startup experience, and it was nothing short of transformative. I learned by doing, failing fast, and growing even faster — all while surrounded by some of the most inspiring teammates I’ve had the privilege of working with.",
      "One of my key contributions was migrating all frontend codebases — across five distinct projects — to TypeScript, introducing Chromatic for UI testing, and bringing consistency to our design and development practices.",
      "I spearheaded the creation of a centralized UI library from scratch, bringing coherence and scalability to our design system.",
      "On the backend, I ventured beyond my role, introduced TypeScript, and advocated for Object-Oriented Programming. Through consistent refactoring and team mentorship, we achieved over 60% migration to a clean, OOP-based backend architecture.",
      "I also implemented GitHub Actions to bring CI/CD automation to all projects, significantly streamlining our deployment workflows.",
      "A major technical milestone was optimizing our member registration pipeline — scaling it from handling 15,000 members in 9 minutes to 100,000 members in under 5 minutes, a performance boost of over 1000%.",
      "I contributed to the development of Loop's Endorsement Pipeline — automating policy checks, premium calculations, and onboarding processes for health insurance.",
      "I also helped build HRMS integrations to make employee onboarding seamless for our partner companies.",
      "Towards the latter part of my journey, I worked on migrating our infrastructure from a NoSQL (Firestore) setup to a robust SQL-based system using PostgreSQL.",
      "And for some fun along the way — I led a team of five and won an internal hackathon, one of the most energizing moments of my time at Loop.",
      "Loop Health will always be special — it’s where I honed my technical chops, embraced ownership, and grew into an engineer who thinks end-to-end."
    ]
    ,
    tags: [TimelineTags.Work],
    imageElement: <img src={loopHealthImage} alt="Loop Health" style={{ width: '30%', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} />,
  },
  {
    date: { month: "JUN", year: "2024" },
    title: "Senior Frontend Engineer at KodeKloud",
    content: [
      "My journey at KodeKloud has been a deeply rewarding blend of technical leadership, cross-functional collaboration, and product ownership.",
      "One of my most impactful contributions was architecting our entire authentication system from the ground up — a phased rollout that introduced a centralized identity platform, SSO logins, SAML and OIDC integrations, and secure partner authentications across multiple external platforms.",
      "Alongside this, I was responsible for the overall management of our Learning Management System (LMS), ensuring its stability, scalability, and continuous evolution to meet learner needs.",
      "I also contributed to the development of the KodeKloud mobile app, expanding our learning experience to mobile users and helping shape its early foundation.",
      "Beyond product engineering, I dove into data by working hands-on with Metabase to drive insights and internal decision-making.",
      "I maintained direct communication with enterprise clients, ensuring their requirements translated into real, deliverable solutions.",
      "During this time, I also helped build our internal 'Notes' app and took the initiative to kickstart a company-wide Component Library to promote design consistency and code reusability.",
      "On the people side, I actively participated in scaling our team by conducting technical interviews and contributing to hiring decisions.",
      "Each of these experiences has helped shape my role into one of end-to-end ownership, where building, mentoring, and improving systems went hand in hand."
    ],
    tags: [TimelineTags.Work],
    imageElement: <img src={kodekloudImage} alt="KodeKloud" style={{ width: '50%', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} />,
  },
];
