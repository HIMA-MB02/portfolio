export interface TimelineItemType<T extends string> {
  date: {
    month: string;
    year: string;
  };
  title: string;
  content: string[];
  tags?: T[];
}

export enum TimelineTags {
  Work = "work",
  Education = "education",
  Project = "projects",
  Personal = "personal",
}
