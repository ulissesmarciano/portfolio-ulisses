import React from 'react'
import { ButtonContainer } from './styles'

const ButtonContact = ({title, id, variant="primary", onClick}) => {
  return (
    <ButtonContainer href={true? id="#Contato": !id} variant={variant} onClick={onClick}>
         {title}
    </ButtonContainer>
  )
}

export { ButtonContact }