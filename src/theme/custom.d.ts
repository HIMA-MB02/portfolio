import Theme from './theme';

type CustomTheme = typeof Theme;
declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: string;
            secondary: string;
            bgColor: string;
        };
        borderRadius: string;
    }
}
