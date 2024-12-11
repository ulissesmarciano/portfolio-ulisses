import React from 'react';
import { Container } from './styles';
import Header from '../components/Header';
import AboutMeSection from '../components/AboutMeSection';
import GreetingsSection from '../components/GreetingSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const PortfolioSection = ({ toggleTheme, isSun }) => {
  return (
    <Container>
      <Header toggleTheme={toggleTheme} isSun={isSun} />
      <main className='main-body'>
        <GreetingsSection />
        <AboutMeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </Container>
  );
};

export default PortfolioSection;