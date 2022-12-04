import React from 'react'

import Share from '../../../../assets/icons/share-icon.png'
import { ImageContainer, ItemContainer, Paragraph, ParagraphContainer, QualityContainer, ShareIcon } from './styles'

const ProjectItemRight = ({
  projectType, 
  project, 
  description, 
  href, 
  tec1, tec2, tec3,
  img, 
}) => {
  return (
    <ItemContainer>
        <ParagraphContainer>
            <Paragraph>{projectType}</Paragraph>
            <h4>{project}</h4>
            <Paragraph>{description}</Paragraph>
            <QualityContainer>
              <p>{tec1}</p>
              <p>{tec2}</p>
              <p>{tec3}</p>
            </QualityContainer>
            <ShareIcon href={href} target="_blank">
              <img src={Share} alt="link de compartilhamento"/>
            </ShareIcon>
        </ParagraphContainer>
        <ImageContainer>
            <img src={img} alt="Imagem do Projeto"/>
        </ImageContainer>
    </ItemContainer>
  )
}

export { ProjectItemRight }
