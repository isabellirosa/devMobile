<script setup lang="ts">
import { ref } from 'vue';
import { useCarrinhoStore} from '@/stores/carrinhoStore';
const carrinhoStore = useCarrinhoStore();
const produtos = ref([
  { id: 1, nome: 'Boneca Draculaura Ghouls Rule - Monster High', preco: 149.90, qntCarrinho: "0", img:"../assets/imagens/draculaura.jpg"},
  { id: 2, nome: 'Boneca Clawdeen Wolf Scaris City - Monster High', preco: 139.90, qntCarrinho: "0" },
  { id: 3, nome: 'Boneca Frankie Stein Day at the Maul - Monster High', preco: 129.90, qntCarrinho: "0" },
  { id: 4, nome: 'Boneca Lagoona Blue Haunt Couture - Monster High', preco: 159.90, qntCarrinho: "0" },
  { id: 5, nome: 'Boneca Cleo de Nile Boo-riginal Creeproduction - Monster High', preco: 119.90, qntCarrinho: "0" },
  { id: 6, nome: 'Boneca Ghoulia Yelps Skulltimate Secrets - Monster High', preco: 109.90, qntCarrinho: "0" },
  { id: 7, nome: 'Boneca Toralei Stripe Howliday Edition - Monster High', preco: 169.90, qntCarrinho: "0" },
  { id: 8, nome: 'Boneca Abbey Bominable - Monster High G3', preco: 139.90, qntCarrinho: "0" },
  { id: 9, nome: 'Boneca Twyla Creepover Party - Monster High', preco: 129.90, qntCarrinho: "0" },
  { id: 10, nome: 'Boneca Deuce Gorgon e Frankie Stein - Pack Casal Monster High', preco: 199.90, qntCarrinho: "0" }
]);

function createUrlImage(src) {
  return new URL(src, import.meta.url).href;
}

</script>

<template>
  <main>
    <h1>home</h1>
    <div class="produto" v-for="(produto, index) in produtos" :key="index">
      <img :src="createUrlImage(produto.img)"/>
      <span>{{produto.nome}}</span>
      <button @click="carrinhoStore.adicionarAoCarrinho(produto)">adicionar ao carrinho</button>
    </div>
  </main>
</template>
