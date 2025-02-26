import { RefObject, useEffect, useState } from "react";

export function useDOMDimensions(ref: RefObject<HTMLElement>) {
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);
  const updateCoordinates = () => {
    const divElement = ref.current;
    if (divElement) {
      const rect = divElement.getBoundingClientRect();
      setDimensions(rect);
    }
  };
  useEffect(() => {
    updateCoordinates();
    window.addEventListener("resize", updateCoordinates);
    window.addEventListener("scroll", updateCoordinates);
    return () => {
      window.removeEventListener("resize", updateCoordinates);
      window.addEventListener("scroll", updateCoordinates);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    dimensions
  }
}
