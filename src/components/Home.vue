<script>
import logo from "../assets/banner.png";
import Card from "../components/Card.vue";

export default {
  components: {
    Card, // Registra o componente "Card" pra ser usado aqui
  },
  data() {
    return {
      // Array com os dados dos cards
      cards: [
        {
          image: "../src/assets/image-card1.png",
          title: "O que é linguagem de programação? Conheça as principais",
          description:
            "Uma das mais populares vertentes da tecnologia da informação, a área de...",
        },
        {
          image: "../src/assets/image-card2.png",
          title: "HTML é uma linguagem de programação?",
          description:
            "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet,",
        },
        {
          image: "../src/assets/image-card3.png",
          title: "O que é uma IDE?",
          description:
            "Ambiente de Desenvolvimento Integrado é um programa de computador que reúne características e ferramentas de apoio ao desenvolvimento de software",
        },
        {
          image: "../src/assets/image-card4.png",
          title: "ChatGPT é um chatbot desenvolvido pela OpenAI",
          description:
            'O nome "ChatGPT" combina "Chat", referindo-se à sua funcionalidade de chatbot, e "GPT", que significa Generative Pre-trained Transformer',
        },
        {
          image: "../src/assets/image-card5.png",
          title: "O GitHub Copilot",
          description:
            "é uma ferramenta de inteligência artificial desenvolvida pelo GitHub em conjunto com a OpenAI",
        },
        {
          image: "../src/assets/image-card6.png",
          title: "GIT e GitHub: o que são e quais as diferenças entre eles?",
          description:
            "Git e GibHub são dois softwares de controle de versão essenciais para...",
        },
      ],
    };
  },
};
</script>

<template>
  <main>
    <section class="section1">
      <h1>PROGRAMAÇÃO</h1>
    </section>
    <section class="section2">
      <h2>| Artigos Recomendados</h2>
      <div class="card-container">
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :image="card.image"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.section1 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35vh;
  background-color: black;
  background-image: url("../assets/banner.png");
  background-size: 100% 100%;

  h1 {
    color: white;
    font-size: 3em;
    font-family: "Poppins", sans-serif;
  }
}

.section2 {
  padding: 10vh 10vw;

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2em;
    font-weight: 500;
    color: #121214;
  }
}

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 10vh 0;
}
</style>
