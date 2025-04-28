<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCarrinhoStore} from '@/stores/carrinhoStore';
const CarrinhoStore = useCarrinhoStore();
function createUrlImage(src) {
    return new URL(src, import.meta.url).href;
}
const totalCarrinho = computed(() => {
  return CarrinhoStore.itens.reduce((acc, item) => {
    return acc + (item.preco * item.qntCarrinho);
  }, 0);
})
</script>
<template>
  <div class="rota-atual">
    <span>Home  >  <strong>Carrinho</strong></span>
  </div>
  <div class="container">
  <div class="itens-area">
    <p class="itens-info">Todos os itens ({{ CarrinhoStore.itens.length }})</p>
    <div v-for="(item, index) in CarrinhoStore.itens" :key="index">
      <!-- <itemCarrinho :img="item.foto[0]" :nome="item.nome" :preco="item.preco" :parcelas="item.parcelas" :id="item.id"
        :quantidade="item.quantidade" :removeMsg="removeMsg" /> -->
        <div class="itens">
          <div class="item">
              <img class="item-img" :src="createUrlImage(item.img)" alt="">
              <div class="item-info">
                  <span class="item-nome">{{ item.nome }}</span>
                  <span class="item-valor">R$ {{ item.preco }},00</span>
                  <div class="item-quantidade">
                    <svg v-if="item.qntCarrinho < 2"  class="icon" @click="CarrinhoStore.excluirItem(item)" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.875 2.625H13.125M2.625 5.25H18.375M16.625 5.25L16.0114 14.4544C15.9193 15.8353 15.8733 16.5258 15.575 17.0494C15.3124 17.5103 14.9163 17.8809 14.439 18.1122C13.8967 18.375 13.2047 18.375 11.8207 18.375H9.17932C7.79529 18.375 7.10328 18.375 6.56105 18.1122C6.08366 17.8809 5.68758 17.5103 5.42499 17.0494C5.12672 16.5258 5.08069 15.8353 4.98863 14.4544L4.375 5.25M8.75 9.1875V13.5625M12.25 9.1875V13.5625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <svg v-else class="icon" @click="CarrinhoStore.diminuirQuantidade(item)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>{{ item.qntCarrinho }}</span> 
                        <svg class="icon" @click="CarrinhoStore.aumentarQuantidade(item)"  width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.45455 15.1023V0.715908H8.39773V15.1023H6.45455ZM0.227273 8.875V6.94318H14.625V8.875H0.227273Z" fill="white"/>
                          </svg>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>

  <div class="resumo-pedido">
    <h2>Resumo do pedido</h2>

    <div class="resumo-linha">
      <span>Total</span>
      <span>R$ {{ totalCarrinho }},00</span>
    </div>

    <div class="resumo-frete">
      <span>Consultar frete</span>
      <div class="linha-horizontal"></div>
    </div>

    <button class="botao-finalizar">
      Finalizar compra
    </button>
  </div>
</div>

<!-- 
  <div class="carrinho">
    <h1>Carrinho</h1>
    <h1 v-for="(item, index) in CarrinhoStore.itens" :key="index"> {{ item.nome }} {{item.qntCarrinho }} </h1>
  </div> -->


</template>
<style scoped>
.container{
  display: flex;
  justify-content: space-around;
  gap: 50px;
  margin-bottom: 150px;
  margin-left: 80px;
  margin-right: 80px;
}
@media (max-width: 768px) {
  .container{
    flex-direction: column;
    gap: 20px;
  }
}
.resumo-pedido {
  color: white;
  padding: 75px 40px;
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.resumo-pedido h2 {
  font-size: 20px;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
}

.resumo-linha {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #555;
  padding-bottom: 10px;
}

.resumo-frete {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.resumo-frete span {
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
}

.linha-horizontal {
  height: 1px;
  background-color: #555;
  width: 100%;
}

.botao-finalizar {
  background-color: #EC008C; /* pink forte */
  color: white;
  border: 1px solid white;
  padding: 15px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
}

.botao-finalizar:hover {
  background-color: #c10073;
}





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






.item {
  width: 700px;
  border-bottom: 2px solid #ebebeb92;
  display: flex;
  gap: 30px;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.item-img {
  height: 250px;
  margin-bottom: 20px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item-nome {
  font-weight: 500;
}

.item-valor {
  font-size: 20px;
  font-weight: 600;
}

.item-quantidade {
  user-select: none;
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-quantidade .icon {
  cursor: pointer;
}

.removeCard {
  position: fixed;
  bottom: 30px;
  display: flex;
  justify-content: center;
  width: 100vw;
}

.removeCard div {
  padding: 15px 30px;
  border-radius: 5px;
  color: white;
  background-color: #383838cc;
  font-weight: 500;
}


@media (max-width: 768px) {
  .item-img{
      width: 150px;
      height: 175px;
  }
  .item {
      border-bottom: 0px solid #A1A1A1;
      gap: 10px;
      padding-bottom: 10px;
      margin-bottom: 20px;
  }
  .item-valor{
      font-size: 16px;
  }
  .item-info {
      gap: 10px;
  }
  .resumo-pedido {
    color: white;
    padding: 15px 10px;
    border-radius: 8px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}




@media (max-width: 768px) {
  .itens-area{
    margin: 0px;
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
  .container{
    margin: 0;
    padding: 20px;
  }
}
@media (max-width: 500px) {
  .item {
    width: 300px;
    border-bottom: 2px solid #ebebeb92;
    display: flex;
    gap: 30px;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  
  .item-img {
    height: 125px;
    margin-bottom: 20px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
  font-size: 14px;
}
h1{
  color: aliceblue;
}
</style>
