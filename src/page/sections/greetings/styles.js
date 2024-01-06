import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    animation: fade 300ms 400ms forwards;
    opacity: 0;

    @keyframes fade {
        from {
            transform: translateY(5%);
        }

        to {
            opacity: 1;
        }

    }
`

export const Container = styled.div`
    max-width: 62.5rem;

    display: flex;
    flex: 1;
    flex-direction: column;

    margin:4rem  auto;

    

`

export const HelloContainer = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 2.2rem;

    h2 {
        font-size: 2rem;
    }

    @media (min-width: 768px) {
        h2 {
            font-size: 2.625rem;
        }
    }
    
`

export const WavingHand = styled.img`
    height: 2rem;
    width: 2rem;
    
    margin-left: 1rem;
    margin-bottom: 1.25rem;

    animation: wave 250ms 1s alternate-reverse 6,
    secondwave 250ms 5s alternate-reverse 6, 
    tirthwave 250ms 10s alternate-reverse 6;



    @keyframes wave {
        to {
        transform: rotate(20deg);
        }
    }

    @keyframes secondwave {
        to {
            transform: rotate(20deg);
        }
    }

    @keyframes tirthwave {
        to {
            transform: rotate(20deg);
        }
    }

`

export const ResumeTextContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        tab-size: 4;
        font-weight: 700;
        line-height: 1.5rem;
        box-shadow: #05a1ad 0px -2rem 0px inset;
    }
`

export const Paragraph = styled.div`


    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 2rem;
    line-height: 1.5rem;

    @media ( min-width: 768px) {
        font-size: 2rem;
        line-height: 3rem;
        margin-bottom: 3rem;   
    }
    
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`