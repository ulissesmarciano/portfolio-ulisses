import React from 'react'

import { Button } from '../../components/Button'
import LinkedInIcon from '../../../assets/icons/linkedin-black.svg'
import GithubIcon from '../../../assets/icons/github-black.svg'
import DribbbleIcon from '../../../assets/icons/dribbble.svg'

import { Avatar, ButtonsContainer, Container, EmailContact, PhotoEmailContainer, AlignContainer } from './styled'

const UserInfo = () => {
  return (
      <Container>
          <AlignContainer>
          <h3 id='Contato'>Want to get in touch?</h3>
          <p>Have a project idea? I'd love to collaborate. Drop me a line. 🎣</p>
          <PhotoEmailContainer>
            <Avatar src="https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4" alt="Github"/>
            <div>
              <h4>Ulisses Marciano</h4>
              <a href='/'>
                <EmailContact>ulissesmkt2104@gmail.com</EmailContact>
              </a>
            </div>
          </PhotoEmailContainer>
          <ButtonsContainer>
            <Button src={LinkedInIcon} title="LinkedIn" href="https://github.com/ulissesmarciano"/>
            <Button src={GithubIcon} title="Github" href="https://www.linkedin.com/in/ulissesmarciano/"/>
            <Button src={DribbbleIcon} title="Dribbble" href="https://dribbble.com/ulissesmarciano"/>
          </ButtonsContainer>
        </AlignContainer>
      </Container>
  )
}

export { UserInfo }
