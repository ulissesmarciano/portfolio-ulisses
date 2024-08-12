import React from 'react';
import { Container } from './styles';
import LinkItem from '../LinkItem';

import GithubIcon from '../../assets/icons/github-black.svg';
import LinkedInIcon from '../../assets/icons/linkedin-black.svg';
import DribbbleIcon from '../../assets/icons/dribbble.svg';


const ContactSection = () => {
  return (
    <Container>
        <h3>Quer entrar em contato?</h3>
        <p className='contact-invite'>Tem uma ideia de projeto? Eu adoraria colaborar. Envie uma mensagem. 🎣</p>

        <div className='image-email-container'>
            <picture>
                <img className='user-image' src='https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4' alt='Avatar do Ulisses' />
            </picture>
            <div className='name-email-section'>
                <h1>Ulisses Marciano</h1>
                <p>ulissesmkt2104@gmail.com</p>
            </div>
        </div>
        <div className='contact-buttons-container'>
            <LinkItem 
                name="linkedIn"
                variant="greetingsContactLinkIcon"
                src={LinkedInIcon}
            />
            <LinkItem 
                name="Github"
                variant="greetingsContactLinkIcon"
                src={GithubIcon}
            />
            <LinkItem 
                name="Dribbble"
                variant="greetingsContactLinkIcon"
                src={DribbbleIcon}
            />
        </div>
    </Container>
  );
};

export default ContactSection;