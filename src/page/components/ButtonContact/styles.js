import styled, {css} from 'styled-components';

export const ButtonContainer = styled.a`
    border-radius: 1rem;
    border: 0.125rem solid rgb(0, 0, 0);
    padding: .8rem 1.5rem;
    font-size: 0.95rem;
    font-weight: 900;
    

    display: flex;
    align-items: center;

    

    img{
        height: 1.2rem;
        margin-right: .5rem;
    }

    

    
    ${({variant}) => variant !== "primary" && css`
    border-radius: 1rem;
    border: 0.125rem solid rgb(0, 0, 0);
    margin-top: 1rem;
    padding: 1rem 3.5rem;
    font-size: 1.5rem;
    font-weight: 900;
    background-color: #05a1ad;
    
    
    `} 

    &:hover{
        &:before{
            width: 100%;
        }
        background-color: #000000;
        color: #FFFFFF;
    }    
`
