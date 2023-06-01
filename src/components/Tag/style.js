import styled from "styled-components";

export const Container = styled.span`
    padding: 16px 16px;

    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: ${({theme}) => theme.COLORS.GRAY_900};

    border-radius: 10px;


`;