import React from "react";
import { useInView } from "react-intersection-observer";
import { Container } from "./styles";
import ProjectItem from "../ProjectItem";
import { ProjectName } from "../../constants/Hrefs";

import PokedexImage from "../../assets/projectarts/reactpokedex.png";
import RubkutImage from "../../assets/projectarts/reacthubkut.png";
import SiteCCEMImage from "../../assets/projectarts/siteccem.png";

export const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container id="projetos" ref={ref} className={inView ? "is-visible" : ""}>
      <h3 className="project-title">Projetos</h3>
      <div className="project-section">
        <ProjectItem
          projecTitle="site CCEM"
          projectType="🎯 Landing Page"
          projectDescription="O site ccemescolademusica.com foi desenvolvido com a tecnologia ReactJS e a linguagem de programação JavaScript. Criado especialmente para a escola de música, oferece uma experiência online envolvente e acessível, integrando recursos interativos para alunos e futuros clientes. A plataforma adota a técnica mobile-first, garantindo uma excelente responsividade em dispositivos móveis."
          projectImage={SiteCCEMImage}
          projectLanguage={["React.js", "Javascript"]}
          hrefProjectName={ProjectName.ccem}
        />
        <ProjectItem
          variant="secondary"
          projecTitle="react rubkut"
          projectType="Ⓜ️ Mídia Social"
          projectDescription="Aplicação desenvolvida com Reactjs com o objetivo de treinar habilidades em requisições via Axios da API do GitHub, simulando a plataforma do Orkut, que fez sucesso em meados dos anos 2000. Páginas como a de requisição de usuário no login, Homepage, Página de repositórios, entre outras, foram criadas para a manipulação do ciclo de vida de cada componente."
          projectImage={RubkutImage}
          projectLanguage={["React.js", "Javascript"]}
          hrefProjectName={ProjectName.hubkut}
        />
        <ProjectItem
          projecTitle="react pokédex"
          projectType="💻 Info Consulta"
          projectDescription="Projeto desenvolvido com o principal objetivo de aprendizado em requisição de uma api remota, utilizando a função GET para a consulta de itens que projeto são pokémons. Outros métodos testados são de filtragem de busca pelos nomes dos pokémons e aprimoramento em css com aplicação do display grid, flex-box, webkit de animações entre outros."
          projectImage={PokedexImage}
          projectLanguage={["React.js", "Javascript"]}
          hrefProjectName={ProjectName.pokedex}
        />
      </div>
    </Container>
  );
};
