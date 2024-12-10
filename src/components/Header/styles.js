import styled from 'styled-components';

export const Container = styled.header`
    position: relative;
    
    margin: 0 auto;
    z-index: 1000;
    max-width: 64rem;
    
    .header-container {
        padding: 1.9rem 1rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header-container .logo {
        z-index: 1000;
        position: relative;
        flex: 1;

        font-size: 1.4rem;

    }

    .header-container nav {
        position: relative;
        z-index: 100;
        flex: 0;
    }

    .header-container nav ul {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        right: -100%;
        height: 100%;
        width: 100%;
        background-color: ${({ theme }) => theme.background};
        transition: right 0.3s ease-in-out;
        text-align: center;
    }

    .header-container nav ul li {

        width: 100%;
    }

    .header-container nav ul li:last-child {

        position: relative;
    }

    input:checked ~ ul {
        right: 0;
    }

    .header-container .menu {
        display: block;
        width: 50px;
        height: 50px;
        align-self: end;
        cursor: pointer;
        z-index: 100;
    }

    .header-container nav label {
        display: flex;
        flex-direction: column;
    }

    .hamburguer {
        background-color: ${({ theme }) => theme.hamburguerBgColor};
        position: relative;
        display: block;
        width: 30px;
        height: 2px;
        top: 25px;
        left: 15px;
        transition: 0.5s ease-in-out;

        &::before,
        &::after {
        background-color: ${({ theme }) => theme.hamburguerBgColor};
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.2s ease-in-out;
        }

        &::before {
        top: -10px;
        }

        &::after {
        bottom: -10px;
        }
    }

    input {
        display: none;
    }

    input:checked ~ label .hamburguer {
        transform: rotate(45deg);

        &::before {
        transform: rotate(90deg);
        top: 0;
        }

        &::after {
        transform: rotate(90deg);
        bottom: 0;
        }
    }
  @media (min-width: 375px){
        .header-container{
            padding: 1.2rem 1rem;
        }
    }

  @media (min-width: 768px) {
    .header-container {
        max-width: 1440px;
        margin: 0 auto;
    }

    .header-container nav {
        flex: 1.6;
    }


    .header-container nav ul {
      position: static;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      gap: 0;
      height: auto;
      width: auto;
      background-color: transparent;

    }

    .header-container .menu {
        display: none;
    }
  }

  @media (min-width: 1024px) {
    .header-container nav {
        flex: 1;
    }
  }
`;