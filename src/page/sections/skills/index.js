import React from 'react'
import { SkillsContainer, TitleContainer } from './styles'

import { Skill } from '../../components/SkillItem'

import ReactIcon from '../../../assets/icons/react.svg'
import AndroidIcon from '../../../assets/icons/android.svg'
import AngularIcon from '../../../assets/icons/angular.svg'
import AWSIcon from '../../../assets/icons/aws.svg'
import CSS3Icon from '../../../assets/icons/css3.svg'
import GitIcon from '../../../assets/icons/git.svg'
import HtmlIcon from '../../../assets/icons/html-5.svg'
import JSIcon from '../../../assets/icons/javascript.svg'
import NodeJsIcon from '../../../assets/icons/nodejs.svg'
import TSIcon from '../../../assets/icons/typescript.svg'


const SkillsContent = () => {
  return (
    <div>
      <TitleContainer>
        <h3 id='Habilidades'>Habilidades</h3>
      </TitleContainer>
        <SkillsContainer>
          <Skill src={ReactIcon} alt="Icone React" title="React.js"/>
          <Skill src={AndroidIcon} alt="Icone Android" title="Android Dev"/>
          <Skill src={AngularIcon} alt="Icone Angular" title="Angular.js"/>
          <Skill src={AWSIcon} alt="Icone AWS" title="Cloud Computing"/>
          <Skill src={CSS3Icon} alt="Icone Css3" title="CSS3"/>
          <Skill src={GitIcon} alt="Icone Git" title="Git"/>
          <Skill src={HtmlIcon} alt="Icone Html" title="HTML5"/>
          <Skill src={JSIcon} alt="Icone Javascript" title="Javascript"/>
          <Skill src={NodeJsIcon} alt="Icone Nodejs" title="Node.js"/>
          <Skill src={TSIcon} alt="Icone Typescript" title="Typescript"/>
        </SkillsContainer>
    </div>
  )
}

export { SkillsContent }
