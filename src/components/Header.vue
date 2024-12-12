<script setup>
import logo from "../assets/logo-header.png";
</script>
<template>
  <header>
    <img :src="logo" alt="Logo do site" />
    <nav>
      <ul>
        <a href=""><li>Início</li></a>
        <a href=""><li>Artigos</li></a>
      </ul>
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

ul {
  display: flex;
  gap: 30px;
}

li {
  list-style: none;
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
</style>
