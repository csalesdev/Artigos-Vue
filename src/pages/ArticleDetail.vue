<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import cardsData from "../data/cardsData.js";

const route = useRoute(); // Obtém a rota atual
const article = ref(null);

// Carregando o artigo com base no id da URL
onMounted(() => {
  const articleId = parseInt(route.params.id); // Obtendo o id da URL
  article.value = cardsData.find((a) => a.id === articleId); // Encontrando o artigo pelo id
  console.log(article.value);
});
</script>
<template>
  <main v-if="article">
    <h1>| {{ article.title }}</h1>
    <iframe
      width="1118"
      height="629"
      :src="article.videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
    <h2>| Descrição</h2>
    <p>
      {{ article.completeDescription }}
    </p>
  </main>
  <p v-else>Carregando artigo...</p>
</template>

<style scoped lang="scss">
main {
  padding: 5vh 10vw;

  @media (max-width: 600px) {
    padding: 5vw;
  }
}

iframe {
  max-width: 100%;
  margin: 20px 0 20px 20px;

  @media (max-width: 600px) {
    max-height: 240px;
    margin: 10px 0 10px 10px;
  }
}

h2,
h1 {
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  font-weight: 500;
  color: #121214;

  @media (max-width: 600px) {
    margin: 20px 0 20px 0;
  }
}

p {
  font-size: 1.5em;
  margin: 20px 0 0 20px;

  @media (max-width: 600px) {
    margin: 10px 0 0 20px;
  }
}
</style>
