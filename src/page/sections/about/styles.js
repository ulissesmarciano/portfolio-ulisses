import styled from 'styled-components';

export const Container = styled.div`
    margin:18rem auto 4rem ; 

    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    @media(min-width: 768px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 62.5rem;
    }

    animation: fade 300ms 500ms forwards;
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

export const ResumeContainer = styled.div`
    margin-bottom: 4rem;

    @media(min-width: 768px){
        display: flex;
        flex: 1;
        flex-direction: column;
        max-width: 40rem;
        margin-right: 2rem;
    }
`

export const IllustrateImageContainer = styled.div`
    border-radius: 1rem;
    
    display: flex;
    justify-content: center;

    overflow: hidden;

    height: 25rem;
    width: 18rem;
    
    @media(min-width: 768px){
        margin-top: 2rem;
    }

`

export const IllustrateImage = styled.img`
    z-index: -1;
    height: 100%;
`