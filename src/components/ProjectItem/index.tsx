import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from './styles';

import ShareIcon from "../../assets/icons/share-icon.png";

const ProjectItem = ({ variant = "primary", hrefProjectName, projecTitle, projectType, projectDescription, projectLanguage, projectImage }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Container
            variant={variant}
            ref={ref}
            className={inView ? 'is-visible' : ''}
        >
            <div className='info-content'>
                <h4 className='title'>{projecTitle}</h4>
                <p>{projectType}</p>

                <p>{projectDescription}</p>

                <ul className='language-container'>
                    {projectLanguage && projectLanguage.map((language, index) => (
                        <li key={index} className='language-type'>{language}</li>
                    ))}
                </ul>
                <a href={`https://github.com/ulissesmarciano/${hrefProjectName}`} target='blank'><img src={ShareIcon} alt='Ícone de redirecionamento' /></a>
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