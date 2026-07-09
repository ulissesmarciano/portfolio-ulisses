import styled from "styled-components";

export const Container = styled.footer`
    background-color: #000;

    .bottom-info-section {
        margin: 0 auto;
        padding: 4rem 0;
        max-width: 64rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .bottom-info-section h2 a {
        color: #fff;
        font-size: 1.5rem;
    }

    .bottom-info-section p {
        color: #fff;
        font-size: .875rem;
    }

    @media (max-width: 1200px){
        padding: 0 2rem;
    }

    @media (max-width: 320px) {
        padding: 1.9rem 1rem;
    }
`