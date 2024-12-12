import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from './styles';

import LinkItem from '../LinkItem';
import { ContactHrefs } from '../../constants/ContactHrefs';

import AvatarUlisses from '../../assets/avatar/avatar-ulisses.jpg';
import LongDashBorder from '../../assets/svg/long-dash-circle.svg';
import SolidBorder from '../../assets/svg/circle.svg'
import AbstractDashBorder from '../../assets/svg/absctract-circle.svg';


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
        <div className="presentation-container">
          <p className='summary-sentence'>Sou um <span>desenvolvedor font-end</span>, com treinamento certificado e também <span>desenvolvo aplicativos Android</span>.</p>
        </div>
        <div className="avatar-container">
          <img className='abstract-dash-border' src={AbstractDashBorder} alt='' />
          <img className='solid-border' src={SolidBorder} alt='' />
          <img className='long-dash-border' src={LongDashBorder} alt='' />
          <img className='user-image' src={AvatarUlisses} alt='Avatar do Ulisses' />
        </div>
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
