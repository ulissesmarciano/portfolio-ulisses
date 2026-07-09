import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from './styled';
import SkillItem from '../SkillItem';

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container 
      id='habilidades'
      ref={ref}
      className={inView ? 'is-visible' : ''}
    >
      <h3>Habilidades</h3>
      <div className='skill-content'>
        <SkillItem 
          iconName="javascript"
          languageName="JavaScript"
        />
        {/* <SkillItem 
          iconName="typescript"
          languageName="Typescript"
        /> */}
        {/* <SkillItem 
          iconName="csharp"
          languageName="CSharp"
        /> */}
        <SkillItem 
          iconName="react"
          languageName="React.js"
        />
        {/* <SkillItem 
          iconName="angular"
          languageName="Angular.js"
        /> */}
        <SkillItem 
          iconName="android"
          languageName="Android Dev"
        />
        {/* <SkillItem 
          iconName="dot-net"
          languageName=".Net"
        /> */}
        <SkillItem 
          iconName="html5"
          languageName="HTML5"
        />
        <SkillItem 
          iconName="css3"
          languageName="CSS3"
        />
        <SkillItem 
          iconName="git"
          languageName="GIT"
        />
        <SkillItem 
          iconName="nodejs"
          languageName="Node.js"
        />
      </div>
    </Container>
  );
};

export default SkillsSection;