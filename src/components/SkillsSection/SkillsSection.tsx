import React from "react";
import { useInView } from "react-intersection-observer";
import { Container } from "./styled";
import { SkillItem } from "../SkillItem";

export const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container
      id="habilidades"
      ref={ref}
      className={inView ? "is-visible" : ""}
    >
      <h3>Habilidades</h3>
      <div className="skill-content">
        <SkillItem iconName="javascript" languageName="JavaScript" />
        <SkillItem iconName="typescript" languageName="Typescript" />
        <SkillItem iconName="java" languageName="Java" />
        <SkillItem iconName="kotlin" languageName="Kotlin" />
        <SkillItem iconName="react" languageName="React.js" />
        <SkillItem iconName="nextjs" languageName="Next.js" />
        <SkillItem iconName="spring" languageName="Spring Boot" />
        <SkillItem iconName="android" languageName="Android Dev" />
        <SkillItem iconName="html5" languageName="HTML5" />
        <SkillItem iconName="css3" languageName="CSS3" />
        <SkillItem iconName="git" languageName="GIT" />
      </div>
    </Container>
  );
};
