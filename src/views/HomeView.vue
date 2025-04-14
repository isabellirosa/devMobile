<script setup lang="ts">
import { ref } from 'vue';
import { useCarrinhoStore} from '@/stores/carrinhoStore';
const carrinhoStore = useCarrinhoStore();
  const produtos = ref([
     { id: 8, nome: 'Produto a', preco: 24.44, qntCarrinho:"1"},{ "id": 2, nome: 'Produto 1', preco: 24.44, qntCarrinho:"1"}
  ])
</script>

<template>
  <main>
    <h1>home</h1>
    <div class="produto" v-for="produto in produtos" :key="produto.id">
      <span>{{produto.nome}}</span>
      <button @click="carrinhoStore.adicionarAoCarrinho(produto)">adicionar ao carrinho</button>
    </div>
  </main>
</template>
