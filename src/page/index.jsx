import React from 'react'
import { Container } from './styles'
import Header from '../components/Header'
import { AboutMeSection } from '../components/AboutMeSection'
import { GreetingsSection } from '../components/GreetingSection'

const PortfolioSection = () => {
  return (
    <Container>
      <Header />
      <main className='content-section'>
        <GreetingsSection />
        <AboutMeSection />
      </main>
    </Container>
  )
}

export default PortfolioSection