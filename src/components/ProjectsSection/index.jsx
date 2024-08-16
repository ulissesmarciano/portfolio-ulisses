import React from 'react';
import { Container } from './styles';
import ProjectItem from '../ProjectItem';

const ProjectsSection = () => {
  return (
    <Container id='projetos'>
        <h3>Projetos</h3>
        <div className='project-section'>
            <ProjectItem />
            <ProjectItem variant='secondary' />
            <ProjectItem />
            <ProjectItem variant='secondary' />
        </div>
    </Container>

  );
};

export default ProjectsSection;