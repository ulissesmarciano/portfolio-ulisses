import { createGlobalStyle } from 'styled-components';


export const Globalstyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        
    }

    body {
        padding: 2rem 2rem 0 2rem;
        font-family: Roboto, Arial, sans-serif;
        background-color: #FFFFFF;

        display: flex;
        flex-direction: column;
    }

    h1 {
        color: #000000;
        font-size: 2rem;
        font-weight: 800;
    }

    h3 {
        font-size: 1.75rem;
        margin-bottom: 3rem;
    }

    a{
        text-decoration: none;
        color: #000000;
    }

    p{
        font-size: 1.2rem;
        font-weight: 400;
        margin-bottom: 1rem;
        line-height: 1.5rem;
    }

`

