import styled from 'styled-components';

export const Container = styled.div`
    display: inline;

    > svg {
        fill: ${({theme}) => theme.COLORS.PINK};
    }
`;



