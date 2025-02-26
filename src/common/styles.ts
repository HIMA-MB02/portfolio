import styled from "styled-components";
import { CustomTheme } from "../types";

type FontWeightKey = keyof CustomTheme["fontWeight"];

export const getBold = (weight: FontWeightKey) => {
  return styled.span(
    (p) => `
        font-weight: ${p.theme.fontWeight[weight]}
    `
  );
};
