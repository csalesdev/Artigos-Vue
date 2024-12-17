<script setup></script>
<template>
  <main>
    <div>
      <h2>| Objetivo do Projeto</h2>
      <p>
        Testar meus conhecimentos fazendo uma página de artigos com Vue.js,
        JavaScript, HTML5, CSS3 e Sass. A ideia é conseguir usar as rotas de
        forma eficiente, conseguindo gerenciar a navegação entre diferentes
        páginas e seções sem recarregar a página inteira, proporcionando uma
        experiência mais fluída para o usuário. Além disso, quero implementar um
        layout responsivo no futuro, garantindo que o site se adapte de maneira
        otimizada para diferentes dispositivos e tamanhos de tela, melhorando a
        acessibilidade e a usabilidade tanto em desktop quanto em dispositivos
        móveis.
      </p>
    </div>
    <div>
      <h2>| História do Projeto</h2>
      <p>
        Esse projeto foi o último desafio proposto pelo Vai na Web, curso de
        Desenvolvimento Web Front-end que eu terminei em Dezembro de 2024.
        Decidi dar uma atenção maior a ele com o intuito de melhorar meu
        portfólio, aplicando conceitos avançados de desenvolvimento que aprendi
        durante o curso. Além de aprimorar minhas habilidades em HTML, CSS,
        JavaScript e frameworks, o objetivo foi criar uma aplicação funcional e
        responsiva, demonstrando minha capacidade de desenvolver pequenos
        projetos com uma boa qualidade.
      </p>
    </div>
    <div>
      <h2>| Tecnologias Utilizadas</h2>

      <p>Neste projeto, utilizei as seguintes tecnologias:</p>
      <ul>
        <li>
          <strong>Vue.js</strong> - Framework JavaScript para criação de
          interfaces reativas e dinâmicas.
        </li>
        <li>
          <strong>JavaScript</strong> - Lógica do projeto e interação com o DOM.
        </li>
        <li>
          <strong>HTML5</strong> - Estruturação da página e uso de elementos
          semânticos.
        </li>
        <li>
          <strong>CSS3</strong> - Estilização e layout do projeto, garantindo
          uma experiência visualmente agradável.
        </li>
        <li>
          <strong>Sass</strong> - Pré-processador CSS para organização de
          estilos e utilização de variáveis e mixins (foi usado apenas pra
          organização).
        </li>
      </ul>
    </div>
  </main>
</template>
<style scoped lang="scss">
main {
  padding: 5vh 10vw;

  @media (max-width: 600px) {
    padding: 5vh 5vw;
  }
}
h2 {
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  font-weight: 500;
  color: #121214;
}
p,
ul {
  font-size: 1.5em;
  margin: 10px 0 30px 20px;
}
ul {
  font-size: 1.2em;
}
</style>
