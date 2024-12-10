import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from './styles';

import LinkItem from '../LinkItem';
import { ContactHrefs } from '../../constants/ContactHrefs';


const GreetingsSection = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container
      ref={ref}
      className={inView ? 'is-visible' : ''}
    >
      <h4 className='hello-section'>Olá, me chamo Ulisses <span className='waving-hand'>&#128075;</span></h4>
      <div className="summary-container">
        <p className='summary-sentence'>Sou um <span>desenvolvedor full-stack</span>, com treinamento certificado e também <span>desenvolvo aplicativos Android</span>.</p>
        <img className='user-image' src='https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4' alt='Avatar do Ulisses' />
      </div>
      <div className='contact-screen'>
        <p>Conheça um pouco do meu trabalho e fique à vontade para entrar em contato.</p>
        <div className='contact-link-screen'>
          <LinkItem
            name="LinkedIn"
            variant="greetingsContactLink"
            href={ContactHrefs.linkedIn}
            target="_blank"
          />
          <LinkItem
            name="Github"
            variant="greetingsContactLink"
            href={ContactHrefs.github}
            target="_blank"
          />
          <LinkItem
            name="WhatsApp"
            variant="greetingsContactLink"
            href={ContactHrefs.whatsapp}
            target="_blank"
          />
        </div>
      </div>
    </Container>
  );
};

export default GreetingsSection;
