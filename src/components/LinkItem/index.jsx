import React from 'react'
import { Container } from './styles'

const LinkItem = ({name, variant, href, src, alt}) => {
  return (
    <Container variant={variant} href={href}>
      <img src={true ? src : !src} alt={alt}/>
        {name}
    </Container>
  )
}

export default LinkItem