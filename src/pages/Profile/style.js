import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 144px auto;
  grid-template-areas:
  "header"
  "avatar"
  "main";

  > main{
    height: 100%;
    width: 100%;
    grid-area: main;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: -50px;

    padding: 0 144px;
  }

  > header{
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: start;

    width: 100%;
    height: 144px;
    padding: 0 144px;

    background: ${({theme}) => theme.COLORS.PINK_50};
  }

`;

export const Avatar = styled.div`
  grid-area: avatar;
  position: relative;
  width: 186px;
  height: 186px;

  > img{
        border-radius: 50%;
        width: 186px;
        height: 186px;
    }

  > label{
        width: 48px;
        height: 48px;

        background: ${({theme}) => theme.COLORS.PINK};

        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input{
            display: none;
        };

        svg{
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }

    svg{
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BLACK};
    }

`

export const Form = styled.form`
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  margin-top: 64px;

  width: 340px;

  > .box-input{
    width: 100%;
  }
`;