import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: 116px auto;
  grid-area:
  "header"
  "section";

  > header {
    grid-area: "header";
    margin-bottom: 30px;
  }

  button {
    margin-bottom: 24px;
  }

  > section {
    grid-area: "section";
    padding: 0 122px;
  }

  .container-info{
    overflow-y: auto;
    padding-right: 12px;
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

  .note {
      padding: 0;
      background: transparent;

      h1{
        font-size: 36px;
      }

      .box-title-stars{
        display: flex;
        align-items: center;
        gap: 20px;

        margin-bottom: 24px;
      }

      svg{
        width: 20px;
        height: 20px;
        color: ${({theme}) => theme.COLORS.PINK};
      }

      .box-user-time{
        font-size: 16px;
        font-family: roboto;
        font-weight: 400;
        margin-bottom: 40px;
      }

      .box-user, .box-time, .box-user-time{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 8px;
      }

      .avatar img {
        width: 16px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_900};
      }

      .icon-time{
        width: 16px;
      }

      .box-desc-tag{

        footer{
            order: 1;
            margin-bottom: 40px;
        }

        p{
            order: 2;
        }



    }
  }





`