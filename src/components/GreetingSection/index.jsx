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
      <h3 className='hello-section'>Olá, me chamo Ulisses <span className='waving-hand'>&#128075;</span></h3>
      <p className='summary-sentence'>Sou um <span>desenvolvedor full-stack</span>, com treinamento certificado e também <span>desenvolvo aplicativos Android</span>.</p>
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
