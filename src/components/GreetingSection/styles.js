import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.section`
    padding-bottom: 3rem;

    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-out;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    &.is-visible {
        animation: ${slideUp} 0.5s forwards;
    }

    min-height: calc(100vh - 88.38px);

    .hello-section {
        margin-bottom: 2.2rem;

        display: flex;
        align-items: flex-start;
        gap: 1rem;

        font-size: 2rem;
    }

    .hello-section .waving-hand {
        font-size: 2rem;
        display: inline-block;
        animation: wave 2s infinite;
        transform-origin: 70% 70%;
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

    .summary-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .1rem;
    }

    .summary-sentence {

        font-size: 1.4rem;
        line-height: 2.2rem;
        font-weight: bold;
    }

    .summary-sentence span {
        background-color: #05a1ad;
        color: #fff;
    }

    .summary-container img {
        height: 7rem;
        width: 7rem;

        border-radius: 10rem;
    }

    .contact-screen p {
        margin-bottom: 1rem;
    }

    .contact-screen .contact-link-screen {
        display: flex;
        gap: .1rem;
        flex-wrap: wrap;
    }

    @media(min-width: 375px){
        height: calc(100vh - 88.38px);
        .summary-sentence {
            font-size: 1.6rem;
            line-height: 3rem;
        }

        .contact-screen p {
            font-size: 1.2rem;
            line-height: 1.5rem;
        }

        .contact-screen .contact-link-screen {
            gap: 1rem;
        }
    }

    @media(min-width: 425px) {
        .summary-container {
            flex-direction: row;
        }

        .summary-container img {
            height: auto;
            width: 30%;
        }
    }

    @media(min-width: 768px){
        .hello-section {
            font-size: 2.625rem;
        }

        .summary-sentence {
            font-size: 2rem;
        }
    }
`