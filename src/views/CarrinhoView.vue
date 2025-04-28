<script setup lang="ts">
import { ref } from 'vue';
import { useCarrinhoStore} from '@/stores/carrinhoStore';
const CarrinhoStore = useCarrinhoStore();
</script>
<template>
  <div class="rota-atual">
    <span>Home  >  <strong>Carrinho</strong></span>
  </div>
  <div class="itens-area">
    <p class="itens-info">Todos os itens ({{ CarrinhoStore.itens.length }})</p>
    <div v-for="(item, index) in CarrinhoStore.itens" :key="index">
      <h1>{{ item.nome }} {{item.qntCarrinho }}</h1>
      <!-- <itemCarrinho :img="item.foto[0]" :nome="item.nome" :preco="item.preco" :parcelas="item.parcelas" :id="item.id"
        :quantidade="item.quantidade" :removeMsg="removeMsg" /> -->
    </div>
  </div>

  <div class="carrinho">
    <h1>Carrinho</h1>
    <h1 v-for="(item, index) in CarrinhoStore.itens" :key="index"> {{ item.nome }} {{item.qntCarrinho }} </h1>
  </div>
</template>

<style scoped>

.itens {
  margin-top: 55px;
}

.itens-area {
  display: flex;
  flex-direction: column;
  gap:0px;
  margin: 75px 0px 0px 0px;
}

.itens-info {
  font-family: 'Poppins';
  font-size: 16px;
  margin-bottom: 10px;
}

.itens-info div {
  display: flex;
  gap: 8px;
  margin-bottom: 25px;
}



@media (max-width: 768px) {
  .itens-area{
    margin: 0px 20px;
  }
  .itens-info{
    font-size: 14px;
  }
  .frete{
    display: flex;
    align-items: center
  }
  .frete p{
    font-size: 14px;
    text-wrap: nowrap;
    display: flex;
    align-items: center;
  }
  .valor-frete{
    font-size: 14px;
    font-weight: 600;
    padding: 0px 5px;
  }
}
@media (max-width: 380px) {
  .frete p{
    font-size: 12px;
  }
  .valor-frete{
    font-size: 12px;
  }
}
p{
  color: white;
}
span{
  color: white;
  font-family: 'Poppins';
}
.rota-atual {
  display: flex;
  align-items: center;
  padding-left: 7vw;
  background-color: #d702a5;
  height: 50px;
  width: 100vw;
  font-size: 14px;
}
h1{
  color: aliceblue;
}
</style>
