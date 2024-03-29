import React from 'react'
import { ProjectItemRight } from '../../components/ProjectItem/ImgRight'
import { ProjectItemLeft } from '../../components/ProjectItem/ImgLeft'
import { Container, SkillContainer, TitleContainer } from './styles'

import PokedexImg from '../../../assets/projectarts/reactpokedex.png'
import HubkutImg from '../../../assets/projectarts/reacthubkut.png'
import CCEMSiteImg from '../../../assets/projectarts/siteccem.png'

const Projects = () => {
  return (
    <Container>
      <TitleContainer>
        <h3 id="Projetos">Projects</h3>
      </TitleContainer>
      <SkillContainer>
      <ProjectItemRight
          projectType="💻 Info Consulta"
          project="PokéDex"
          description="O site ccemescolademusica.com foi desenvolvido tecnologia ReactJS, utilizando a linguagem de programação JavaScript. Desenvolvido especificamente para a escola de música, proporciona uma experiência online envolvente e acessível, integrando recursos interativos para alunos e futuros clientes com responsividade utilizando a tecnica mobile first."
          href="https://github.com/ulissesmarciano/site-react-ccem-escola-de-musica"
          tec1="React.js"
          tec3="Javascript"
          img={CCEMSiteImg}
        />
        <ProjectItemLeft
          projectType="📟 Info Consulta"
          project="PokéDex"
          description="Projeto desenvolvido com o principal objetivo de aprendizado em requisição de uma api remota, utilizando a função GET para a consulta de itens que projeto são pokémons. Outros métodos testados são de filtragem de busca pelos nomes dos pokémons e aprimoramento em css com aplicação do display grid, flex-box, webkit de animações entre outros."
          href="https://github.com/ulissesmarciano/projects/tree/main/pokedex"
          tec1="React.js"
          tec2="React Native"
          tec3="Javascript"
          img={PokedexImg}
        />
        <ProjectItemRight 
          projectType="Ⓜ️ Mídia Social"
          project="Hubkut"
          description="Aplicação desenvolvida com Reactjs com o objetivo de treinar habilidades em Typescript e requisições via Axios da api do Github simulando a plataforma do Orkut, que é uma rede de relacionamentos que fez sucesso em meados dos anos 2000. Páginas de requisição de usuário no login, Homepage, Página de repositórios, entre outros foram criadas para a manipulação do ciclo de vida de cada componente."
          href="https://github.com/ulissesmarciano/projects/tree/main/hubkut"
          tec1="React.js"
          tec2="Typescript"
          img={HubkutImg}
        />
      </SkillContainer>
    </Container>
  )
}

export { Projects }
