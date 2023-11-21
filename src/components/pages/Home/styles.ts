import styled from 'styled-components';

export const StyledHomeContainer = styled.div(
    (p) => `
    background-color: ${p.theme.palette.bgColor};
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: ${p.theme.palette.primary};
    position: relative;
`
);

export const StyledHomeImage = styled.img(
    (p) => `
    max-height: 600px;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    transition: .5s;
    &:hover {
        -webkit-filter: drop-shadow(3px 3px 3px ${p.theme.palette.secondary});
        filter: drop-shadow(3px 3px 3px ${p.theme.palette.secondary});
    }
`
);

export const StyledAppRoutes = styled.div`
    margin-left: 30px;
`;

export const StyledRouteListItem = styled.h1(
    (p) => `
    margin-bottom: 12px;
`
);

export const StyledRouteItem = styled.span(
    (p) => `
    border-bottom: 1px solid ${p.theme.palette.primary};
    cursor: pointer;
    transition: .75s;
    &:hover {
        color: ${p.theme.palette.secondary};
        border-bottom: 1px solid ${p.theme.palette.secondary};
        text-shadow: 0 0 2px ${p.theme.palette.secondary};
        font-size: 50px;
    }
`
);
