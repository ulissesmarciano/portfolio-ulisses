import styled from "styled-components";

export const Container = styled.header`
    margin: 0 auto;
    max-width: 64rem;
    padding: 1.9rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

   .portfolio-title {
        font-size: 2rem;
        font-weight: 800;
        flex: 1;
   }
   
   .navigation-bar {
        flex: 1;
   }

   .navigation-bar ul {
        display: flex;
        justify-content: space-between;
   }

   @media (max-width: 1200px){
        padding: 1.9rem 2rem;
    }

   @media (max-width: 768px){
        padding: 1.2rem 2rem;
        .navigation-bar {
            display: none;
        }
   }

   @media (max-width: 375px){
        .portfolio-title {
            font-size: 1.4rem;
        }
   }

   @media (max-width: 320px) {
        padding: 1.2rem 1rem;
    }
`

export const CloseSidebarIcon = styled.button`
    display: none;

    @media (max-width: 768px){
        display: flex;

        background-color: transparent;
        border: none;
        cursor: pointer;

        svg {
            height: 2.7rem;
            width: 2.7rem;
        }
    }

    @media (max-width: 375px) {
        svg {
            height: 2rem;
            width: 2rem;
        }
    }
`