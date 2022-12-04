import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;

    animation: fade 300ms 200ms forwards;
    opacity: 0;
    
    @keyframes fade {
        from {
            transform: translateY(-5%);
        }

        to {
            opacity: 1;
        }

    }    
`

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    margin:0 auto 8rem ;
    max-width: 62.5rem;

    


`

export const TitleContainer = styled.div`
    display: flex;
    flex: 1;
    z-index: 11;
`

export const IconContainer = styled.button`
    display: flex;
    align-items: center;

    border: 0;
    background-color: transparent;
    
    svg {
        cursor: pointer;
        height: 2.7rem;
        width: 2.7rem;
        @media (min-width: 1800px){

            display: none;
        } 
    }

`

export const MenuItensContainer = styled.div`
    display: none;
    @media (min-width: 1800px){
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;

        margin-right: -2rem;

        
    }
`

export const LinkItem = styled.a`

    padding: .5rem 0.2rem;
    font-size: 1rem;
    font-weight: 900;

    
    margin-right: 1rem;
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;

    @media (min-width: 768px){
        margin-right: 1.5rem;
    }


    &:before{
        content: '';

        position: absolute;
        top: 85%;
        left: 0%;

        width: 0;
        height: 60%;

        background-color:  #05a1ad;

        z-index: -1;

        transition: 200ms ease;
    }

    &:hover{
        &:before{
            width: 100%;
        }
    }
    
    
`







        