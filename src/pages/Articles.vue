<script>
import Card from "../components/Card.vue";
import cardsData from "../data/cardsData.js";
import { RouterLink } from "vue-router";

export default {
  components: {
    Card, // Registra o componente "Card" pra ser usado aqui
    RouterLink,
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
    <h2>| Artigos Completos</h2>
    <section class="card-container">
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
    </section>
  </main>
</template>

<style scoped lang="scss">
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 5vh 20vh;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 5vh 5vw;
  }
}

h2 {
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  font-weight: 500;
  color: #121214;
  margin: 5vh 10vw;

  @media (max-width: 600px) {
    margin: 5vh 5vw;
  }
}

a {
  text-decoration: none;
  color: black;
}
</style>
