import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    > h2 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 24px;
        font-weight: 700;
    }

    > .profile-small {
        > div {
            > p{
                color: ${({ theme }) => theme.COLORS.WHITE};
                font-size: 14px;
                font-weight: 700;
            }
            a{
                color: ${({ theme }) => theme.COLORS.GRAY_700};
                font-size: 14px;
                font-weight: 400;
            }

        }   
        > .photo {
            background-image: url('https://github.com/jacksonMarcelinoFreitas.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            border-radius: 50%;
            border: 1 px solid ${({theme}) => theme.COLORS.GRAY_900};
        }     
    }

`;