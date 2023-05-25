import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "Content";

    background: ${({theme})=> theme.COLORS.BACKGROUND_900};
`

export const Content = styled.div`
    padding: 0 64px;
    overflow-y: auto;
`
