import styled, {css, keyframes} from "styled-components";

const slideLeft = keyframes`
    from {
        transform: translateX(-40px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideRight = keyframes`
    from {
        transform: translateX(40px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(40px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
`;


export const Container = styled.div`
    opacity: 0;
    transform: translateX(40px);
    transition: all 2s ease-out;

    &.is-visible {
        animation: ${slideLeft} 2s forwards;
    }

    padding: 3rem 0;

    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    ${({variant}) => variant !== "primary" && css`
        flex-direction: row-reverse;

        opacity: 0;
        transform: translateX(40px);
        transition: all 2s ease-out;

        &.is-visible {
            animation: ${slideRight} 2s forwards;
        }
    `}

    .info-content {
        max-width: 25rem;

        display: flex;
        flex-direction: column;
    }

    .info-content .title {
        margin-bottom: 2rem;

        font-size: 1.5rem;
        text-transform: capitalize;
    }

    .info-content p {
        margin-bottom: 1rem;
    }

    .info-content .language-container {
        margin: 2rem 0;

        display: flex;
        gap: 1rem;
    }

    .info-content .language-container .language-type {
        padding-bottom: .3rem;

        position: relative;
        overflow: hidden;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: .3rem;
            background-color: #05a1ad;
            z-index: -1;
            transition: height 200ms ease;
        }

        &:hover {
            &:after {
                height: 100%;

            }
            color: #fff;
        }
    }

    .image-container {
        width: 100%;
        max-width: 25rem;
        height: 15rem;
        margin-bottom: 3rem;

        display: flex;
        justify-content: center;

        border-radius: 1rem;
        box-shadow: rgb(0 0 0 / 16%) 0px 0px 2.5rem;


        overflow: hidden;

        transition: 500ms;

        &:hover{
            transition: all 0.2s;

            -webkit-transform: translateY(-2%);
            transform: translateY(-2%);
            box-shadow: rgb(0 0 0 / 30%) 0px 0px 2.5rem;
        }
    }

    .image-container img {
        z-index: -1;
        height: 100%;
    }

    @media(max-width: 768px){
        flex-direction: column-reverse;

        transform: translateY(40px);
        transition: all 1s ease-out;
        &.is-visible {
            animation: ${slideUp} 1s forwards;
        }
        

        ${({variant}) => variant !== "primary" && css`
            &.is-visible {
                animation: ${slideUp} 2s forwards;
            }
        `}


    }
`