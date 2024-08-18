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

    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-out;

    &.is-visible {
        animation: ${slideUp} 0.5s forwards;
    }
    
    padding-bottom: 8rem;
    height: calc(100vh - 98.78px);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .hello-section {
        margin-bottom: 2.2rem;

        display: flex;
        align-items: flex-start;
        gap: 1rem;

        font-size: 2.625rem;
    }

    .hello-section .waving-hand {
        font-size: 2rem;
        display: inline-block;
        animation: wave 2s infinite;
        transform-origin: 70% 70%;
    }

    .summary-sentence {
        margin-bottom: 2rem;

        font-size: 2rem;
        font-weight: bold;
        line-height: 3rem;
    }

    .summary-sentence span {
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

    .contact-screen p {

        margin-bottom: 1rem;

        font-size: 1.2rem;
        line-height: 1.5rem;
    }

    .contact-screen .contact-link-screen {
        
        display: flex;
        gap: 1rem;
    }

    @media(max-width: 769px){

        .hello-section {
            font-size: 2rem;
        }

        .summary-sentence {
            font-size: 1.6rem;
        }

        .summary-sentence span {
            color: #000;
        }

        @media(max-width: 425px){
            .contact-screen .contact-link-screen {
                gap: .1rem;
                flex-wrap: wrap;
            }
        }

        @media(max-width: 375px){
            .summary-sentence {
                font-size: 1.4rem;
                line-height: 2.2rem;
            }

            .contact-screen p {
                font-size: 1rem;
            }
        }
    }
`;