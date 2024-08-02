import styled from "styled-components";

export const Container = styled.header`
    margin: 0 auto;
    padding: 1rem 0;
    max-width: 64rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

   .portfolio-title {
        font-size: 2rem;
        font-weight: 800;
        flex: 1;

        background-color: red;
   }
   
   .navigation-bar {
        flex: 1;
   }

   .navigation-bar ul {
        background-color: yellow;
        display: flex;
        justify-content: space-between;
   }
`