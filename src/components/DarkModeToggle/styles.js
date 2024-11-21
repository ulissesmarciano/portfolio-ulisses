import styled from "styled-components";

export const Container = styled.div`
    position: absolute;

    bottom: -5rem;
    left: 50%;
    transform: translateX(-50%);

    .toggle + label {
        width:44px;
        height: 26px;
        border: 1px solid #000;

        background-color: #c9c9c9;
        
        display: block;
        position: relative;
        border-radius: 20px;
        padding: 2px;
        transition: 0.3s;

        cursor: pointer;
    }

    .toggle + label:before{
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: white;
        display: block;
        border-radius: 50%;
        right: unset;
        left: 2px;
        top: 2px;
        transition: 0.3s;
    }

    .toggle:checked + label {
        background: #383838;
    }

    .toggle:checked + label:before {
        content: '';
        left: calc(100% - 22px);
        box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
    }

    @media(min-width:768px){
        bottom: -4rem;
        right: 0;
        transform: translateX(0);
    }
`