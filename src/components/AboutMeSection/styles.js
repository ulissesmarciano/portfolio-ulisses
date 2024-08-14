import styled from "styled-components";

export const Container = styled.section`
    margin: 0 auto;
    height: 100vh;
    h3 {
        font-size: 1.75rem;
        margin-bottom: 3rem;
    }

    .content-section {
        display: flex;
        gap: .4rem;
        justify-content: space-between;
        align-items: center;
    }  

    .content-section .text-section {
        max-width: 40rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: .8rem;
        
        font-size: 1.2rem;
        line-height: 1.8rem;
        text-align: justify;
    }

    .content-section .ilustrated-image-section {
        border-radius: 1rem;
        width: 100%;
    
        display: flex;
        justify-content: center;

        overflow: hidden;

        height: 25rem;
        width: 18rem;
    }

    .content-section .ilustrated-image-section img {
        z-index: -1;
        height: 100%;
    }

    .content-section .text-section .text-and-image-section {
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .content-section .text-section .text-and-image-section p {
        max-width: 100%;
    }

    .content-section .text-section .text-and-image-section .ilustrated-image-section-in-text {
        display: none;

    }

    .content-section .text-section .text-and-image-section .ilustrated-image-section-in-text img {
        display: none;
    }

    

    @media(max-width: 1024px) {
        .content-section .text-section {
            max-width: 100%;
        }

        .content-section .text-section .text-and-image-section p {
            max-width: 100%;
        }
    }
    
    @media(max-width: 768px){
        .content-section .text-section {
            width: 100%;
        }
        
        .content-section .text-section .text-and-image-section p {
            max-width: 18rem;
        }

        .content-section .ilustrated-image-section {
            display: none;
        }

        .content-section .text-section .text-and-image-section .ilustrated-image-section-in-text {
            border-radius: 1rem;
            height: 14rem;
            width: 10rem;
                
            display: flex;
            justify-content: center;
            
            overflow: hidden;

        }

        .content-section .text-section .text-and-image-section .ilustrated-image-section-in-text img {
            display: block;
            z-index: -1;
            height: 100%;
        }
    }

    /* VERIFICAR SE HÁ CÓDIGO A MAIS DENTRO DOS BREAKPOINTS */

    @media(max-width: 546px){
        .content-section .text-section .text-and-image-section p {
            max-width: 100%;
        }

        .content-section .text-section .text-and-image-section {
            align-items: flex-start;
        }

        .content-section .text-section .text-and-image-section .ilustrated-image-section-in-text {
            display: none;
        }
    }

    @media(max-width:425px){

        
        .content-section .text-section .text-and-image-section .ilustrated-image-section-in-text {
            display: none;
        }
    }
    `