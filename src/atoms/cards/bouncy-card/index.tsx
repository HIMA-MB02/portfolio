import { to } from "react-spring";
import { Card, CardContent } from "./styles";
import { CardProps } from "../types";
import useBouncyCardHooks from "./hooks";
import { useState } from "react";
import { CrossIcon } from "../../../theme/icons";

interface BouncyCardProps extends CardProps {
  borderPulse?: boolean;
  expandedContent?: React.ReactNode;
}

export default function BouncyCard({
  children,
  expandedContent,
  color = "blueGradient",
  motion = false,
  borderPulse = false,
}: BouncyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { domTarget, rotateX, rotateY, rotateZ, scale, x, y, zoom } =
    useBouncyCardHooks(isExpanded);
  const shouldExpand = expandedContent !== undefined;
  return (
    <Card
      ref={domTarget}
      $borderColor={color}
      $borderMotion={motion}
      $borderPulse={borderPulse}
      $isExpanded={isExpanded}
      onClick={() =>
        !isExpanded && expandedContent && setIsExpanded(!isExpanded)
      }
      style={{
        transform: isExpanded ? undefined : `perspective(600px)`,
        x: isExpanded ? 0 : x,
        y: isExpanded ? 0 : y,
        scale: isExpanded ? 1 : to([scale, zoom], (s, z) => s + z),
        rotateX: isExpanded ? 0 : rotateX,
        rotateY: isExpanded ? 0 : rotateY,
        rotateZ: isExpanded ? 0 : rotateZ,
        position: isExpanded && shouldExpand ? "fixed" : "relative",
        top: isExpanded && shouldExpand ? 0 : undefined,
        left: isExpanded && shouldExpand ? 0 : undefined,
        width: isExpanded && shouldExpand ? "calc(100vw - 4rem)" : undefined,
        height: isExpanded && shouldExpand ? "calc(100vh - 4rem)" : undefined,
        margin: isExpanded && shouldExpand ? "2rem" : undefined,
        zIndex: isExpanded && shouldExpand ? 1000 : undefined,
        boxSizing: isExpanded && shouldExpand ? "border-box" : undefined,
        transition:
          isExpanded && shouldExpand ? "all 0.5s ease-in-out" : undefined,
      }}
    >
      <CardContent>
        {isExpanded && shouldExpand ? expandedContent : children}
        {isExpanded && (
          <img
            src={CrossIcon}
            alt="close"
            style={{
              filter: "invert(1)",
              height: "2rem",
              width: "2rem",
              position: "absolute",
              top: "1rem",
              right: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => setIsExpanded(false)}
          />
        )}
      </CardContent>
    </Card>
  );
}
