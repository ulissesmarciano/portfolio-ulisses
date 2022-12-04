import styled from 'styled-components';

export const TitleContainer = styled.div`
    margin: 4rem auto 0;
    max-width: 62.5rem;
    

    display: flex;

    
`

export const SkillsContainer = styled.div`
    margin: 0 -2rem 8rem -2rem;
    padding: 0 2rem;

    

    max-width: 62.5rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    

    display: grid;
    grid-template-columns: repeat(6, 15.625rem);
    grid-template-rows: repeat(2, auto);
    grid-auto-flow: column;
    gap: 1rem;
    overflow-x: scroll;
    overflow-y: hidden;
    
    ::-webkit-scrollbar {
        height: .8rem;
        background: transparent;
    }

    ::-webkit-scrollbar-track {
    background-color: transparent;
    border: solid 3px transparent;
    }


    ::-webkit-scrollbar-thumb {
    background: #AAAAAA;
    border-radius: 1rem;
    border: solid 3px #FFFFFF;
    }

    @media (pointer:coarse)  {
     ::-webkit-scrollbar-thumb {
     background: transparent;
     border-radius: 1rem;
     }
     }

     @media (min-width: 1200px){
        grid-auto-flow: row;
        grid-template-columns: repeat(3, 15.625rem);
        overflow: visible;
        padding: 0px;

        margin: 0 auto ;
     }

`