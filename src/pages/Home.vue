<script>
import Card from "../components/Card.vue";
import cardsData from "../data/cardsData.js";

export default {
  components: {
    Card, // Registra o componente "Card" pra ser usado aqui
  },
  data() {
    return {
      // Array com os dados dos cards
      cards: cardsData,
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
        <RouterLink
          v-for="(card, index) in cards"
          :key="index"
          :to="`/articles/${card.id}`"
          class="card-link"
        >
          <Card
            :image="card.image"
            :title="card.title"
            :description="card.description"
          />
        </RouterLink>
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

  @media (max-width: 600px) {
    height: 25vh;
  }

  h1 {
    color: white;
    font-size: 3em;
    font-family: "Poppins", sans-serif;

    @media (max-width: 600px) {
      font-size: 1.5em;
    }
  }
}

.section2 {
  padding: 10vh 10vw;

  @media (max-width: 600px) {
    padding: 10vh 5vw;
  }

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
  margin: 5vh 0;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

a {
  color: black;
  text-decoration: none;
}
</style>
