import React from 'react'

import { ButtonContainer, Container, HelloContainer, Paragraph, ResumeTextContainer, WavingHand, Wrapper } from './styles'

import { Button } from '../../components/Button'

import Hand from '../../../assets/waving-hand.png'


const Greetings = () => {
  return (
    <Wrapper>
      <Container>
          <HelloContainer>
              <h2>Olá, me chamo Ulisses</h2>
              <WavingHand src={Hand} alt="mão acenando"/>
          </HelloContainer>
          <ResumeTextContainer>
              <Paragraph><strong>Sou um <span>desenvolvedor front-end</span>, tenho treinamento certificado em <span>back-end</span> e também <span>crio android apps</span></strong>.</Paragraph>
              <p>Conheça um pouco do meu trabalho e fique à vontade para entrar em contato.</p>
          </ResumeTextContainer>
          <ButtonContainer>
              <Button title="LinkedIn" href="https://www.linkedin.com/in/ulissesmarciano/"/>
              <Button title="Github" href="https://github.com/ulissesmarciano"/>
              <Button title="Dribbble" href="https://dribbble.com/ulissesmarciano" />
          </ButtonContainer>
      </Container>
    </Wrapper>
  )
}

export {Greetings}
