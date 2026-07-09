import { createGlobalStyle } from 'styled-components';


export const Globalstyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        scroll-behavior: smooth;
    }

    body {
        background-color: ${({ theme }) => theme?.background};
        color: ${({ theme }) => theme?.text};
        transition: background-color 0.3s ease, color 0.3s ease;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`

