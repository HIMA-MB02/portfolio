type TimelineMonth =
  | "JAN"
  | "FEB"
  | "MAR"
  | "APR"
  | "MAY"
  | "JUN"
  | "JUL"
  | "AUG"
  | "SEP"
  | "OCT"
  | "NOV"
  | "DEC";
export interface TimelineItemType<T extends string> {
  date: {
    month: TimelineMonth;
    year: `${number}`;
  };
  title: string;
  content: string[];
  tags?: T[];
  imageSrc?: string;
  ShowcaseButtonA?: React.ReactNode;
  ShowcaseButtonB?: React.ReactNode;
}
export enum MonthOrder {
  JAN = 0,
  FEB = 1,
  MAR = 2,
  APR = 3,
  MAY = 4,
  JUN = 5,
  JUL = 6,
  AUG = 7,
  SEP = 8,
  OCT = 9,
  NOV = 10,
  DEC = 11,
}

export enum TimelineTags {
  Work = "work",
  Education = "education",
  Project = "projects",
  Personal = "personal",
}
