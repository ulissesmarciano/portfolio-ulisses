import React from 'react';
import { Container } from './styles';

import { FiX } from 'react-icons/fi';
import LinkItem from '../LinkItem';


const Sidebar = ({active}) => {
  const closeSidebar = () => active(false);
  return (
    <Container sidebar={active}>
      <div className='close-sidebar-container'>
        <button onClick={closeSidebar}>
          <FiX />
        </button>
      </div>
      <header>
        <ul  className='anchor-section'>
          <li>
            <LinkItem 
              name="Sobre"
              variant="sidebarLink"
              href="#sobre"
            />
          </li>
          <li>
            <LinkItem 
              name="Sobre"
              variant="sidebarLink"
              href="#sobre"
            />
          </li>
          <li>
            <LinkItem 
              name="Sobre"
              variant="sidebarLink"
              href="#sobre"
            />
          </li>
          <li>
            <LinkItem 
              name="Sobre"
              variant="sidebarButton"
              href="#sobre"
            />
          </li>
        </ul>
      </header>
    </Container>
  );
};

export default Sidebar;