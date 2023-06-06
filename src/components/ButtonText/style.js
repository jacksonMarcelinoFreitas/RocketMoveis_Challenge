import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: none;
    color: ${({theme}) => theme.COLORS.PINK};

    border: none;
    font-size: 16px;

`