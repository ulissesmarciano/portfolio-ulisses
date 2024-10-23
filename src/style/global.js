import { createGlobalStyle } from 'styled-components';


export const Globalstyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto;
        list-style: none;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: #000;
    }
`

export const GlobalStyles = styled.createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
`;

export const ToggleButton = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  margin: 20px;
  outline: none;
  position: relative;
  width: 50px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: ${({ theme }) => (theme.body === '#FFF' ? 'flex-start' : 'flex-end')};

  &:after {
    content: '';
    width: 18px;
    height: 18px;
    background: ${({ theme }) => theme.text};
    border-radius: 50%;
    transition: 0.25s ease;
    display: block;
  }
`;