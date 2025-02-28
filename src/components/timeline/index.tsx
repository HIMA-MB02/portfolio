import { useState } from "react";
import { TimelineFilters } from "./_components/filters";
import { StyledTimelineContainer, StyledTimelinePresent } from "./styles";
import { MonthOrder, type TimelineTags } from "./types";
import { TimelineItem } from "./_components/timeline-item";
import { data } from "../../constants/story-data";
const Timeline = () => {
  const [selectedTag, setSelectedTag] = useState<TimelineTags | undefined>(
    undefined
  );
  return (
    <>
      <TimelineFilters
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <StyledTimelineContainer>
        {data
          .sort((a, b) => {
            return (
              Number(a.date.year) - Number(b.date.year) ||
              MonthOrder[a.date.month] - MonthOrder[b.date.month]
            );
          })
          .filter((item) =>
            selectedTag ? item.tags?.includes(selectedTag) : true
          )
          .map((item, index) => (
            <TimelineItem item={item} selectedTag={selectedTag} index={index} />
          ))}
        <StyledTimelinePresent>PRESENT</StyledTimelinePresent>
      </StyledTimelineContainer>
    </>
  );
};

export default Timeline;
