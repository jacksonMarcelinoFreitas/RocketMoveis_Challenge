import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 32px;
    text-align: left;

    border-radius: 16px;
    border: none;

    background: ${({theme}) => theme.COLORS.PINK_50};

    > h1{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 8px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > svg{
        width: 12px;
        color: ${({theme}) => theme.COLORS.PINK};
        margin-left: 6px;
        margin-bottom: 8px;
    }

    > p{
        font-size: 16px;
        font-weight: 400;

        color: ${({theme}) => theme.COLORS.GRAY_700};
        text-align: justify;
        margin-bottom: 16px;
    }

    > footer{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: left;
        gap: 8px;
    }

`;

