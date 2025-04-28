<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  produto: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["carrinho"]);


function createUrlImage(src) {
    return new URL(src, import.meta.url).href;
}

</script>
<template>
            <div class="produto" >
                <img class="produto-img" :src="createUrlImage(produto.img)" />
                <span class="produto-nome">{{ produto.nome}}</span>
                <div>
                    <img class="estrelas" src="@/assets/imagens/estrelas.png" />
                    <div class="comprar">
                <span>R$ {{ produto.preco }},00</span>   <RouterLink to="/carrinho"><button @click="() => emit('carrinho', produto)" >Comprar</button></RouterLink></div>
            </div></div>
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
    margin-bottom: 10px;
}
.produto-img:hover{
  transform: scaleX(-1);
}



.estrelas{
    display: block;
    height: 13px;
    margin:5px 0px 18px 0px
}
.produto button{
    color: white;
    text-decoration: none;
    background-color: rgba(240, 248, 255, 0);
    padding: 5px 15px;
    border: 1px solid white;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    margin-top: -18px;
}
.produto button:hover{
    background-color:#DD0079;
}
h1 {
    color: white;
    margin-bottom:40px;
    margin-top:0px;
}
.produto-nome{
    margin-bottom:30px
}
.comprar{
    display: flex;
    justify-content: space-between;
}
.comprar span{
    font-size: 16;
    font-weight: 600;
}
</style>