import React from 'react'

import { FiX } from 'react-icons/fi';
import { ButtonContact } from '../ButtonContact'

import {ButtonCloseContainer, Container, Content} from './styles'

const Sidebar = ({active}) => {
    const closeSidebar = () => {
        active(false)
    }
  return (
    <Container sidebar={active}>
      <ButtonCloseContainer>
        <FiX onClick={closeSidebar} />  
      </ButtonCloseContainer>
      <Content>
          <a href="#Sobre" onClick={closeSidebar}><h3>Sobre</h3></a>
          <a href="#Habilidades" onClick={closeSidebar}><h3>Habilidades</h3></a>
          <a href="#Projetos" onClick={closeSidebar}><h3>Projetos</h3></a>
        <ButtonContact variant='secondary' title="Contato" onClick={closeSidebar}/>
      </Content>
    </Container>
  )
}


export  { Sidebar }