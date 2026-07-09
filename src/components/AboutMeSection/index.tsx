import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from './styles';

const AboutMeSection = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container
      id='sobre'
      ref={ref}
      className={inView ? 'is-visible' : ''}
    >
      <h3>Sobre</h3>
      <div className='content-section'>
        <div className='text-section'>
          <div className='text-and-image-section'>
            <div>
              <p>Como desenvolvedor Web iniciando a jornada Dev e com certificações em linguagens de programação, marcação e estilização, busco o melhor aprendizado e integração com a equipe, visando melhor performance e entrega de trabalho.</p>
            </div>
            <div className='ilustrated-image-section-in-text'>
              <img src="https://i.pinimg.com/564x/f6/69/55/f66955a5e728c1420c3f7578a5659002.jpg" alt="ilustração para o texto" />
            </div>
          </div>
          <p>Originalmente de Araçatuba/SP, passei a última década em Campinas/SP trabalhando na área de Educação Física e descobri, através da criação do próprio site de e-commerce, a habilidade e a expertise em desenvolvimento web. Logo em seguida, busquei conhecimento na área.</p>
          <p>Arte, Saúde, e-commerce, são temas que podemos discutir por horas. Sou sempre adepto de aprender coisas novas.🚀🎷🌎
          </p>
        </div>
        <div className='ilustrated-image-section'>
          <img className='picture' src="https://i.pinimg.com/564x/f6/69/55/f66955a5e728c1420c3f7578a5659002.jpg" alt="Ilustração para o texto" />
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
