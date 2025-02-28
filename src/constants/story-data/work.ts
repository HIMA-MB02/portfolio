import {
  TimelineTags,
  TimelineItemType,
} from "../../components/timeline/types";

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
  },
  {
    date: { month: "AUG", year: "2018" },
    title: "Marketing Internship with OnePlus India",
    content: [
      "It all started on a random day when I got a call from OnePlus India asking if I was interested in an internship. I had forgotten I even applied, but I thought, why not give it a try?",
      "I had no marketing experience but decided to take the plunge. I contributed to brand recognition on campus, managed events, and helped with social media KPIs, and also was present during the OnePlus 6T launch officially.",
      "It was an eye-opening experience, but I quickly realized that while marketing was interesting, I was much more passionate about coding!",
    ],
    tags: [TimelineTags.Work],
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
  },
  {
    date: { month: "OCT", year: "2021" },
    title: "Software Engineer at Loop Health",
    content: [
      "Loop Health was my first startup experience, and it was nothing short of transformative. In my time there, I grew exponentially—10x, to be exact. I worked tirelessly, made plenty of mistakes, and had the privilege of working alongside passionate, driven people. It was here that I met some of the most influential people in my career.",
      "While you can find the full details of my journey at Loop Health on my resume, to keep it brief: I was a JavaScript engineer.",
      "I absolutely loved my time at Loop Health. I learned more than I ever expected and ended up spending three unforgettable years there.",
    ],
    tags: [TimelineTags.Work],
  },
  {
    date: { month: "JUN", year: "2024" },
    title: "Senior Frontend Engineer at KodeKloud",
    content: [
      "At KodeKloud, I architected an Identity Platform to streamline user authentication across platforms.",
      "I also enhanced the Learning Management System (LMS) with features like Bookmarks, and initiated a shared component library that improved UX consistency across multiple projects.",
    ],
    tags: [TimelineTags.Work],
  },
];
