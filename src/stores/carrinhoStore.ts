import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('carrinho', () => {
  const itens = ref([])

  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  // Função para adicionar ao carrinho
  function adicionarAoCarrinho(item) {
    const ids = itens.value.map(objeto => objeto.id)
    if (ids.includes(item.id)) {
      item.qntCarrinho++
    } else {
      item.qntCarrinho = 1
      itens.value.push(item)
    }
  }

    // Função para adicionar ao carrinho
    function aumentarQuantidade(item) {
      const ids = itens.value.map(objeto => objeto.id)
      if (ids.includes(item.id)) {
        item.qntCarrinho++
      }
    }


  // Função para diminuir a quantidade de um item no carrinho
  function diminuirQuantidade(item) {
    const itemCarrinho = itens.value.find((produto) => produto.id === item.id)
    if (itemCarrinho && itemCarrinho.qntCarrinho > 1) {
      itemCarrinho.qntCarrinho--
    }
  }

  // Função para excluir um item do carrinho
  function excluirItem(item) {
    itens.value = itens.value.filter((produto) => produto.id !== item.id)
  }

  return { itens, adicionarAoCarrinho, aumentarQuantidade, diminuirQuantidade, excluirItem }
})
