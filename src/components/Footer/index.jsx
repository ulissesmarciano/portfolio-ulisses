import React from 'react';
import { Container } from './styles';

const Footer = ({id}) => {
  return (
    <Container>
        <div className='bottom-info-section'>
          <h2><a href={id="#header"}>Ulisses Marciano</a></h2>
          <p>© ULISSES GONÇALVES 2024</p>
        </div>
    </Container>
  );
};

export default Footer;