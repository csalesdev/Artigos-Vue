<script setup>
import LogoFooter from "../assets/logo-footer.png";
</script>

<template>
  <footer>
    <nav>
      <ul>
        <li>
          <a href="contatos">Meus Contatos</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/caua-sales/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/csalesdev">GitHub</a>
        </li>
      </ul>
    </nav>
    <div>
      <h3>© 2024 | Direitos Reservados | Cauã Sales</h3>
      <img :src="LogoFooter" alt="" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30vh;
  background-color: #12254d;
  padding: 0 10vw;

  @media (max-width: 600px) {
    padding: 0 5vw;
  }
}

a,
h3 {
  color: white;
  list-style: none;
  text-decoration: none;

  @media (max-width: 600px) {
    font-size: 1em;
  }
}

a:hover {
  color: rgba(127, 255, 212, 0.651);
}

li {
  list-style: none;
  font-size: 1.5em;
  font-weight: 600;
  padding: 10px 0;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
}

img {
  width: 25%;
}

div {
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;
  position: relative;
  bottom: 50px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: end;
    gap: 20px;
    top: 5px;
  }
}
</style>
