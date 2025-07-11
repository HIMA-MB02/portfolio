import { TimelineTags, TimelineItemType } from "../../components/timeline/types";
import { mix } from "./mix";
import { personal } from "./personal";
import { projects } from "./projects";
import { work } from "./work";

export const data: TimelineItemType<TimelineTags>[] = [
  ...work,
  ...personal,
  ...projects,
  ...mix,
];
