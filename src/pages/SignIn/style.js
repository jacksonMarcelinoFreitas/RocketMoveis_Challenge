import styled from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: "form image";
    grid-template-columns: 637px auto;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Form = styled.form`
    grid-area: form;
    padding: 0 148px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > div {

        > h1 {
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 48px;
            font-weight: 700;
        }

        > p{
            color: ${({theme}) => theme.COLORS.GRAY_700};
            font-size: 14px;
            font-weight: 400;
        }

        > h2{
            margin: 48px 0;
            font-size: 24px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

    > a:nth-child(even){
        margin-bottom: 42px;
    }

`;

export const Background = styled.div`
    grid-area: image;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;