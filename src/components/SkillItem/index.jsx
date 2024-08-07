import React from 'react';
import { Container } from './styles';

const SkillItem = ({iconName, languageName}) => {
  return (
    <Container>
        <div className='skill-item-content'>
          <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`} alt={`ícone da linguage ${languageName}`}/>
          <p>{languageName}</p>
        </div>
    </Container>
  );
};

export default SkillItem;