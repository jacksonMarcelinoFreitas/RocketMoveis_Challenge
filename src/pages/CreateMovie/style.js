import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas:
    "header"
    "main";
    grid-template-rows: 116px auto;

    header{
        grid-area: header;
    }

    .container{
        padding-right: 16px;

        overflow-y: scroll;
        overflow-y: scroll;

        height: 70vh;

        &::-webkit-scrollbar-track {
        background-color: transparent;

        }

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background: ${({theme})=> theme.COLORS.PINK};
            border-radius: 8px;
        }

    }

    main{
        display: flex;
        align-items: left;
        justify-content: center;
        flex-direction: column;

        grid-area: main;

        padding: 40px 64px;

        .header-main{
            a {
                display: flex;
                align-items: center;
                justify-content: start;
            }

            margin-bottom: 40px;

            h1{
                margin-top: 24px;
            }
        }

        .box-input{
            width: 100%;
            display: flex;
            gap: 40px;

            div{
                width: 100%;
            }
        }

        .box-tags{
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 24px;
            background-color: ${({theme}) => theme.COLORS.BLACK};

            padding: 16px;

            border-radius: 8px;

            .noteItem{
                margin: 0;
            }
        }

        .box-button{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 40px;

            button{
                margin: 0;
            }

            .button-variance{
                background-color: ${({theme}) => theme.COLORS.BLACK};
                color: ${({theme}) => theme.COLORS.PINK};
            }
        }
    }
`;

export const Form  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;

`
