<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String, // Define que "image" deve ser uma string
      required: true, // Dita que essa prop é obrigatória
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card">
    <img :src="image" :alt="title" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.card:hover {
  border: solid 2px rgba(0, 0, 0, 0.493);
}
.card {
  border: solid 2px black;
  border-radius: 10px;
  height: 100%;

  h3,
  p {
    padding: 20px 20px;
  }
  p {
    margin-top: -20px;
    margin-bottom: 20px;
  }
}
img {
  border-radius: 8px 8px 0 0;
  max-width: 100%;
  height: auto;
}
</style>
