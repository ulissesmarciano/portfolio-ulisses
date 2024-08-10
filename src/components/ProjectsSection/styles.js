import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;

    h3 {
        font-size: 1.75rem;
    }

        .project-section {

            @media(max-width: 768px){
            display: flex;
            gap: 4rem;
            flex-direction: row;
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
