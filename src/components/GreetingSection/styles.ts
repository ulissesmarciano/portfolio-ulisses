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
        align-items: start;
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
    

    .summary-container .avatar-container {
        height: 11rem;
        width: 11rem;
        position: relative;
    }

    .summary-container .avatar-container .user-image,
    .long-dash-border,
    .solid-border,
    .abstract-dash-border {
        position: absolute;
        top: 50%;
        left: 60%;
        transform: translate(-50%, -50%);
    }

    .summary-container .avatar-container .long-dash-border, 
    .solid-border,
    .abstract-dash-border {
        filter: ${({ theme }) => theme.imageFilter};
    }

    .summary-container .avatar-container .user-image {
        height: 7rem;
        width: 7rem;
        border-radius: 10rem;
    }

    .summary-container .avatar-container .long-dash-border {
        height: 8rem;
        width: 8rem;
        animation: rotation 120s linear infinite reverse;
    }

    .summary-container .avatar-container .solid-border {
        height: 9rem;
        width: 9rem;        
    }
    
    .summary-container .avatar-container .abstract-dash-border {
        height: 10rem;
        width: 10rem;
        animation: rotation 120s linear infinite;
    }

    .contact-screen p {
        margin-bottom: 1rem;
    }

    .contact-screen .contact-link-screen {
        display: flex;
        gap: .1rem;
        flex-wrap: wrap;
    }

    @keyframes rotation {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
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
            align-items: center;
        }

        .summary-container .presentation-container {
            flex: 1;
        }

        .summary-container .avatar-container {
            height: 20rem;
            width: 20rem;
            flex: 1;
        }

        .summary-container .avatar-container .user-image {
            height: auto;
            width: 50%;
        }

        .summary-container .avatar-container .long-dash-border {
            height: auto;
            width: 60%;
        }

        .summary-container .avatar-container .solid-border {
            height: auto;
            width: 70%;
        }
        
        .summary-container .avatar-container .abstract-dash-border {
            height: auto;
            width: 80%;
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