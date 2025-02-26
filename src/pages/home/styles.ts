import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    margin-bottom: 8rem;
    padding: 1rem;
    box-sizing: border-box;
    animation: fadeIn 0.5s ease-in;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`