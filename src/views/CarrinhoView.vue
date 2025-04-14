<script setup lang="ts">
import { ref } from 'vue';
import { useCarrinhoStore} from '@/stores/carrinhoStore';
const CarrinhoStore = useCarrinhoStore();
</script>
<template>
  <div class="carrinho">
    <h1>Carrinho</h1>
    <h1 v-for="(item, index) in CarrinhoStore.itens" :key="index"> {{ item.nome }} </h1>
  </div>
</template>

<style>
</style>
