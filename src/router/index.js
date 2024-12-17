import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Articles from "../pages/Articles.vue";
import About from "../pages/About.vue";
import ArticleDetail from "../pages/ArticleDetail.vue"; // Importando a página de detalhes do artigo

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
  },
  {
    path: "/articles/:id", // Rota dinâmica para o artigo
    name: "ArticleDetail",
    component: ArticleDetail, // A página que exibe o artigo completo
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
