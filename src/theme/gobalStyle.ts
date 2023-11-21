import { createGlobalStyle } from 'styled-components';
import MarkerFelt from './marker-felt.ttf';
const GlobalStyle = createGlobalStyle(
    (p) => `
    @font-face {
        font-family: 'Marker Felt';
        src: url(${MarkerFelt});
    }
    html, body {
        100%;
    }
    body, #root  {
        font-family: 'Marker Felt', sans-serif;
        background-color: ${p.theme.palette.bgColor};
        color: ${p.theme.palette.primary};
        min-height: 100vh;
    }
    #root {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
`
);

export default GlobalStyle;
