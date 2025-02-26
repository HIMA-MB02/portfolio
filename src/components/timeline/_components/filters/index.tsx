import { TimelineTags } from "../../types";
import { StyledFilterButton, StyledFilterContainer } from "./styles";

export const TimelineFilters = ({
  selectedTag,
  setSelectedTag,
}: {
  selectedTag: TimelineTags | undefined;
  setSelectedTag: (tag: TimelineTags | undefined) => void;
}) => {
  return (
    <StyledFilterContainer>
      <StyledFilterButton
        key={"all"}
        onClick={() => setSelectedTag(undefined)}
        $isSelected={undefined === selectedTag}
      >
        {"All"}
      </StyledFilterButton>
      {Object.values(TimelineTags).map((tag) => (
        <StyledFilterButton
          key={tag}
          onClick={() => setSelectedTag(tag === selectedTag ? undefined : tag)}
          $isSelected={tag === selectedTag}
        >
          {tag}
        </StyledFilterButton>
      ))}
    </StyledFilterContainer>
  );
};
