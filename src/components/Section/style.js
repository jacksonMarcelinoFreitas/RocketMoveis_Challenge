import styled from "styled-components";

export const Container = styled.section`
    width: 100%;

    > h2 {
        color: ${({theme}) => theme.COLORS.GRAY_900};
        font-size: 20px;
        font-weight: 400;

        margin-bottom: 24px;
    }
`;