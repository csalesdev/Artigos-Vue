<script setup>
import logo from "../assets/logo-header.png";
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <img :src="logo" alt="Logo do site" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/articles">Artigos</RouterLink>
      <RouterLink to="/about">Sobre</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
  height: 10vh;
}

a {
  text-decoration: none;
  color: black;
  font-family: "Inter", serif;
  font-weight: 500;
}

a:hover {
  color: rgba(12, 128, 89, 0.473);
}

img {
  width: 3.5%;
}
nav {
  display: flex;
  gap: 20px;
}
</style>
