import { createGlobalStyle } from 'styled-components';


export const Globalstyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto;
        list-style: none;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`

