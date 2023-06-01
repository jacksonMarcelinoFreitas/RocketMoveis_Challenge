import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    //página de estilos globais
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: 'Roboto Slab', serif;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: hidden;
    };

    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover , a:hover{
        filter: brightness(0.9);
    }


`;