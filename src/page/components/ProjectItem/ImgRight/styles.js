import styled from 'styled-components';


export const ItemContainer = styled.div`
    margin-right: 4rem;
    margin-bottom: 4rem;
    padding: 3rem 0;
    max-width: 22rem;
    
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    @media (min-width: 1200px){
        width: 100%;
        max-width: 62.5rem;
        margin: 0;
        
        flex-direction: row;
        justify-content: space-between;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    max-width: 22rem;
    height: 15rem;
    margin-bottom: 3rem;

    border-radius: 1rem;
    box-shadow: rgb(0 0 0 / 16%) 0px 0px 2.5rem;


    overflow: hidden;

    img {
        z-index: -1;
        height: 15rem;
    }
    
    
    transition: 500ms;

    &:hover{
        transition: all 0.2s;
        cursor: pointer;



        -webkit-transform: translateY(-2%);
        transform: translateY(-2%);
        box-shadow: rgb(0 0 0 / 30%) 0px 0px 2.5rem;
    }

    @media (min-width: 1200px){
        width: 100%;
        max-width: 25rem;
        height: 18rem;


        align-items: center;
        justify-content: center;

        img {
            width: auto;
            height: auto;
        }
    }
`

export const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    

    h4{
        font-size: 1.5rem;
        margin-bottom: 2rem;
        margin-top: -.5rem;
        
        
    }

    @media (min-width: 1200px){
        max-width: 25rem;
    }
`

export const QualityContainer = styled.div`
    margin-top: 2rem;

    display: flex;
    flex-direction: row;

    p {
        font-size: 1rem;
        line-height: 1.5rem;

        margin-right: 1rem;
        margin-bottom: 1.7rem;

        position: relative;

        box-shadow: #05a1ad 0px -0.2rem 0px inset;
        transition: box-shadow 0.3s ease-out;

        &:hover{
        position: relative;

        box-shadow: #05a1ad 0px -1.5rem 0px inset;
        transition: box-shadow 0.3s ease-out
        }
    }

`

export const Paragraph = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
`

export const ShareIcon = styled.a`

    font-size:1.5rem;
    
    text-decoration: none;
    cursor: pointer;
`
