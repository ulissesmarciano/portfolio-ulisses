import styled from 'styled-components';

export const ButtonContainer = styled.a`
    border-radius: 1rem;
    border: 0.125rem solid rgb(0, 0, 0);
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;

    margin: 0 1rem .5rem 0;
    
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;

    @media (min-width: 768px){
        margin-right: 1.5rem;
    }

    img{
        height: 1.2rem;
        margin-right: .5rem;
    }

    &:before{
        content: '';

        position: absolute;
        top: 0%;
        left: 0%;

        width: 0;
        height: 100%;

        background-color:  #05a1ad;

        z-index: -1;

        transition: 200ms ease;
    }

    &:hover{
        &:before{
            width: 100%;
        }

        color: #FFFFFF;
        img{
                filter: invert(100%);
        }
    }
    
`
export const ChildContainer = styled.div`
    margin: .3rem;
`