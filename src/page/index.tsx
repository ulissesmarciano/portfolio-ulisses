import React from 'react';
import { Container } from './styles';
import Header from '../components/Header/Header';
import AboutMeSection from '../components/AboutMeSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer';
import { GreetingsSection } from '../components';

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