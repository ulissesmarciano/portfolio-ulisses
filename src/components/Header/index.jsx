import React, { useState } from 'react';
import { Container } from './styles';
import LinkItem from '../LinkItem';
import useWindowSize from '../../hooks/useWindowSize';
import SunMoonToggle from '../SunMoonToggle';

const Header = ({ id, toggleTheme, isSun }) => {
  const [sidebar, setSidebar] = useState(false);
  const { width } = useWindowSize();
  const showSidebar = () => setSidebar(!sidebar);

  const handleLinkClick = () => {
    setSidebar(false);
  };

  const getLinkVariant = (defaultVariant) => {
    if (width >= 768) {
      return defaultVariant === 'sidebarLink' ? 'headerPrimaryLink' : defaultVariant;
    }
    return defaultVariant;
  };

  return (
    <Container id='header'>
      <div className="header-container">
        <h1 className='logo'>Ulisses Marciano</h1>
        <nav>
          <input
            type="checkbox"
            id="menu-hamburguer"
            checked={sidebar}
            onChange={showSidebar}
          />

          <label htmlFor="menu-hamburguer">
            <div className="menu">
              <span className="hamburguer"></span>
            </div>
          </label>

          <ul className={sidebar ? 'active' : ''}>
            <li>
              <LinkItem
                name="Sobre"
                href={id = "#sobre"}
                variant={getLinkVariant('sidebarLink')}
                onClick={handleLinkClick}
              />
            </li>
            <li>
              <LinkItem
                name="Projetos"
                href={id = "#projetos"}
                variant={getLinkVariant('sidebarLink')}
                onClick={handleLinkClick}
              />
            </li>
            <li>
              <LinkItem
                name="Habilidades"
                href={id = "#habilidades"}
                variant={getLinkVariant('sidebarLink')}
                onClick={handleLinkClick}
              />
            </li>
            <li>
              <LinkItem
                name="Contato"
                href={id = "#contato"}
                variant="headerSecondaryLink"
                onClick={handleLinkClick}
              />
              <SunMoonToggle
                toggleTheme={toggleTheme}
                isSun={isSun}
              />
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}

export default Header;
