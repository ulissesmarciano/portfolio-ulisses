import styled from "styled-components";

export const Container = styled.div`
    padding: 3rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

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
    }
`