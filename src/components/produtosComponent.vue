<script setup lang="ts">
import { ref } from 'vue';
import { useCarrinhoStore } from '@/stores/carrinhoStore';
const carrinhoStore = useCarrinhoStore();
const categorias = ref(["geracao1", "geracao2", "geracao3", "terror"]);

const produtos = ref([
  // geracao1
  { id: 1, nome: 'Monster High Basic Frankie Stein - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/frankie-g1.png", categoria: "geracao1" },
  { id: 2, nome: 'Monster High Basic Draculaura - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/draculaura-g1.png", categoria: "geracao1" },
  { id: 3, nome: 'Monster High Basic Lagoona - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/lagoona-g1.png", categoria: "geracao1" },
  { id: 4, nome: 'Monster High Basic Clawdeen Wolf - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/clawdeen-g1.png", categoria: "geracao1" },
  { id: 5, nome: 'Monster High School\'s Out Cleo de Nile - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/cleo-g1.png", categoria: "geracao1" },

  // geracao2
  { id: 6, nome: 'Monster High Ghoul\'s Beast Pet Cleo de Nile - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/cleo-g2.png", categoria: "geracao2" },
  { id: 7, nome: 'Monster High One Team, One Scream! Venus - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/venus-g2.png", categoria: "geracao2" },
  { id: 8, nome: 'Monster High Monstrous Hair Ghouls Twyla - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/twyla-g2.png", categoria: "geracao2" },
  { id: 9, nome: 'Monster High Dance The Fright Away Draculaura - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/draculaura-g2.png", categoria: "geracao2" },
  { id: 10, nome: 'Monster High Ghostbusters Frankie Stein - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/frankie-g2.png", categoria: "geracao2" },

  // geracao3
  { id: 11, nome: 'Monster High Brand Boo Draculaura - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/draculaura-g3.png", categoria: "geracao3" },
  { id: 12, nome: 'Monster High Brand Boo Venus - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/venus-g3.png", categoria: "geracao3" },
  { id: 13, nome: 'Monster High Skullector Nefera de Nile - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/nefera-g3.png", categoria: "geracao3" },
  { id: 14, nome: 'Monster High Skullector Clawdeen Wolf - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/clawdeen-g3.png", categoria: "geracao3" },
  { id: 15, nome: 'Monster High Monster Fest Frankie Stein - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/frankie-g3.png", categoria: "geracao3" },

  // Terror
  { id: 16, nome: 'Monster High Skullector Addams Family - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/addams-terror.png", categoria: "terror" },
  { id: 17, nome: 'Monster High Collector IT Pennywise - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/pennywise-terror.png", categoria: "terror" },
  { id: 18, nome: 'Monster High Skullector Annabelle - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/annabelle-terror.png", categoria: "terror" },
  { id: 19, nome: 'Monster High Skullector The Shining Grady Twins - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/grady-terror.png", categoria: "terror" },
  { id: 20, nome: 'Monster High Skullector Elvira: Mistress of the Dark - Mattel', preco: 500.00, qntCarrinho: "0", img: "../assets/imagens/elvira-terror.png", categoria: "terror" }
]);


function createUrlImage(src) {
    return new URL(src, import.meta.url).href;
}

</script>
<template>

        <div class="produtos" v-for="(categoria, index) in categorias" :key="index">
            <div class="categoria">            <h1>{{ categoria }}</h1>
            <img class="caveira" src="@/assets/imagens/caveira.png" /></div>
            <div class="produtos-categoria">
            <div class="produto" v-for="(produto, pIndex) in produtos.filter(p => p.categoria === categoria)"
                :key="pIndex">
                <img class="produto-img" :src="createUrlImage(produto.img)" />
                <span>{{ produto.nome }}</span>
                <div>
                    <img class="estrelas" src="@/assets/imagens/estrelas.png" />
                <span>R$ {{ produto.preco }}</span>   <button @click="carrinhoStore.adicionarAoCarrinho(produto)">comprar</button></div>
            </div>
        </div>
        </div>
</template>
<style scoped>
.caveira{
    height: 30px;
    width: auto;
    margin-left:10px;
}
.categoria{
    display: flex;
}
.produtos{
    margin: 90px 150px;
}
span, button{
    color:white;
    font-family: "Inter", sans-serif;
}

.produtos-categoria {
    display: flex;
    justify-content: space-between;
}
.produto{
    display: block;
    width: 250px;

}
.produto-img{
    display: block;
    height: 300px;
    width: 250px;
}
.estrelas{
    display: block;
    height: 13px;
}
.produto button{
    color: white;
    text-decoration: none;
    background-color: rgba(240, 248, 255, 0);
    padding: 7px 35px;
    border: 1px solid white;
    border-radius: 20px;
}
h1 {
    color: white;
    margin-bottom:40px;
    margin-top:0px;
}
</style>