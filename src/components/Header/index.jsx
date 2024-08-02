import React from 'react';
import { Container } from './styles';
import LinkItem from '../LinkItem';

const Header = () => {
  return (
    <Container>
      <nav>
        <h1>Ulisses Marciano</h1>
        <nav>
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
      </nav>
    </Container>
  )
}

export default Header;