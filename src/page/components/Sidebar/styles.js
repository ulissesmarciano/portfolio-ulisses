import styled from 'styled-components';

export const Container = styled.div`
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

  
`;

export const ButtonCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  max-width: 66.5rem;
  padding: 0 2.3rem;
  width: 100%;
  margin: auto;

  


  svg {
    color: #000000;
    width: 2.7rem;
    height: 2.7rem;
    cursor: pointer;
    margin-top: 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

