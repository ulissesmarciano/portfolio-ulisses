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
    transition: all 1s ease-out;
    
    &.is-visible {
        animation: ${slideUp} 1s forwards;
    }
    
    margin: 0 auto;
    min-height: 100vh;

    h3 {
        font-size: 1.75rem;
        margin-bottom: 3rem;
    }
    
    .content-section .text-section  {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .content-section .text-section p {
      font-size: 1.2rem;
      line-height: 1.8rem;
      text-align: justify;
    }


    .content-section img, 
    .text-and-image-section img {
      display: none;
    }
    
    @media(min-width: 546px) {
      .content-section .text-section .text-and-image-section {
        width: 100%;
        display: flex;
        gap: 1rem;
      }

      .content-section .text-section .text-and-image-section div {
        padding: 1rem 0;
        display: flex;
        flex: 1;
        align-items: flex-end;
      }

      .content-section .text-section .text-and-image-section div:last-child {
        display: flex;
        justify-content: center;
      }

      .content-section .text-section .text-and-image-section img {
        display: block;
        width: 100%;
        height: auto;
        max-height: 287.5px;
        max-width: 230px;
        border-radius: 1rem;
      }
    }

    @media(min-width: 769px) {
      .content-section .text-section .text-and-image-section div:last-child {
        display: none;
      }
      
      .content-section {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
      }
      .content-section .text-section {
        width: 100%;
      }

      .content-section img {
        display: block;
        border-radius: 1rem;
        width: 100%;
        height: auto;
      }

    }
`;