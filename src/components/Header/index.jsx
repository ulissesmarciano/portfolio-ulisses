import React from 'react';
import { Container } from './styles';
import LinkItem from '../LinkItem';

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
            />
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Header;