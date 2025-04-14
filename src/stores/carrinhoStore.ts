import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('carrinho', () => {
  const itens = ref([
     { id: 1, nome: 'Produto 1', preco: 24.44, qntCarrinho:"1"},{ "id": 2, nome: 'Produto 1', preco: 24.44, qntCarrinho:"1"}
  ])
  
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function adicionarAoCarrinho(item) {
    const ids = this.itens.map(objeto => objeto.id)
    if(ids.includes(item.id)){
      item.quantidade++
    }else{
      item.quantidade = 1
      itens.value.push(item)
    }
  }
  return { itens, adicionarAoCarrinho }
})
