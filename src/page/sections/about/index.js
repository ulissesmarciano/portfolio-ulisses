import React from 'react'
import { Container, IllustrateImage, IllustrateImageContainer, ResumeContainer } from './styles'


const About = () => {
  return (
    <Container>
        <ResumeContainer>
            <h3 id='Sobre'>Sobre</h3>
            <p>Em processo de aprendizado, cursando Análise e Desenvolvimento de Sistemas já mostro experiência em design com visuais atraentes.</p>
            <p>Como desenvolvedor Web iniciando a jornada Dev e com certificações em linguagens de programação, marcação e estilização busco o melhor aprendizado e integração com equipe visando melhor performance e entrega de trabalho.</p>
            <p>Originalmente de Araçatuba/SP, passei a ultima década em Campinas/SP trabalhando na área de Educação Física e descobri através da criação do própio site de e-commerce a habilidade e a expertise em desenvolvimento web. Logo em seguida busquei conhecimento na área.</p>
            <p>Arte, Saúde, e-commerce, são coisas que podemos ganhar tempo conversando. Mas sou sempre adebto de aprender coisas novas. 🚀🎷🌎</p>
        </ResumeContainer>
        <IllustrateImageContainer>
            <IllustrateImage src='https://i.pinimg.com/564x/f6/69/55/f66955a5e728c1420c3f7578a5659002.jpg' alt='Ilustração para o texto.'/>
        </IllustrateImageContainer>
    </Container>
  )
}

export { About }
