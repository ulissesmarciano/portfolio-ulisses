import React from 'react'
import { ProjectItemRight } from '../../components/ProjectItem/ImgRight'
import { ProjectItemLeft } from '../../components/ProjectItem/ImgLeft'
import { Container, SkillContainer, TitleContainer } from './styles'

import PokedexImg from '../../../assets/projectarts/reactpokedex.png'

const Projects = () => {
  return (
    <Container>
      <TitleContainer>
        <h3 id="Projetos">Projects</h3>
      </TitleContainer>
      <SkillContainer>
        <ProjectItemRight
          projectType="📟 InfoConSulta"
          project="PokéDex"
          description="Projeto desenvolvido com o principal objetivo de aprendizado em requisição de uma api remota, utilizando a função GET para a consulta de itens que projeto são pokémons. Outros métodos testados são de filtragem de busca pelos nomes dos pokémons e aprimoramento em css com aplicação do display grid, flex-box, webkit de aniações entre outros."
          href="https://github.com/ulissesmarciano/projects/tree/main/pokedex"
          tec1="React.js"
          tec2="React Native"
          tec3="Javascript"
          img={PokedexImg}
        />
        <ProjectItemLeft 
          projectType="🥪 SMART SHOPPER"
          project="Meat Cheese Bread"
          description="Team-developed project completed while part of The Collab Lab Winter 2021 Cohort. A React PWA bootstrapped with Firestore, deployed to Netlify. The focus of this project was most importantly about collaboration and the inclusion of all voices through best practice workflows with weekly tickets, grooming, and feedback from Senior Devs."
          href="/"
          tec1="React.js"
          img="https://kevin-davis.com/static/ccbb985979df477c76be7286f24fed95/64b17/mcb_screens7.jpg"
        />
      </SkillContainer>
    </Container>
  )
}

export { Projects }
