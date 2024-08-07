import React from 'react'
import { Container } from './styles'
import Header from '../components/Header'
import AboutMeSection from '../components/AboutMeSection'
import GreetingsSection from '../components/GreetingSection'
import SkillsSection from '../components/SkillsSection'

const PortfolioSection = () => {
  return (
    <Container>
      <Header />
      <main className='content-section'>
        <GreetingsSection />
        <AboutMeSection />
        <SkillsSection />
      </main>
    </Container>
  )
}

export default PortfolioSection