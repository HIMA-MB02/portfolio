import styled from "styled-components";

export const StyledContainer = styled.div((p) => `
    width: 100%;
    height: 100%;
    max-width: 100%;
    position: relative;
    background-color: ${p.theme.color.black()};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
`)
export const StyledTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
`
export const StyledFillCardWrapper = styled.div((p) => `
    width: 100%;

    @media (min-width: 768px) {
        width: 90%;
    }

    @media (min-width: 1440px) {
        width: 80%;
    }
`);
export const StyledCardWrapper = styled.div((p) => `
    width: 95%;
    height: 100%;
    position: relative;
    background-color: ${p.theme.color.black()};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    animation: fadeIn 0.5s ease-in;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (min-width: 768px) {
        width: 90%;
        padding: 0 2rem;
    }

    @media (min-width: 1440px) {
        width: 60%;
        padding: 0 4rem;
    }
`);

export const StyledInroWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    @media (min-width: 768px) {
        width: 80%;
    }
`

export const StyledContactCardsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0 0.5rem;
    gap: 0.5rem;

    @media (min-width: 768px) {
        width: 95%;
        gap: 1.5rem;
        margin-top: 2rem;
        padding: 0 2rem;
    }

    @media (min-width: 1440px) {
        width: 100%;
        margin-top: 3rem;
        padding: 0 4rem;
    }
`

export const StyledContactImageWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    flex-direction: column;
    background-color: ${(p) => p.theme.color.black()};
    padding: 10px 12px;
`

export const StyledContactCardWrapper = styled.div`
    width: 6rem;
    height: 6rem;
    margin: 0.5rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    @media (min-width: 1024px) {
        width: 7rem;
        height: 7rem;
    }

    @media (min-width: 1440px) {
        width: 8rem;
        height: 8rem;
    }
`;

export const StyledContactImage = styled.img`
    width: 4rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    @media (min-width: 768px) {
        width: 5rem;
    }
`

export const StyledReasoningWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 1.5rem 0px;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    @media (min-width: 768px) {
        width: 70%;
    }

    @media (min-width: 1024px) {
        width: 60%;
    }

    @media (min-width: 1440px) {
        width: 50%;
    }
`