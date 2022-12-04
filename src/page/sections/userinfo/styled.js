import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: 62.5rem;
    margin: 0 auto 8rem;


   
`

export const AlignContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;

    p {
        font-size: 1.12rem;
        margin-bottom: 3rem;
    }

    h4 {
        font-size: 1.2rem;
    }
`

export const PhotoEmailContainer = styled.div`
    @media(min-width: 768px) {
        display: flex;
        align-items: center;
    }
`

export const Avatar = styled.img`
   height: 10rem;
   width: 10rem;
   margin: 0 4rem 2rem 0;

   border-radius: 100px;
`

export const EmailContact = styled.p`
    display: flex;
    width: fit-content;

    font-size: 1rem;
    line-height: 1.5rem;

    margin-bottom: 1.7rem;
    padding-bottom: .1rem;


    box-shadow: #05a1ad 0px -0.2rem 0px inset;
    transition: box-shadow 0.3s ease-out;

    &:hover{
    position: relative;

    box-shadow: #05a1ad 0px -1.6rem 0px inset;
    transition: box-shadow 0.3s ease-out
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`