import React from 'react'
import { Container } from './styles'

const LinkItem = ({name, variant, href, src, alt, target}) => {
  return (
    <Container variant={variant} href={href} target={target}>
      <img src={true ? src : !src} alt={alt}/>
        {name}
    </Container>
  )
}

export default LinkItem