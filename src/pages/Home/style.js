import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px 132px auto;
    grid-template-areas:
    "header"
    "addfilme"
    "content ";
    grid-area: header;

    background: ${({theme})=> theme.COLORS.BACKGROUND_900};
`

export const AddFilme = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 64px;
    grid-area: addfilme;

    > h1 {
        margin: 0;
        padding: 0;
        flex:4;
    }

    > Button{
        margin: 0;
        padding: 0;
        flex:1;
    }


`;

export const Content = styled.div`
    margin: 0 64px;
    overflow-y: auto;
    grid-area: content;
    padding: 0 8px 0 0;


    &::-webkit-scrollbar-track {
        background-color: transparent;

    }

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme})=> theme.COLORS.PINK};
        border-radius: 8px;
    }
`;
