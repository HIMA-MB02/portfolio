import { useState } from "react";
import { TimelineFilters } from "./_components/filters";
import { data } from "./data";
import { StyledTimelineContainer, StyledTimelinePresent } from "./styles";
import { type TimelineTags } from "./types";
import { TimelineItem } from "./_components/timeline-item";

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
