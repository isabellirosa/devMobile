<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo-section">
        <img class="logo" src="@/assets/imagens/caveira.png" alt="Logo Monster High" />
      </div>

      <div class="links-section">
        <div class="links-column">
          <h4>Páginas</h4>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/jogo">Jogo</RouterLink>
        </div>
        <div class="links-column">
          <h4>Navegação</h4>
          <RouterLink to="/carrinho">Carrinho</RouterLink>
          <RouterLink to="/bonecas-g1">Bonecas G1</RouterLink>
          <RouterLink to="/bonecas-g2">Bonecas G2</RouterLink>
          <RouterLink to="/bonecas-g3">Bonecas G3</RouterLink>
        </div>
        <div class="links-column">
          <h4>Precisa de ajuda?</h4>
          <p>Entre em contato.<br/>📞 4002-8922</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <hr />
      <p>2025 Monster High. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>
<style scoped>
.footer {
    margin-top: 150px;
    background-color: #131313;
    color: white;
    font-family: "Poppins", sans-serif;
    padding: 20px 40px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.logo-section {
  flex: 1;
}

.logo {
  width: 120px;
}

.links-section {
  flex: 3;
  display: flex;
  justify-content: space-around;
  gap: 40px;
}

.links-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.links-column h4 {
  margin-bottom: 10px;
  font-size: 16px;
}

.links-column a, .links-column p {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.footer-bottom {
  margin-top: 20px;
  text-align: center;
}

.footer-bottom hr {
  border: 1px solid #333;
  margin-bottom: 10px;
}

.footer-buttons {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.footer-buttons button {
  background: none;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
}

.footer-buttons .restart {
  margin-left: 20px;
}

/* --- RESPONSIVIDADE (só ajuda pra baixo) --- */
@media (max-width: 768px) {
  .links-section {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  .links-section .links-column:last-child {
    flex-basis: 100%;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
