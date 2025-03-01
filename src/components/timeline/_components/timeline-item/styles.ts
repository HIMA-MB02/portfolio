import styled from "styled-components";

export const StyledTimelineItemContent = styled.div`
  position: relative;
  padding-left: 1.5rem;
  max-width: 100%;
  flex-grow: 1;

  @media (min-width: 768px) {
    padding-left: 2rem;
    max-width: calc(100% - 8rem);
    flex-grow: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 2rem;
    left: 0;
    width: 2px;
    height: 95%;
    background-color: ${(props) => props.theme.color.secondary};
    overflow: hidden;
  }
`;

export const StyledTimelineDot = styled.div`
  position: absolute;
  left: -5px;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.secondary};
`;

export const StyledTimelineDate = styled.div`
  display: none;
  font-weight: bold;
  font-family: ${(p) => p.theme.fontFamily.moderustic};
  font-size: ${(p) => p.theme.fontSize.m};
  color: ${(p) => p.theme.color.teritary};
  text-transform: uppercase;
  width: 7rem;

  @media (min-width: 768px) {
    display: block;
    text-align: center;
  }
`;
export const StyledTimelineDateMobile = styled.div`
display: block;
font-weight: bold;
font-family: ${(p) => p.theme.fontFamily.moderustic};
font-size: ${(p) => p.theme.fontSize.sm};
color: ${(p) => p.theme.color.teritary};
text-transform: uppercase;
width: 7rem;

@media (min-width: 768px) {
    display: none;
    text-align: center;
}
`;


export const StyledTimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
  padding: 0 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: start;
    padding: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  & + & {
    ${StyledTimelineItemContent}, ${StyledTimelineDate} {
      padding-top: 2rem;
    }
    ${StyledTimelineDot} {
      top: 2.5rem;
    }
    ${StyledTimelineItemContent}::before {
      top: 4.5rem;
      height: calc(100% - 3.5rem);
    }
  }
`;

export const StyledTimelineContent = styled.div`
  padding-left: 1rem;
  line-height: 1.6;
  color: ${(p) => p.theme.color.muted};
  font-size: ${(p) => p.theme.fontSize.xs};

  @media (min-width: 768px) {
    padding-left: 1.5rem;
    font-size: ${(p) => p.theme.fontSize.sm};
  }
`;


export const StyledShowcaseButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
  margin: 2rem 0;
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;
export const StyledTimelineImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
`;