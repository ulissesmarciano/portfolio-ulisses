import React from 'react';
import { Container } from './styles';
import ProjectItem from '../ProjectItem';

const ProjectsSection = () => {
  return (
    <Container>
        <h3>Projetos</h3>
        <div>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
        </div>
    </Container>

  );
};

export default ProjectsSection;