import {
  StyledTimelineContent,
  StyledTimelineDate,
  StyledTimelineDot,
  StyledTimelineItemContent,
  StyledTimelineItem,
  StyledTimelineDateMobile,
  StyledShowcaseButtonContainer,
  StyledImageContainer,
} from "./styles";
import { type TimelineItemType } from "../../types";
import { Text } from "../../../../atoms";

interface TimelineItemProps<T extends string> {
  item: TimelineItemType<T>;
  selectedTag: T | undefined;
  index: number;
}

export const TimelineItem = <T extends string>({
  item,
  selectedTag,
  index,
}: TimelineItemProps<T>) => {
  return (
    <StyledTimelineItem key={`${selectedTag || "all"}-${index}`}>
      <StyledTimelineDate>
        {item.date.month}
        <br /> {item.date.year}
      </StyledTimelineDate>
      <StyledTimelineItemContent>
        <StyledTimelineDot />
        <Text.Title font="moderustic" size="2rem">{item.title}</Text.Title>
        <StyledTimelineDateMobile>
          {item.date.month} {item.date.year}
        </StyledTimelineDateMobile>
        {item.imageElement && (
          <StyledImageContainer>
            {item.imageElement}
          </StyledImageContainer>
        )}
        <StyledTimelineContent>
          {item.content.map((content, index) => (
            <Text.Para color="muted" key={index}>{content}</Text.Para>
          ))}
        </StyledTimelineContent>
        <StyledShowcaseButtonContainer>
          {item.ShowcaseButtonA}
          {item.ShowcaseButtonB}
        </StyledShowcaseButtonContainer>
      </StyledTimelineItemContent>
    </StyledTimelineItem>
  );
};
