import React from 'react';
import { CloseSidebarIcon, Container } from './styles';
import LinkItem from '../LinkItem';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  return (
    <Container>
      <h1 className='portfolio-title'>Ulisses Marciano</h1>
      <nav className='navigation-bar'>
        <ul>
          <li>
            <LinkItem
              name="Sobre"
            />
          </li>
          <li>
            <LinkItem
              name="Habilidades"
            />
          </li>
          <li>
            <LinkItem
              name="Projetos"
            />
          </li>
          <li>
            <LinkItem
              name="Contato"
              variant="headerSecondaryLink"
            />
          </li>
        </ul>
      </nav>
      <CloseSidebarIcon>
        <FiMenu />
      </CloseSidebarIcon>
    </Container>
  )
}

export default Header;