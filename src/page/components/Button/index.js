import React from 'react'
import { ButtonContainer, ChildContainer } from './styles'

const Button = ({title, href, src, alt }) => {
  return (
    <ButtonContainer href={href} target="_blank" >
        <img src={true ? src : !src} alt={alt}/>
        <ChildContainer>
         {title}
        </ChildContainer>
    </ButtonContainer>
  )
}

export { Button }