import React from "react";
import { Container } from "./styles";

interface SkillItemProps {
  iconName: string;
  languageName: string;
}

export const SkillItem = ({ iconName, languageName }: SkillItemProps) => {
  return (
    <Container>
      <div className="skill-item-content">
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`}
          alt={`ícone da linguage ${languageName}`}
        />
        <p>{languageName}</p>
      </div>
    </Container>
  );
};
