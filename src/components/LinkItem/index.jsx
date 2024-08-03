import React from 'react'
import { Container } from './styles'

const LinkItem = ({name, variant, href}) => {
  return (
    <Container variant={variant} href={href}>
        {name}
    </Container>
  )
}

export default LinkItem