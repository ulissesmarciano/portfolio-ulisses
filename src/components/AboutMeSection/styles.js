import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    h3 {
        font-size: 1.75rem;
        margin-bottom: 3rem;
    }

    .content-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }  

    .text-section {
        max-width: 40rem;
        display: flex;
        flex-direction: column;
        gap: .8rem;
        
        font-size: 1.2rem;
        line-height: 1.8rem;
    }

    .ilustrated-image-section {
        border-radius: 1rem;
    
        display: flex;
        justify-content: center;

        overflow: hidden;

        height: 25rem;
        width: 18rem;
    }

    .ilustrated-image-section img {
        z-index: -1;
        height: 100%;
    }
`