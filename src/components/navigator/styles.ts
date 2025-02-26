import { animated } from "react-spring";
import styled from "styled-components";


export const StyledWrapper = styled(animated.div)((p) => `
    width: 100%;
    position: relative;
    background-color: ${p.theme.color.black()};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
        margin-bottom: 1rem;
    }
`)

export const StyledNavigationDivider = styled.div((p) => `
    box-shadow: 0px 0px 15px 1px ${p.theme.color.white(0.4)};
    width: 80%;
    height: 4px;
    border-radius: 2px;
    background: ${p.theme.color.blueGradient};

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 95%;
        height: 3px;
    }
`);

export const StyledNavigationWrapper = styled.div((p) => `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    max-width: 1000px;
    position: relative;
    padding: 0 1rem;

    @media (max-width: 768px) {
        justify-content: center;
        gap: 1rem;
        padding: 0;
        margin-top: 1rem;
    }
`)

export const StyledCardWrapper = styled.div`
    margin: 2rem;
    width: 11rem;
    height: 10rem;
    box-sizing: border-box;

    @media (max-width: 768px) {
        margin: 1rem;
        width: 8.5rem;
        height: 8rem;
    }

    @media (max-width: 480px) {
        margin: 0.5rem;
        width: 5.2rem;
        height: 5rem;
    }
`;

export const StyledNavigationTextWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: column;
    background-color: ${(p) => p.theme.color.black()};
    padding: 18px 10px;

    @media (max-width: 768px) {
        padding: 14px 8px;
    }

    @media (max-width: 480px) {
        padding: 10px 5px;
    }
`

export const StyledNavigationText = styled.div((p) => `
    width: 100%;
    color: white;
    text-align: left;
    font-size: ${p.theme.fontSize.m};
    font-weight: ${p.theme.fontWeight.ultraBold};
    text-transform: uppercase;
    font-family: ${p.theme.fontFamily.moderustic};
    line-height: 1.4;

    @media (max-width: 768px) {
        font-size: ${p.theme.fontSize.sm};
        line-height: 1.3;
    }

    @media (max-width: 480px) {
        font-size: ${p.theme.fontSize.xs};
        line-height: 1;
    }
`);
