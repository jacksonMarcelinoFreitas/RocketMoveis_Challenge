import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width:100%;
    height: 56px;

    padding: 0 16px;
    margin-top: 8px;

    border-radius: 10px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    
    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    
    
    > input{
        border: none;
        background: transparent;
        color: ${({theme}) => theme.COLORS.WHITE};

        width: 100%;
        padding-left: 16px;

        font-size: 16fpx;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
    }


`;

