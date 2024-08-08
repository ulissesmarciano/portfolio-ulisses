import React from 'react';
import { Container } from './styles';

import PokedexImage from "../../assets/projectarts/reactpokedex.png";

import ShareIcon from "../../assets/icons/share-icon.png"

const ProjectItem = () => {
  return (
    <Container>
        <div className='info-content'>
            <h4 className='title'>react pokédex</h4>
            <p>💻 info consulta</p>

            <p>Projeto desenvolvido com o principal objetivo de aprendizado em requisição de uma api remota, utilizando a função GET para a consulta de itens que projeto são pokémons. Outros métodos testados são de filtragem de busca pelos nomes dos pokémons e aprimoramento em css com aplicação do display grid, flex-box, webkit de animações entre outros.</p>

            <ul className='language-container'>
                <li className='language-type'>React.js</li>
                <li className='language-type'>Javascript</li>
            </ul>
            <a href="#" target='blank'><img src={ShareIcon} alt='Ícone de redirecionamento'/></a>
        </div>
        <div className='image-container'>
            <picture>
                <img src={PokedexImage} alt="foto do projeto" />
            </picture>
        </div>
    </Container>
  );
};

export default ProjectItem;