import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import {
  HotTakesCard,
  StyledBigText,
  StyledSmallText,
  StyledCarouselWrapper,
  StyledTitleSpan,
  StyledWrapper,
} from "./styles";
import { FillCard } from "@/atoms/cards";
import { Text } from "@/atoms";

const HotTakes = () => {
  return (
    <StyledWrapper>
      <Text.Title>
        <StyledTitleSpan>H🔥t Takes</StyledTitleSpan> & Hard Truths
      </Text.Title>
      <StyledCarouselWrapper>
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            clones: 4,
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              speed: 1,
            },
            rewind: false,
            arrows: false,
            pagination: false,
            autoWidth: true,
            gap: "4rem",
            breakpoints: {
              768: {
                gap: "2rem",
              },
            },
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide>
            <FillCard color="blueGradient">
              <HotTakesCard>
                <StyledBigText>Engineers build systems</StyledBigText>
                <StyledSmallText>
                  Developers build applications.
                </StyledSmallText>
              </HotTakesCard>
            </FillCard>
          </SplideSlide>
          <SplideSlide>
            <FillCard color="orangeGradient">
              <HotTakesCard>
                <StyledSmallText>Strong types don’t fix</StyledSmallText>
                <StyledBigText>weak logic.</StyledBigText>
              </HotTakesCard>
            </FillCard>
          </SplideSlide>
          <SplideSlide>
            <FillCard color="purpleGradient">
              <HotTakesCard>
                <StyledBigText>Readable code</StyledBigText>
                <StyledSmallText>is scalable code</StyledSmallText>
              </HotTakesCard>
            </FillCard>
          </SplideSlide>
          <SplideSlide>
            <FillCard color="greenGradient">
              <HotTakesCard>
                <StyledSmallText>Multitasking</StyledSmallText>
                <StyledBigText>is overrated</StyledBigText>
              </HotTakesCard>
            </FillCard>
          </SplideSlide>
          <SplideSlide>
            <FillCard color="pinkGradient">
              <HotTakesCard>
                <StyledSmallText>Function works</StyledSmallText>
                <StyledBigText>Design Wins</StyledBigText>
              </HotTakesCard>
            </FillCard>
          </SplideSlide>
          <SplideSlide>
            <FillCard color="redGradient">
              <HotTakesCard>
                <StyledBigText>The best UX </StyledBigText>
                <StyledSmallText>is the one you don’t notice.</StyledSmallText>
              </HotTakesCard>
            </FillCard>
          </SplideSlide>
        </Splide>
      </StyledCarouselWrapper>
    </StyledWrapper>
  );
};

export default HotTakes;
