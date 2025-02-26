// 675.5866088867188

import styled, { keyframes, css } from "styled-components";

const firstNameAnimation = keyframes`
    from {
        stroke-dashoffset: 675;
    }
    to {
        stroke-dashoffset: 0;
    }
`;
const lastNameAnimation = keyframes`
    from {
        stroke-dashoffset: 892;
    }
    to {
        stroke-dashoffset: 0;
    }
`;

export const SignaturePathFirstName = styled.path<{ $animate?: boolean; }>`
  stroke-dasharray: 675;
  stroke-dashoffset: 675;
  stroke-width: 2;
  animation: ${props => props.$animate ? css`${firstNameAnimation} 3s ease-out forwards` : css`${firstNameAnimation} 0s forwards`};
`;

export const SignatureLastName = styled.path<{ $animate?: boolean; }>`
  stroke-dasharray: 892;
  stroke-dashoffset: 892;
  stroke-width: 2;
  animation: ${props => props.$animate ? css`${lastNameAnimation} 4s linear forwards 3s` : css`${lastNameAnimation} 0s forwards`};
`;
