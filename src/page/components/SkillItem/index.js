import React from 'react'
import { SkillItemContainer } from './styles'


const Skill = ({src, alt, title}) => {
  return (
    <div>
      <SkillItemContainer>
        <img src={true ? src : !src} alt={alt}/>
        <p>{title}</p>
      </SkillItemContainer>
    </div>
  )
}

export { Skill }