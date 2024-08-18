import React, { useState } from 'react';
import { SidebarIcon, Container } from './styles';
import LinkItem from '../LinkItem';
import { FiMenu } from 'react-icons/fi';

const Header = ({id}) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(true);
  return (
    <Container>
      <h1 className='portfolio-title'>Ulisses Marciano</h1>
      <nav className='navigation-bar'>
        <ul>
          <li>
            <LinkItem
              name="Sobre"
              href={id="#sobre"}
            />
          </li>
          <li>
            <LinkItem
              name="Habilidades"
              href={id="#habilidades"}
            />
          </li>
          <li>
            <LinkItem
              name="Projetos"
              href={id="#projetos"}
            />
          </li>
          <li>
            <LinkItem
              name="Contato"
              href={id="#contato"}
              variant="headerSecondaryLink"
            />
          </li>
        </ul>
      </nav>
      <SidebarIcon onClick={showSidebar}>
        <FiMenu />
        {sidebar && <>teste</>}
      </SidebarIcon>
    </Container>
  )
}

export default Header;