import React from 'react';
import { Container } from './styles';

import ShareIcon from "../../assets/icons/share-icon.png";

const ProjectItem = ({ variant="primary", hrefProjectName, projecTitle, projectType, projectDescription, projectLanguage, projectImage }) => {
  return (
    <Container variant={variant}>
        <div className='info-content'>
            <h4 className='title'>{projecTitle}</h4>
            <p>{projectType}</p>

            <p>{projectDescription}</p>

            <ul className='language-container'>
                {projectLanguage && projectLanguage.map((language, index) => (
                    <li key={index} className='language-type'>{language}</li>
                ))}
            </ul>
            <a href={`https://github.com/ulissesmarciano/${hrefProjectName}`} target='blank'><img src={ShareIcon} alt='Ícone de redirecionamento'/></a>
        </div>
        <div className='image-container'>
            <picture>
                <img src={projectImage} alt="foto do projeto" />
            </picture>
        </div>
    </Container>
  );
};

export default ProjectItem;