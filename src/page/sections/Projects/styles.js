import styled from 'styled-components';

export const Container = styled.div`
    margin: 8rem 0;

    display: flex;
    flex-direction: column;
`

export const TitleContainer = styled.div`

    max-width: 62.5rem;
    width: 100%;
    margin: auto;
`


export const SkillContainer = styled.div`
    margin-left: -2rem;
    padding-left: 2rem;
    
    display: flex;
    flex-direction: row;
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
    margin: 0 0 0 -2rem;

    flex-direction: column;
    align-items: center;

    overflow-x: hidden;
    overflow-y: hidden;

}
`