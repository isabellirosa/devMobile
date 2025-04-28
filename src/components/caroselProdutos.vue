<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import produtoComponent from './produtoComponent.vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useCarrinhoStore } from '@/stores/carrinhoStore'

// Verificação da largura da tela
const isSmallScreen = ref(window.innerWidth < 500)

// Novo ref para largura atual
const windowWidth = ref(window.innerWidth)

function updateWindowWidth() {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})

const itemsToShow = computed(() => (
  windowWidth.value < 350 ? 0.8 :
  windowWidth.value < 500 ? 1.2 :
  windowWidth.value < 700 ? 1.8 :
  windowWidth.value < 930 ? 2.6 :
  windowWidth.value < 1150 ? 3.4 :
  windowWidth.value < 1350 ? 4.2 : 5
))
const carrinhoStore = useCarrinhoStore()
const categorias = ref(['geracao1', 'geracao2', 'geracao3', 'terror'])

const produtos = ref([
  // geracao1
  {
    id: 1,
    nome: 'Monster High Basic Frankie Stein - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/frankie-g1.png',
    categoria: 'geracao1',
  },
  {
    id: 2,
    nome: 'Monster High Basic Draculaura - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/draculaura-g1.png',
    categoria: 'geracao1',
  },
  {
    id: 3,
    nome: 'Monster High Basic Lagoona - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/lagoona-g1.png',
    categoria: 'geracao1',
  },
  {
    id: 4,
    nome: 'Monster High Basic Clawdeen Wolf - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/clawdeen-g1.png',
    categoria: 'geracao1',
  },
  {
    id: 5,
    nome: "Monster High School's Out Cleo de Nile - Mattel",
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/cleo-g1.png',
    categoria: 'geracao1',
  },

  // geracao2
  {
    id: 6,
    nome: "Monster High Ghoul's Beast Pet Cleo de Nile - Mattel",
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/cleo-g2.png',
    categoria: 'geracao2',
  },
  {
    id: 7,
    nome: 'Monster High One Team, One Scream! Venus - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/venus-g2.png',
    categoria: 'geracao2',
  },
  {
    id: 8,
    nome: 'Monster High Monstrous Hair Ghouls Twyla - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/twyla-g2.png',
    categoria: 'geracao2',
  },
  {
    id: 9,
    nome: 'Monster High Dance The Fright Away Draculaura - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/draculaura-g2.png',
    categoria: 'geracao2',
  },
  {
    id: 10,
    nome: 'Monster High Ghostbusters Frankie Stein - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/frankie-g2.png',
    categoria: 'geracao2',
  },

  // geracao3
  {
    id: 11,
    nome: 'Monster High Brand Boo Draculaura - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/draculaura-g3.png',
    categoria: 'geracao3',
  },
  {
    id: 12,
    nome: 'Monster High Brand Boo Venus - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/venus-g3.png',
    categoria: 'geracao3',
  },
  {
    id: 13,
    nome: 'Monster High Skullector Nefera de Nile - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/nefera-g3.png',
    categoria: 'geracao3',
  },
  {
    id: 14,
    nome: 'Monster High Skullector Clawdeen Wolf - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/clawdeen-g3.png',
    categoria: 'geracao3',
  },
  {
    id: 15,
    nome: 'Monster High Monster Fest Frankie Stein - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/frankie-g3.png',
    categoria: 'geracao3',
  },

  // Terror
  {
    id: 16,
    nome: 'Monster High Skullector Addams Family - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/addams-terror.png',
    categoria: 'terror',
  },
  {
    id: 17,
    nome: 'Monster High Collector IT Pennywise - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/pennywise-terror.png',
    categoria: 'terror',
  },
  {
    id: 18,
    nome: 'Monster High Skullector Annabelle - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/annabelle-terror.png',
    categoria: 'terror',
  },
  {
    id: 19,
    nome: 'Monster High Skullector The Shining Grady Twins - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/grady-terror.png',
    categoria: 'terror',
  },
  {
    id: 20,
    nome: 'Monster High Skullector Elvira: Mistress of the Dark - Mattel',
    preco: 500.0,
    qntCarrinho: '0',
    img: '../assets/imagens/elvira-terror.png',
    categoria: 'terror',
  },
])
</script>
<template>
  <div>
    <div v-for="(categoria, index) in categorias" :key="index" class="produtos-section">
      <div class="categoria">
        <div class="categoria-titulo">
        <h1>{{ categoria }}</h1></div>
        <img class="caveira" src="@/assets/imagens/caveira.png" />
      </div>
      <div class="produtos-categoria">
        <Carousel :itemsToShow="isSmallScreen ? 1.2 : itemsToShow" :transition="500">
          <Slide
            v-for="(produto, pIndex) in produtos.filter((p) => p.categoria === categoria)"
            :key="pIndex"
          >
            <produtoComponent
              :produto="produto"
              @carrinho="carrinhoStore.adicionarAoCarrinho(produto)"
            />
          </Slide>
          <template #addons>
            <!-- <Navigation :class="isSmallScreen?'seta-generos':'seta-carosel'" /> -->
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.caveira {
  height: 30px;
  width: auto;
  margin-left: 10px;
}
.categoria {
  display: flex;
  margin-top: 100px;
}
.produtos {
  margin: 90px 150px;
}
span,
button {
  color: white;
  font-family: 'Inter', sans-serif;
}

.produtos-categoria {
  display: flex;
  justify-content: space-between;
}
.produto {
  display: block;
  width: 250px;
}
/*.produtos-section {
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  }*/
.carousel {
    width: 100%;
    padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
    display: block;
    color: white;
    margin-bottom: 40px;
    margin-top: 0px;
    text-align: left;
    font-family: 'MonsterHigh', cursive;
    letter-spacing: 3px;
    font-weight: 200;
  }
  .categoria-titulo{
    padding-left:20px;
  }
.active {
  background-color: #da131341 !important;
  color: white !important;
  font-weight: bolder;
}
.carousel-navigation {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: 1000000;
}

.carousel-navigation .carousel__prev,
.carousel-navigation .carousel__next {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
}

.carousel-navigation .carousel__prev:hover,
.carousel-navigation .carousel__next:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
/*@media screen and (max-width: 500px) {
   
  }*/

  
@media screen and (max-width: 500px) {
  .categoria-titulo{
    padding-left:50px;
  }
}

@media screen and (max-width: 700px) {
  .categoria-titulo{
    padding-left:60px
  }
}

@media screen and (max-width: 930px) {
  .categoria-titulo{
    padding-left:60px
  }
}
@media screen and (max-width: 1150px) {
  .categoria-titulo{
    padding-left:40px
  }
}
@media screen and (max-width: 1350px){
  .categoria-titulo{
    padding-left:50px
  }
}
@media screen and (max-width: 1500px){
  .categoria-titulo{
    padding-left:35px;
  }
}
@media screen and (max-width: 2050px){
  .categoria-titulo{
    padding-left:60px;
  }
}
</style>
