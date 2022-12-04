import React, { useState } from 'react'

import { FiMenu } from 'react-icons/fi'
import { ButtonContact } from '../../components/ButtonContact'
import { Sidebar } from '../../components/Sidebar'

import { Container, IconContainer, MenuItensContainer, TitleContainer, LinkItem  } from './styles'

const Header = ({id}) => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div>
      <Container>
          <TitleContainer>
            <h1>Ulisses Gonçalves</h1>
          </TitleContainer>
            <IconContainer onClick={showSidebar}>
              <FiMenu />
              {sidebar && <Sidebar active={setSidebar}/>}
            </IconContainer>
            <MenuItensContainer>
              <div>
                <LinkItem href={id="#Sobre"} >
                  Sobre
                </LinkItem>
              </div>
              <div>
                <LinkItem href={id="#Habilidades"}>
                  Habilidades
                </LinkItem>
              </div>
              <div>
                <LinkItem href={id="#Projetos"} >
                  Projetos
                </LinkItem>
              </div>
              <ButtonContact href={id="#Contato"} title="Contato"  />
            </MenuItensContainer>
      </Container>
    </div>
  )
}

export { Header }
