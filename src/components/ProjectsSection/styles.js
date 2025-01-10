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
    scroll-margin-top: 200px;

    &.is-visible {
        animation: ${slideUp} 1s forwards;
    }

    margin-bottom: 8rem;

    h3 {
        font-size: 1.75rem;
    }

    .project-title {
        margin-bottom: 3rem;
    }

    .project-section {
        display: flex;
        gap: 4rem;
        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;

        ::-webkit-scrollbar {
            height: 0.8rem;
            background: white;
        }

        ::-webkit-scrollbar-track {
            background-color: transparent;
            border: solid 3px #e0e0e0;
            border-radius: 1rem;
        }

        ::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 1rem;
        }
    }

    @media (min-width: 768px) {
        .project-section {
            flex-direction: column;
            overflow-x: hidden;
        }
    }
`;

