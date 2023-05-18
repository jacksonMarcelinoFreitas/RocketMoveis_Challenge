import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    border: none;
    border-radius: 10px;
    margin-top: 24px;

    font-size: 16px;
    font-weight: 500;

    background: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BLACK};

    &:disabled{
        opacity: 0.5;
    }
`