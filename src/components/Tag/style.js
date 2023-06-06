import styled from "styled-components";

export const Container = styled.span`
    padding: 5px 16px;

    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: ${({theme}) => theme.COLORS.PINK_TAG};

    border-radius: 10px;

    cursor: pointer;
`;