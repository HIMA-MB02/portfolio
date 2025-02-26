import { useSpring } from "react-spring";
import { AnimatedNoise, Wrapper } from "./styles";
import { PropsWithChildren } from "react";

export default function BackgroundNoise({ children }: PropsWithChildren) {
  const { value } = useSpring({
    from: {
      value: 0,
    },
    to: {
      value: 1,
    },
    loop: true,
    config: {
      duration: 8000,
    },
  });

  return (
    <Wrapper>
      <AnimatedNoise
        style={{
          x: value.to({
            output: [
              "0%",
              "-5%",
              "-15%",
              "7%",
              "-5%",
              "-15%",
              "15%",
              "0%",
              "3%",
              "-10%",
            ],
          }),
          y: value.to({
            output: [
              "0%",
              "-10%",
              "5%",
              "-25%",
              "25%",
              "10%",
              "0%",
              "15%",
              "35%",
              "10%",
            ],
          }),
        }}
      />
        {children}
    </Wrapper>
  );
}
