import React from 'react'
import { Container } from './styles'
import Header from '../components/Header'
import AboutMeSection from '../components/AboutMeSection'
import GreetingsSection from '../components/GreetingSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

const PortfolioSection = () => {
  return (
    <Container>
      <Header />
      <main className='main-body'>
        <GreetingsSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </Container>
  )
}

export default PortfolioSection