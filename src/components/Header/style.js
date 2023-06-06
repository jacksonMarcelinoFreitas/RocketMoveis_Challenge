import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 64px;

    height: 116px;
    width: 100%;
    padding: 0 64px;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_900 };

    background: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1{
        font-size: 24px;
        font-weight: bold;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;


    > img{
        width: 64px;
        border-radius: 50%;

        border: 1px solid ${({theme}) => theme.COLORS.GRAY_900};
    }

    > div{
        text-align: end;
        width: 120px;

        color: ${({theme})=> theme.COLORS.WHITE};
        font-size: 14px;
        font-weight: bold;

        > a {
            display: block;
            font-weight: 400;
            color: ${({theme})=> theme.COLORS.GRAY_700};
        }
    }

`;
