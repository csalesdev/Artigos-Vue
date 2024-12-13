<script setup>
import "./globalStyle.scss";
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
