import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    
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
            margin: 0 -2rem;
            padding: 0 2rem 1rem;

            display: grid;
            grid-template-columns: repeat(6, 15.625rem);
            grid-template-rows: repeat(2, auto);
            grid-auto-flow: column;

            overflow-x: scroll;
            overflow-y: hidden;

            ::-webkit-scrollbar {
                height: .8rem;
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
     }
`