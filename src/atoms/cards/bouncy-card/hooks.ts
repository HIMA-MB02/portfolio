import { useEffect, useRef, useState } from "react";
import { useDOMDimensions } from "../../../common/hooks";
import { useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";


export default function useBouncyCardHooks(isExpanded: boolean) {
    const domTarget = useRef<HTMLDivElement>(null);
    const { dimensions } = useDOMDimensions(domTarget);
    const [positionOffset, setPositionOffset] = useState({ x: 0, y: 0 })
    const minY = positionOffset.y - (dimensions?.width || 0) / 2
    const maxY = positionOffset.y + (dimensions?.width || 0) / 2
    const minX = positionOffset.x - (dimensions?.height || 0) / 2
    const maxX = positionOffset.x + (dimensions?.height || 0) / 2
    const updateCoordinates = (dimensions: DOMRect) => {
      if (domTarget) {
        setPositionOffset({
          x: dimensions.left + window.scrollX + (dimensions.width / 2),
          y: dimensions.top + window.scrollY + (dimensions.height / 2) ,
        })
      }
    };
  
    useEffect(() => {
      if (dimensions) {
        updateCoordinates(dimensions)
      }
    }, [dimensions]);
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
      () => ({
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        zoom: 0,
        x: 0,
        y: 0,
        config: { mass: 5, tension: 350, friction: 20 },
      })
    );
    useGesture(
      {
        onDrag: ({ active }) =>
          api({ rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
        onMove: ({ xy: [px, py], dragging }) =>{
          return !dragging &&
          api({
            rotateX: calcX(Math.min(Math.max(py + window.scrollY, minY), maxY), positionOffset.y),
            rotateY: calcY(Math.min(Math.max(px + window.scrollX, minX), maxX), positionOffset.x),
            scale: 1.1,
          })},
        onHover: ({ hovering }) =>
          !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
      },
      { domTarget, eventOptions: { passive: false } }
    );
  
    const calcX = (y: number, ly: number) =>
      (ly - y) / 5;
    const calcY = (x: number, lx: number) =>
      (x - lx) / 5;
    return {
        domTarget,
        x,
        y,
        scale,
        zoom,
        rotateX, 
        rotateY,
        rotateZ
    }
}