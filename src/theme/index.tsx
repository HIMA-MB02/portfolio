const theme = {
    fontFamily: {
        majorMono: `"Major Mono Display", monospace`,
        moderustic: `"Moderustic", sans-serif`,
        comfortaBrush: `"Comforter Brush", cursive`,
        comfortaa: '"Comfortaa", sans-serif'
    },
    fontWeight: {
        ultraBold: 800,
        bolder: 700,
        bold: 600,
        semiBold: 500
    },
    fontSize: {
        xxl: '5rem',
        xl: '4rem',
        l: '3rem',
        m: '1.75rem',
        sm: '1.25rem',
        xs: '1rem'
    },
    color: {
        black: (transparency: number = 1) => `rgba(0, 0, 0, ${transparency})`,
        white: (transparency: number = 1) => `rgba(255, 255, 255, ${transparency})`,
        muted: 'rgb(150, 149, 149)',
        blueGradient: 'linear-gradient(60deg,#a166ab,#5073b8,#1098ad,#07b39b)',
        orangeGradient: 'linear-gradient(60deg,#f79533,#f37055,#ef4e7b,#a166ab)',
        linkedInGradient: 'linear-gradient(135deg, #0077B5, #00C6FF, #6A1B9A)',
        purpleGradient: 'linear-gradient(45deg, #24292e, #4a154b)',
        primary: '#5073b8',
        secondary: '#f79533',
        teritary: '#07b39b',
        red: '#f2023a'
    }
};

export default theme;
