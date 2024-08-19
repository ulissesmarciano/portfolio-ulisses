import React from 'react'
import { Container } from './styles'
import Header from '../components/Header'
import AboutMeSection from '../components/AboutMeSection'
import GreetingsSection from '../components/GreetingSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const PortfolioSection = () => {
  return (
    <Container>
      <Header />
      <main className='main-body'>
        <GreetingsSection />
        <AboutMeSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </Container>
  )
}

export default PortfolioSection