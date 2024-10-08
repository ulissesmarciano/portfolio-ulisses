import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from './styles';
import LinkItem from '../LinkItem';

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
                    name="WhatsApp"
                    variant="greetingsContactLink"
                    href="https://api.whatsapp.com/send?phone=+5519999324023&text=Ol%C3%A1+Ulisses+quero+conversar+com+voc%C3%AA%21+%F0%9F%98%80"
                    target="_blank"
                />
            </div>
        </div>
    </Container>
  );
};

export default GreetingsSection;
