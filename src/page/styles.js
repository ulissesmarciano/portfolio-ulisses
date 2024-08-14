import styled from "styled-components";

export const Container = styled.div`
    .main-body {
        margin: 0 auto;
        max-width: 64rem;
    }
    
    @media (max-width: 1200px){
        .main-body {
            padding: 0 2rem;
        }
    }

    @media (max-width: 320px) {
        .main-body {
            padding: 0 1rem;
        }
    }
`