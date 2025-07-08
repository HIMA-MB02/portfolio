import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
  pageType?: 'website' | 'profile' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title = "Himanshu Ganapavarapu - Senior Frontend Engineer & Full Stack Developer",
  description = "Experienced Senior Frontend Engineer and Full Stack Developer with expertise in React, TypeScript, Node.js, and modern web technologies. Available for exciting opportunities in product engineering and software development.",
  keywords = "Senior Frontend Engineer, Full Stack Developer, React Developer, TypeScript Expert, JavaScript Engineer, Node.js Developer, Software Engineer, Product Engineer, UI/UX Developer, Frontend Specialist, Web Developer, React Expert, Next.js Developer, AWS Developer, System Architecture, Technical Leadership, Remote Developer, Startup Engineer, Backend Developer, Database Design, API Development, Microservices, Cloud Computing, DevOps, Agile Development, Team Leadership, Code Review, Performance Optimization, Mobile Development, Progressive Web Apps, E-commerce Development, SaaS Development, Enterprise Software, Healthcare Tech, EdTech, FinTech, Blockchain Developer, Machine Learning Integration, Data Visualization, User Experience Design, Responsive Design, Cross-platform Development, Test-driven Development, CI/CD, Docker, Kubernetes, MongoDB, PostgreSQL, Redis, GraphQL, REST APIs, OAuth, JWT, WebSocket, Real-time Applications, Scalable Architecture, High-performance Applications, Open Source Contributor, Technical Writing, Mentorship, Code Quality, Best Practices, Problem Solving, Innovation, Creative Solutions, Product Strategy, Technical Consulting, Freelance Developer, Contract Developer, Full-time Developer, Remote Work, Hybrid Work, Bahrain Developer, India Developer, International Developer, English-speaking Developer, Agile Methodologies, Scrum Master, Product Owner, Technical Lead, Senior Engineer, Principal Engineer, Staff Engineer, Engineering Manager, Technical Architect, Solution Architect, Software Architect, Tech Lead, Senior Software Engineer, Principal Software Engineer, Staff Software Engineer, Engineering Leadership, Technical Vision, Product Development, Feature Development, Bug Fixes, Code Optimization, Performance Tuning, Security Implementation, Accessibility Compliance, SEO Implementation, Analytics Integration, A/B Testing, User Analytics, Conversion Optimization, Growth Hacking, Product Analytics, Business Intelligence, Data-driven Development, User-centric Design, Customer-focused Development, Business Logic, Enterprise Integration, Third-party APIs, Payment Integration, Authentication Systems, Authorization, Security Auditing, Penetration Testing, Code Security, GDPR Compliance, Data Privacy, Compliance Engineering, Regulatory Compliance, Healthcare Compliance, Financial Compliance, Education Technology, Learning Management Systems, Content Management Systems, E-learning Platforms, Online Education, Digital Transformation, Legacy System Migration, System Integration, API Gateway, Load Balancing, Caching Strategies, Database Optimization, Query Optimization, Indexing, Database Migration, Data Modeling, Entity Relationship Design, Normalization, Denormalization, ACID Properties, CAP Theorem, Event Sourcing, CQRS, Domain-driven Design, Clean Architecture, SOLID Principles, Design Patterns, Refactoring, Technical Debt Management, Code Maintenance, Documentation, Technical Specifications, Requirements Analysis, Project Planning, Sprint Planning, Backlog Management, Stakeholder Communication, Client Communication, Technical Presentations, Demo Presentations, Code Reviews, Pair Programming, Mob Programming, Knowledge Sharing, Technical Training, Onboarding, Developer Experience, Tool Development, Internal Tools, Automation, Scripting, Build Tools, Deployment Automation, Infrastructure as Code, Cloud Infrastructure, AWS, Azure, GCP, Serverless Architecture, Lambda Functions, Edge Computing, CDN, Content Delivery, Web Performance, Page Speed Optimization, Core Web Vitals, Lighthouse Optimization, SEO Optimization, Search Engine Optimization, Technical SEO, On-page SEO, Off-page SEO, Local SEO, E-commerce SEO, Content SEO, Video SEO, Image SEO, Voice Search Optimization, Mobile SEO, PWA SEO, Schema Markup, Structured Data, Rich Snippets, Featured Snippets, Knowledge Graph, Google My Business, Google Search Console, Google Analytics, Google Tag Manager, Facebook Pixel, LinkedIn Analytics, Social Media Integration, Social Login, Social Sharing, Social Media Marketing, Content Marketing, Email Marketing, Newsletter Development, Marketing Automation, CRM Integration, Sales Funnel Optimization, Lead Generation, Conversion Tracking, ROI Tracking, KPI Monitoring, Performance Metrics, Success Metrics, Business Metrics, Technical Metrics, User Metrics, Engagement Metrics, Retention Metrics, Churn Analysis, User Segmentation, Personalization, Recommendation Systems, AI Integration, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Predictive Analytics, Data Mining, Big Data, Data Warehousing, ETL Processes, Data Pipelines, Stream Processing, Real-time Analytics, Business Intelligence, Reporting, Dashboard Development, Data Visualization, Charts and Graphs, Interactive Dashboards, Executive Dashboards, Operational Dashboards, KPI Dashboards, Performance Dashboards, Sales Dashboards, Marketing Dashboards, Financial Dashboards, HR Dashboards, Customer Dashboards, Admin Dashboards, User Dashboards, Analytics Dashboards, Monitoring Dashboards, Security Dashboards, Compliance Dashboards, Quality Dashboards, Project Dashboards, Resource Dashboards, Inventory Dashboards, Supply Chain Dashboards, Logistics Dashboards, Operations Dashboards, Strategic Dashboards, Tactical Dashboards, Operational Excellence, Process Improvement, Continuous Improvement, Lean Development, Agile Transformation, Digital Innovation, Technology Innovation, Product Innovation, Service Innovation, Business Innovation, Process Innovation, Cultural Innovation, Organizational Innovation, Strategic Innovation, Disruptive Innovation, Incremental Innovation, Radical Innovation, Open Innovation, Collaborative Innovation, User Innovation, Market Innovation, Technology Transfer, Knowledge Transfer, Best Practice Sharing, Lessons Learned, Post-mortem Analysis, Retrospectives, Continuous Learning, Professional Development, Skill Development, Career Growth, Leadership Development, Team Building, Conflict Resolution, Negotiation Skills, Communication Skills, Presentation Skills, Public Speaking, Technical Writing, Documentation Skills, Project Management, Program Management, Portfolio Management, Risk Management, Quality Management, Change Management, Configuration Management, Release Management, Incident Management, Problem Management, Service Management, Asset Management, Vendor Management, Contract Management, Budget Management, Cost Management, Resource Management, Time Management, Scope Management, Integration Management, Stakeholder Management, Communication Management, Procurement Management, Human Resource Management, Team Management, Performance Management, Talent Management, Succession Planning, Recruitment, Hiring, Interviewing, Onboarding, Training, Mentoring, Coaching, Performance Reviews, Career Planning, Compensation Planning, Benefits Administration, Employee Engagement, Team Motivation, Culture Building, Remote Team Management, Distributed Teams, Global Teams, Cross-functional Teams, Agile Teams, Scrum Teams, Kanban Teams, DevOps Teams, Product Teams, Engineering Teams, Design Teams, QA Teams, Data Teams, Security Teams, Infrastructure Teams, Platform Teams, Developer Relations, Community Building, Open Source, Contribution, Collaboration, Networking, Professional Networks, Industry Events, Conferences, Meetups, Workshops, Webinars, Podcasts, Blogs, Articles, Tutorials, Courses, Certifications, Continuous Learning, Skill Certification, AWS Certification, Azure Certification, Google Cloud Certification, Professional Certification, Industry Certification, Technology Certification, Programming Certification, Project Management Certification, Agile Certification, Scrum Certification, DevOps Certification, Security Certification, Cloud Certification, Data Certification, AI Certification, Machine Learning Certification, Database Certification, Network Certification, System Administration Certification, Quality Assurance Certification, Business Analysis Certification, Product Management Certification, UX Design Certification, UI Design Certification, Digital Marketing Certification, SEO Certification, Analytics Certification, Content Marketing Certification, Social Media Marketing Certification, Email Marketing Certification, Growth Hacking Certification, Conversion Optimization Certification, User Research Certification, Market Research Certification, Customer Experience Certification, Service Design Certification, Business Process Certification, Lean Certification, Six Sigma Certification, ITIL Certification, PMP Certification, PRINCE2 Certification, Certified ScrumMaster, Certified Product Owner, Certified Scrum Developer, Certified Agile Leader, Certified DevOps Engineer, Certified Cloud Architect, Certified Data Scientist, Certified AI Engineer, Certified Machine Learning Engineer, Certified Security Professional, Certified Ethical Hacker, Certified Penetration Tester, Certified Information Security Manager, Certified Information Systems Auditor, Certified in Risk and Information Systems Control, Certified Chief Information Security Officer, Certified Data Protection Officer, Certified Privacy Professional, Certified Information Privacy Manager, Certified Information Privacy Professional, Certified Information Privacy Technologist, Certified Information Systems Security Professional, Certified Information Security Analyst, Certified Network Security Professional, Certified Application Security Engineer, Certified Secure Software Lifecycle Professional, Certified Threat Intelligence Analyst, Certified Incident Handler, Certified Computer Security Incident Handler, Certified Forensic Computer Examiner, Certified Information Forensics Investigator, Certified Cyber Crime Investigator, Certified Digital Forensics Examiner, Certified Mobile Forensics Examiner, Certified Network Forensics Examiner",
  ogTitle,
  ogDescription,
  ogImage = "https://himanshuganapavarapu.com/himanshu.png",
  ogUrl = "https://himanshuganapavarapu.com",
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl = "https://himanshuganapavarapu.com",
  structuredData,
  pageType = 'website'
}) => {
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const finalTwitterTitle = twitterTitle || finalOgTitle;
  const finalTwitterDescription = twitterDescription || finalOgDescription;
  const finalTwitterImage = twitterImage || ogImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Himanshu Ganapavarapu" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Himanshu Ganapavarapu - Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@HimanshuGanpa" />
      <meta name="twitter:site" content="@HimanshuGanpa" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={finalTwitterImage} />
      
      {/* Additional Meta Tags for Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="Himanshu's Portfolio" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
      <link rel="dns-prefetch" href="//instagram.com" />
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/himanshu.png" as="image" />
    </Helmet>
  );
};

export default SEO; 