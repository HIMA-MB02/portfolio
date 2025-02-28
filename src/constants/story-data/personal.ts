import {
  TimelineTags,
  TimelineItemType,
} from "../../components/timeline/types";

export const personal: TimelineItemType<
  TimelineTags.Personal | TimelineTags.Education
>[] = [
  {
    date: { month: "AUG", year: "1997" },
    title: "The Beginning in Belgaum, Karnataka",
    content: [
      "I was born in Belgaum, Karnataka, India, but moved to Bahrain at just 6 months old. Bahrain, a small island nation in the Middle East, is next to Saudi Arabia and is also known as the Kingdom of Bahrain.",
      "Though I’m not Bahraini, so much of who I am today is shaped by my experiences there. I may not have been born in Bahrain, but I’ve come to love the place dearly.",
    ],
    tags: [TimelineTags.Personal],
  },
  {
    date: { month: "DEC", year: "2024" },
    title: "A New Chapter: Marriage",
    content: [
      "After 8 years together, we decided to get married. We first crossed paths in school, but it wasn’t until college that we started dating.",
      "We spent some time apart after college due to long-distance as she pursued her MBA and worked at a few companies. Finally, in December 2024, we sealed the deal and started a new chapter together.",
      "Fun fact: My father, sister, and wife all share the same birthday—February 8th. Coincidence? Or fate?",
    ],
    tags: [TimelineTags.Personal],
  },
  {
    date: { month: "FEB", year: "2002" },
    title: "Schooling & Early Years in Bahrain",
    content: [
      "I completed my schooling in Bahrain under the CBSE curriculum, attending multiple schools on the island—Asian School, New Indian School, New Millennium School, and ultimately, the Indian School of Bahrain, where I completed my 12th grade.",
      "My interest in technology started early. I remember working with friends to create a website for our school. While I wasn’t fully committed back then, I was fascinated by the idea of creating something that others could use.",
      "These formative years planted the seed for my tech aspirations and set me on the path to solving complex challenges.",
    ],
    tags: [TimelineTags.Education, TimelineTags.Personal],
  },
  {
    date: { month: "JUL", year: "2015" },
    title: "Bachelor of Technology in Information Technology, COEP",
    content: [
      "I pursued my BTech in IT at COEP, Pune, immersing myself in the world of software development.",
      "Along the way, I started freelancing—developing websites for a local used car dealership, an inventory management systems for a local brewery, and creating various websites for campus clubs. I was learning and building, hands-on.",
      "I participated in events like MindSpark, Bhau Entrepreneurship Cell, and Regatta, where I won bronze medals in rowing. Regatta wasn’t just about competition—it helped me shed some weight, get fit, and build confidence!",
    ],
    tags: [TimelineTags.Education, TimelineTags.Personal],
  },
];
