import styled from "styled-components";

export const Container = styled.section`
    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;


    position: fixed;
    top: 0;
    right: 0;

    height: 100%;
    width: 100%;

    z-index: 10;

    right: ${props => props.sidebar ? '0' : '100%'};
    animation: showSidebar .4s;




    @keyframes showSidebar {
        from{
            opacity: 0;
            width: 0;
        }
    
        to{
            opacity: 1;
            width: 100%;
        }
    }

    .close-sidebar-container {
        padding: 1.2rem 2rem;

        display: flex;
        justify-content: flex-end;

    }

    .close-sidebar-container button {

        background-color: transparent;
        border: none;
    }

    .anchor-section {
        padding-top: 8rem;
        height: 100vh;
    }

    .anchor-section li {
        margin-bottom: 3rem;
    }

    .anchor-section li:last-child{
        margin-top: 6rem;
    }

    @media(max-width: 320px){
        .close-sidebar-container {
            padding: 1.2rem 1rem;
        }
    }
`