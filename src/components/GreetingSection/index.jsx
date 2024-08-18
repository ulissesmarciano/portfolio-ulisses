import React from 'react';
import { Container } from './styles';
import LinkItem from '../LinkItem';

const GreetingsSection = () => {
  return (
    <Container>
        <h3 className='hello-section'>Olá, me chamo Ulisses <span className='waving-hand'>&#128075;</span></h3>
        <p className='summary-sentence'>Sou um <span>desenvolvedor full-stack</span>, com treinamento certificado e também <span>desenvolvo aplicativos Android</span>.</p>
        <div className='contact-screen'>
            <p>Conheça um pouco do meu trabalho e fique à vontade para entrar em contato.</p>
            <div className='contact-link-screen'> 
                <LinkItem 
                    name="LinkedIn"
                    variant="greetingsContactLink"
                    href="https://www.linkedin.com/in/ulissesmarciano/"
                    target="_blank"
                    />
                <LinkItem 
                    name="Github"
                    variant="greetingsContactLink"
                    href="https://github.com/ulissesmarciano"
                    target="_blank"
                    />
                <LinkItem 
                    name="Dribbble"
                    variant="greetingsContactLink"
                    href="https://dribbble.com/ulissesmarciano"
                    target="_blank"
                />
            </div>
        </div>
    </Container>
  );
};

export default GreetingsSection;
