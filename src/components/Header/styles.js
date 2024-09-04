import styled from 'styled-components';

export const Container = styled.header`
    position: relative;
    
    margin: 0 auto;
    padding: 1.9rem 0;
    z-index: 1000;
    max-width: 64rem;

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .header-container .logo {
        z-index: 1000;
        position: relative;
        flex: 1;

    }

    .header-container nav {
        position: relative;
        z-index: 100;
        flex: 1;
    }

    .header-container nav ul {
        display: flex;
        justify-content: space-between;
    }

    .header-container .menu {
        display: none;
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
        background-color: #000;
        position: relative;
        display: block;
        width: 30px;
        height: 2px;
        top: 25px;
        left: 15px;
        transition: 0.5s ease-in-out;

        &::before,
        &::after {
        background-color: #000;
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
  @media (max-width: 1200px){
        .header-container{
            padding: 1.9rem 2rem;
        }
    }

  @media (max-width: 768px) {
    .header-container {
        padding: 1.2rem 2rem;
    }

    .header-container .menu {
      display: block;
    }

    .header-container nav {
        flex: 0;
    }


    .header-container nav ul {
      position: fixed;
      top: 0;
      right: -100%;
      height: 100%;
      width: 100%;
      background-color: #fff;
      flex-direction: column;
      gap: 3rem;
      align-items: center;
      justify-content: center;
      transition: right 0.3s ease-in-out;
    }

    input:checked ~ ul {
      right: 0;
    }

    .header-container nav ul a {
      text-align: center;
      padding: 20px;
      display: block;
    }
  }

  @media (max-width: 450px){
    .header-container .logo {
        font-size: 1.8rem;
    }
  }


  @media (max-width: 375px){
      .header-container {
          padding: 0 1rem;
      }
      .header-container .logo {
          font-size: 1.4rem;
      }
}

`;