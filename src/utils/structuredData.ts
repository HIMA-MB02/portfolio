export const createPersonStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Himanshu Ganapavarapu",
  alternateName: "Himanshu Ganpavarapu",
  jobTitle: "Senior Frontend Engineer",
  description: "Experienced Senior Frontend Engineer and Full Stack Developer with expertise in React, TypeScript, Node.js, and modern web technologies. Available for exciting opportunities in product engineering and software development.",
  url: "https://himanshuganapavarapu.com",
  image: "https://himanshuganapavarapu.com/himanshu.png",
  sameAs: [
    "https://github.com/HIMA-MB02",
    "https://www.linkedin.com/in/himanshuganapavarapu/",
    "https://www.instagram.com/hima.1997",
    "https://twitter.com/HimanshuGanpa"
  ],
  knowsAbout: [
    "React.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Full Stack Development",
    "Frontend Engineering",
    "Backend Development",
    "Web Development",
    "Software Architecture",
    "UI/UX Development",
    "Progressive Web Apps",
    "React Native",
    "Next.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "DevOps",
    "Agile Development",
    "Team Leadership",
    "Code Review",
    "Performance Optimization",
    "Security Implementation",
    "API Development",
    "GraphQL",
    "REST APIs",
    "Microservices",
    "Cloud Computing",
    "Database Design",
    "System Design",
    "Technical Leadership",
    "Product Engineering",
    "Startup Engineering",
    "E-commerce Development",
    "SaaS Development",
    "Healthcare Technology",
    "EdTech",
    "FinTech"
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Bachelor of Technology in Information Technology",
      educationalLevel: "Bachelor's Degree",
      credentialCategory: "degree",
      recognizedBy: {
        "@type": "Organization",
        name: "College of Engineering Pune (COEP)",
        url: "https://www.coep.org.in/"
      }
    }
  ],
  worksFor: {
    "@type": "Organization",
    name: "KodeKloud",
    url: "https://kodekloud.com"
  },
  workLocation: {
    "@type": "Place",
    name: "Remote",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Multiple"
    }
  },
  email: "himanshu.ganpa@gmail.com",
  nationality: {
    "@type": "Country",
    name: "India"
  },
  birthPlace: {
    "@type": "Place",
    name: "Belgaum, Karnataka, India"
  },
  alumniOf: {
    "@type": "Organization",
    name: "College of Engineering Pune",
    url: "https://www.coep.org.in/"
  },
  seeks: [
    {
      "@type": "Demand",
      name: "Senior Frontend Engineer Position",
      description: "Seeking exciting opportunities in product engineering and software development"
    },
    {
      "@type": "Demand", 
      name: "Full Stack Developer Position",
      description: "Open to full-time, contract, and remote opportunities"
    },
    {
      "@type": "Demand",
      name: "Technical Leadership Role",
      description: "Interested in technical leadership and team management positions"
    }
  ]
});

export const createWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Himanshu Ganapavarapu - Portfolio",
  alternateName: "Himanshu's Portfolio",
  url: "https://himanshuganapavarapu.com",
  description: "Professional portfolio of Himanshu Ganapavarapu, a Senior Frontend Engineer and Full Stack Developer specializing in React, TypeScript, and modern web technologies.",
  author: {
    "@type": "Person",
    name: "Himanshu Ganapavarapu"
  },
  publisher: {
    "@type": "Person",
    name: "Himanshu Ganapavarapu"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://himanshuganapavarapu.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  mainEntity: {
    "@type": "Person",
    name: "Himanshu Ganapavarapu"
  }
});

export const createProfessionalServiceStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Himanshu Ganapavarapu - Software Development Services",
  description: "Professional software development services including frontend engineering, full stack development, and technical consulting.",
  provider: {
    "@type": "Person",
    name: "Himanshu Ganapavarapu"
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide"
  },
  serviceType: [
    "Frontend Development",
    "Full Stack Development", 
    "React Development",
    "TypeScript Development",
    "Web Application Development",
    "Mobile App Development",
    "Technical Consulting",
    "Code Review",
    "Performance Optimization",
    "System Architecture",
    "API Development",
    "Database Design",
    "Cloud Integration",
    "DevOps Implementation",
    "Team Leadership",
    "Technical Training"
  ],
  availableChannel: [
    {
      "@type": "ServiceChannel",
      name: "Email",
      url: "mailto:himanshu.ganpa@gmail.com"
    },
    {
      "@type": "ServiceChannel",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/himanshuganapavarapu/"
    },
    {
      "@type": "ServiceChannel",
      name: "GitHub",
      url: "https://github.com/HIMA-MB02"
    }
  ]
});

export const createBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const createWorkExperienceStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Work Experience",
  description: "Professional work experience of Himanshu Ganapavarapu",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Role",
        roleName: "Senior Frontend Engineer",
        startDate: "2024-06",
        endDate: "Present",
        isCurrentRole: true,
        worksFor: {
          "@type": "Organization",
          name: "KodeKloud",
          url: "https://kodekloud.com"
        },
        description: "Leading frontend engineering initiatives, architecting authentication systems, managing Learning Management System, and contributing to mobile app development."
      }
    },
    {
      "@type": "ListItem", 
      position: 2,
      item: {
        "@type": "Role",
        roleName: "Software Engineer",
        startDate: "2021-10",
        endDate: "2024-06",
        worksFor: {
          "@type": "Organization",
          name: "Loop Health",
          url: "https://loophealth.com"
        },
        description: "Full stack development with TypeScript migration, UI library creation, backend optimization, and performance improvements achieving 1000% scaling."
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Role",
        roleName: "Software Engineer",
        startDate: "2020-11",
        endDate: "2021-10",
        worksFor: {
          "@type": "Organization",
          name: "Digital Trons"
        },
        description: "MERN stack development for secure cloud-based document storage solutions tailored for enterprises."
      }
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Role",
        roleName: "Senior Analyst",
        startDate: "2019-08",
        endDate: "2020-11",
        worksFor: {
          "@type": "Organization",
          name: "Capgemini",
          url: "https://www.capgemini.com"
        },
        description: "Contributed to migration of The Co-operative Bank's payments module from Kony to React."
      }
    }
  ]
});

export const createSkillsStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Technical Skills",
  description: "Technical skills and expertise of Himanshu Ganapavarapu",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "DefinedTerm",
        name: "React.js",
        description: "Expert level proficiency in React.js framework"
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "DefinedTerm",
        name: "TypeScript",
        description: "Advanced TypeScript programming and type system design"
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "DefinedTerm",
        name: "Node.js",
        description: "Backend development and server-side JavaScript"
      }
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "DefinedTerm",
        name: "System Architecture",
        description: "Designing scalable and maintainable software architectures"
      }
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "DefinedTerm",
        name: "Team Leadership",
        description: "Technical leadership and team management experience"
      }
    }
  ]
}); 