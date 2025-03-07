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
    transition: all 3s ease-out;
    scroll-margin-top: 200px;


    &.is-visible {
        animation: ${slideUp} 1s forwards;
    }

    height: 60vh;
    
    h3 {
        font-size: 1.75rem;
        margin-bottom: 3rem;
    }

    .skill-content {
        display: grid;
        grid-template-columns: repeat(3, 15.625rem);
        gap: 1rem;
    }

    @media (max-width: 1200px){
        .skill-content {
            display: grid;
            grid-template-columns: repeat(6, 15.625rem);
            grid-template-rows: repeat(2, auto);
            grid-auto-flow: column;

            overflow-x: scroll;
            overflow-y: hidden;

            ::-webkit-scrollbar {
                height: .8rem;
                background: ${({ theme }) => theme.scrollbarBackground};
            }

            ::-webkit-scrollbar-track {
                background-color: transparent;
                border: solid 3px ${({ theme }) => theme.scrollbarBorder};
                border-radius: 1rem;
            }

            ::-webkit-scrollbar-thumb {
                background: #c1c1c1;
                border-radius: 1rem;
            }
            
        }
     }
`;