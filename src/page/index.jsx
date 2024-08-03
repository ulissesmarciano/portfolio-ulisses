import React from 'react'
import { Container } from './styles'
import Header from '../components/Header'
import LinkItem from '../components/LinkItem'

const PortfolioSection = () => {
  return (
    <Container>
      <Header />
      <main className='content-section'>
        <section className='greeting-screen'>
          <h3>Olá, me chamo Ulisses <span className='waving-hand'>&#128075;</span></h3>
          <p className='summary-sentence'>Sou um <span>desenvolvedor full-stack</span>, com treinamento certificado e também <span>desenvolvo aplicativos Android</span>.</p>
          <div className='contact-section'>
            <p>Conheça um pouco do meu trabalho e fique à vontade para entrar em contato.</p>
            <div className='contact-link-section'> 
              <LinkItem 
                name="LinkedIn"
                variant="greetingsContactLink"
              />
              <LinkItem 
                name="Github"
                variant="greetingsContactLink"
              />
              <LinkItem 
                name="Dribbble"
                variant="greetingsContactLink"
              />
            </div>
          </div>
        </section>
      </main>
    </Container>
  )
}

export default PortfolioSection