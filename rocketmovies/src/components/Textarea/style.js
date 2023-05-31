import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    resize: none;
    border: none;
    border-radius: 10px;

    padding: 16px;

    &::placeholder{
        color: ${({theme})=> theme.COLORS.GRAY_700};
    }

`