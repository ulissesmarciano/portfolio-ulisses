import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 64rem;

    .content-section {
        padding-bottom: 8rem;
        height: calc(100vh - 98.78px);

        display: flex;
        align-items: center;
    }

    .content-section .greeting-screen h3 {
        margin-bottom: 2.2rem;

        font-size: 2.625rem;
    }

    .content-section .greeting-screen h3 .waving-hand {
        font-size: 2rem;
        display: inline-block;
        animation: wave 2s infinite;
        transform-origin: 70% 70%;
    }

    .content-section .greeting-screen .summary-sentence {
        margin-bottom: 2rem;

        font-size: 2rem;
        font-weight: bold;
        line-height: 3rem;
    }

    .content-section .greeting-screen .summary-sentence span {
        background-color: #05a1ad;
        color: #fff;
    }

    @keyframes wave {
        0% { 
            transform: rotate(0deg); 
        }
        10% { 
            transform: rotate(14deg); 
        }
        20% { 
            transform: rotate(-8deg); 
        }
        30% { 
            transform: rotate(14deg); 
        }
        40% { 
            transform: rotate(-4deg); 
        }
        50% { 
            transform: rotate(10deg); 
        }
        60% { 
            transform: rotate(0deg); 
        }
        100% { 
            transform: rotate(0deg); 
        }
    }

    .content-section .greeting-screen .contact-section p {
        margin-bottom: 1rem;

        font-size: 1.2rem;
        line-height: 1.5rem;
    }

    .content-section .greeting-screen .contact-section .contact-link-section {
        
        display: flex;
        gap: 1rem;
    }
`