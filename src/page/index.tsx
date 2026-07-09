import React from "react";
import { Container } from "./styles";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
import {
  AboutMeSection,
  ContactSection,
  GreetingsSection,
  Header,
  ProjectsSection,
} from "../components";

interface PortfolioSectionProps {
  toggleTheme: () => void;
  isSun: boolean;
}

const PortfolioSection = ({ toggleTheme, isSun }: PortfolioSectionProps) => {
  return (
    <Container>
      <Header toggleTheme={toggleTheme} isSun={isSun} />
      <main className="main-body">
        <GreetingsSection />
        <AboutMeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer id="footer" />
    </Container>
  );
};

export default PortfolioSection;
