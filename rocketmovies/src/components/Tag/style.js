import styled from "styled-components";

export const Container = styled.span`
    padding: 6px 16px;

    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: ${({theme}) => theme.COLORS.GRAY_900};

    border-radius: 8px;

`;