import styled from "styled-components";

export const Container = styled.section`
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    h3 {
        font-size: 1.75rem;
    }

    .contact-invite {
        font-size: 1.12rem;
    }

    .image-email-container {
        display: flex;
        align-items: center;
        gap: 4rem;

        flex-wrap: wrap;
    }

    .image-email-container .user-image {
        height: 10rem;
        width: 10rem;

        border-radius: 100px;
    }

    .image-email-container .name-email-section h1 {
        font-size: 1.2rem;
    }

    .image-email-container .name-email-section p {
        font-size: 1.12rem;

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

    .contact-buttons-container {
        display: flex;
        gap: 1.5rem;

        flex-wrap: wrap;
    }    

    @media(max-width: 370px) {
        .contact-buttons-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: .4rem;
        }
    }
`