import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;

    padding-right: 16px;


    //Estilização condicional, conforme propriedade passada
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_900 }` : "none"};

    border-radius: 10px;
    border-spacing: 10px;

    > button {
        display: flex;
        align-items: center;
        border: none;
        background: none;
    }

    .button-delete{
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    
    .button-add{
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};

        background: transparent;

        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

    }

`