<script setup>
import { reactive, ref, computed } from 'vue'


const porcentagem = ref()

function gerarPorcentagem() {
  porcentagem.value = Math.floor(Math.random() * 100) + 1;
}
const gradienteId = 'coracaoGradiente'
const selecionados = reactive({
  personagem1: {
    foto: '',
    nome: '',
  },
  personagem2: {
    foto: '',
    nome: '',
  },
})

const aparecer = ref('none')
const cobrir = ref('')


const vazio = computed(() => {
  return (
    selecionados.personagem1.foto ||
    selecionados.personagem1.nome ||
    selecionados.personagem2.foto ||
    selecionados.personagem2.nome
  )
})


function voltar(){
    selecionados.personagem1.foto = '';
    selecionados.personagem1.nome = '';
    selecionados.personagem2.foto = '';
    selecionados.personagem2.nome =''
}

const camposPreenchidos = computed(() => {
  return Object.values(selecionados).every(
    personagem => personagem.foto !== ''
  );
});

const verificarVisibilidade = (personagem, tipo) => {
  return personagem.nome === tipo? 'desabilitado' : '';
}


const personagens = ref([
  {
    id: 1,
    nome: 'Frankie Stein',
    imagem: 'src/assets/imagens/frank.png',
    imagemInteira: 'src/assets/imagens/frankie2.png',
  },
  {
    id: 2,
    nome: 'Draculaura',
    imagem: 'src/assets/imagens/draculaura.png',
    imagemInteira: 'src/assets/imagens/draculaura2.png',
  },
  {
    id: 3,
    nome: 'Clawdeen Wolf',
    imagem: 'src/assets/imagens/clawdeen.png',
    imagemInteira: 'src/assets/imagens/clawdeen2.png',
  },
  {
    id: 4,
    nome: 'Lagoona Blue',
    imagem: 'src/assets/imagens/lagoona.png',
    imagemInteira: 'src/assets/imagens/lagoona2.png',
  },
  {
    id: 5,
    nome: 'Cleo de Nile',
    imagem: 'src/assets/imagens/cleo.png',
    imagemInteira: 'src/assets/imagens/cleo2.png',
  },
  {
    id: 6,
    nome: 'Ghoulia Yelps',
    imagem: 'src/assets/imagens/ghoulia.png',
    imagemInteira: 'src/assets/imagens/ghoulia2.png',
  },
  {
    id: 7,
    nome: 'Abbey Bominable',
    imagem: 'src/assets/imagens/abby.png',
    imagemInteira: 'src/assets/imagens/abbey2.png',
  },
  {
    id: 8,
    nome: 'Spectra Vondergeist',
    imagem: 'src/assets/imagens/spcetra.png',
    imagemInteira: 'src/assets/imagens/spcetra2.png',
  },
  {
    id: 9,
    nome: 'Deuce Gorgon',
    imagem: 'src/assets/imagens/deucegorgon.png',
    imagemInteira: 'src/assets/imagens/deucegorgon2.png',
  },
  {
    id: 10,
    nome: 'Clawd Wolf',
    imagem: 'src/assets/imagens/clawd.png',
    imagemInteira: 'src/assets/imagens/clawd2.png',
  },
  {
    id: 11,
    nome: 'C.A. Cupid',
    imagem: 'src/assets/imagens/cupido.png',
    imagemInteira: 'src/assets/imagens/cupido2.png',
  },
  {
    id: 12,
    nome: 'Elissabat',
    imagem: 'src/assets/imagens/elissabet.png',
    imagemInteira: 'src/assets/imagens/elissabet2.png',
  },
  {
    id: 13,
    nome: 'Gil Webber',
    imagem: 'src/assets/imagens/gil.png',
    imagemInteira: 'src/assets/imagens/gil2.png',
  },
  {
    id: 14,
    nome: 'Heath Burns',
    imagem: 'src/assets/imagens/heart.png',
    imagemInteira: 'src/assets/imagens/heart2.png',
  },
  {
    id: 15,
    nome: 'Holt Hyde',
    imagem: 'src/assets/imagens/holt.png',
    imagemInteira: 'src/assets/imagens/holt2.png',
  },
  {
    id: 16,
    nome: 'Operetta',
    imagem: 'src/assets/imagens/operatta.png',
    imagemInteira: 'src/assets/imagens/operatta2.png',
  },
  {
    id: 17,
    nome: 'Rochelle Goyle',
    imagem: 'src/assets/imagens/rochelle.png',
    imagemInteira: 'src/assets/imagens/rochelle2.png',
  },
  {
    id: 18,
    nome: 'Skelita Calaveras',
    imagem: 'src/assets/imagens/skelita.png',
    imagemInteira: 'src/assets/imagens/skelita2.png',
  },
  {
    id: 19,
    nome: 'Venus McFlytrap',
    imagem: 'src/assets/imagens/venus.png',
    imagemInteira: 'src/assets/imagens/venus2.png',
  },
  {
    id: 20,
    nome: 'Toralei Stripe',
    imagem: 'src/assets/imagens/tolarei.png',
    imagemInteira: 'src/assets/imagens/tolarei2.png',
  },
])
</script>

<template>

  <main>
  <div :class="[cobrir, aparecer]" >
  <div class="coracao" >
    <svg width="100" height="100" viewBox="0 0 24 24" class="svg" >
    <defs>
      <linearGradient :id="gradienteId" x1="0" x2="0" y1="1" y2="0">
        <stop offset="0%" stop-color="#D82282" />
        <stop :offset="`${porcentagem}%`" stop-color="#D82282" />
        <stop :offset="`${porcentagem}%`" stop-color="#000000" />
        <stop offset="100%" stop-color="#000000" />
      </linearGradient>
    </defs>
    <path
      fill="none"
      stroke="#D82282"
      stroke-width="1"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      :class="aparecer"/>
    <path
      :fill="`url(#${gradienteId})`"
      d="M12 21.35l-1.45-1.32C5.4 15.36 
        2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
        4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 
        22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
        11.54L12 21.35z"
        :class="aparecer"
    />
    <text x="50%" y="50%" fill="white" font-size="5" text-anchor="middle" dy=".3em">
      {{ porcentagem }}%
    </text>
  </svg>

</div>
<button class="button-volta" @click="aparecer = 'none'; cobrir = ''; voltar()">Jogar de novo</button>
</div>
    <section class="content">
      <section class="personagens">
        <div
          v-for="personagem in personagens"
          :key="personagem.id"
          @click="
            selecionados.personagem1.foto = personagem.imagemInteira;
            selecionados.personagem1.nome = personagem.nome;
            
          "
          class="foto"
          :class="verificarVisibilidade(personagem, selecionados.personagem2.nome)"
        >
          <img :src="personagem.imagem" alt="" />
        </div>
        <div v-if="selecionados.personagem1.nome" class="nome-personagem">
          <p>{{ selecionados.personagem1.nome }}</p>
        </div>
      </section>
      <div v-if="!vazio" class="titulo">
       <h1>Calculadora do Amor</h1>
       <img src="/src/assets/imagens/logo.png" alt="">
       </div>
       <button v-if="camposPreenchidos && cobrir== ''" class="button" @click="aparecer = null ; cobrir= 'tudo';gerarPorcentagem()" >
          Calcular
       </button>
      <section>
        <div class="content-image">
          <img :src="selecionados.personagem1.foto" alt="" v-if="selecionados.personagem1.foto" />
        </div>
      </section>
    </section>
    <section class="content">
      <section>
        <div class="content-image">
          <img
            :src="selecionados.personagem2.foto"
            alt=""
            v-if="selecionados.personagem2.foto"
            class="imagem-direita"
          />
        </div>
      </section>
      <section class="personagens" >
        <div
          v-for="personagem in personagens"
          :key="personagem.id"
          @click="
            selecionados.personagem2.foto = personagem.imagemInteira;
            selecionados.personagem2.nome = personagem.nome;
          "
          @change="verificar(personagem)"
          class="foto" 
          :class="verificarVisibilidade(personagem, selecionados.personagem1.nome)"
        >
          <img :src="personagem.imagem" alt="" />
        </div>
        <div v-if="selecionados.personagem2.nome" class="nome-personagem">
          <p>{{ selecionados.personagem2.nome }}</p>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
  * {
    font-family: 'MonsterHigh', cursive;
    color: #ffffff;
  }

.desabilitado{
  opacity: 0.4;
  pointer-events: none;
}

.button-volta{
  background-color: #D82282;
  color: black;
  border: 1px solid black;
  transition: 0.3s ease;
}

.button-volta:hover{
  background-color:transparent;
  font-size: 35px;
  border: 1px solid white;
  color: white;
}

.tudo{
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color:#04040457;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12vh;
 transition:opacity 1s
}

main .titulo{
  display: flex;
  position: absolute;
 flex-wrap: wrap;
  left:30.5vw;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  margin-top: 10vh;
}

h1{
  margin: 0;
  width: 100%;
  letter-spacing: 2px;
  text-align: center;
}

.titulo img{
  width: 10%;
}

main {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
}

.content {
  display: flex;
  align-items: flex-start;
}

.content section {
  width: 24vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

section .personagens {
  height: 30%;
  display: flex;
  align-items: end;
  cursor: pointer;
}

.personagens .foto {
  width: 80px;
  border: 5px solid rgb(117, 117, 117);
  padding: 1px;
  margin: 2px;
  height: 80px;
  cursor: pointer;
}

.personagens .foto:hover{
  border: 5px solid #D82282;
}


.personagens div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-image {
  width: 75%;
  height: 75vh;
}
.content-image img {
  width: 100%;
  height: 100%;
}

.imagem-direita {
  transform: scaleX(-1);
}

.nome-personagem {
  font-size: 70px;
}

button{
  background-color:transparent;
  font-size: 35px;
  border: 1px solid white;
  border-radius: 50px;
  padding: 12px;
  letter-spacing: 2px;
  cursor: pointer;
}

.button{
  position: absolute;
  left: 46.5vw;
  z-index: 1;
  transition:0.3s ease;
}

.button:hover{
  background-color: #D82282;
  color: black;
  border: 1px solid black;
}

.tudo .coracao{
  animation: crescer 0.5s ease forwards;
}

.tudo button{
  display: block;
}

.none{
  display: none;
}

.block{
  display:flex;
}


@keyframes crescer{
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(3);

  }
}

/* responsividade */

@media (max-width:1600px) {
    .nome-personagem {
        font-size: 40px;
        width: 100%;
        text-align: center;
    }
    main .titulo {
        left: 28vw;
        text-align: center;
    }
}

@media(max-width: 1440px) {
    main .titulo {
        left: 27.5vw;
        font-size: 60px;
    }
    .personagens .foto {
        width: 65px;
        height: 65px;
    }
}

@media (max-width:1260px) {
    main .titulo {
        left: 33vw;
        font-size: 40px;
    }
    .button {
        left: 45.5vw;
        z-index: 1;
    }
    .personagens .foto {
        width: 60px;
        border: 2px solid rgb(117, 117, 117);
        height: 60px;
    }
    .personagens .foto:hover {
        border: 2px solid #D82282;
    }
}

@media (max-width:1100px) {
    main .titulo {
        left: 30vw;
    }
    .button {
        left: 44.5vw;
    }
}

@media(max-width:950px) {
    .personagens .foto {
        width: 50px;
        border: 1px solid rgb(117, 117, 117);
        height: 50px;
    }
    main .titulo {
        left: 31vw;
        font-size: 30px;
    }
    .content-image img {
        object-fit: contain;
    }
    section .content-image {
        height: 50vh;
    }
    .button {
        left: 44.5vw;
        font-size: 20px;
    }
    .nome-personagem {
        font-size: 30px;
    }
    @keyframes crescer {
        0% {
            transform: scale(0);
        }

        100% {
            transform: scale(2);

        }
    }
    .tudo {
        gap: 8vh;
    }
    .button-volta {
        font-size: 20px;
    }
}

@media (max-width:760px) {
    main .titulo {
        left: 30vw;
        font-size: 25px;
    }
    section .content-image {
        height: 70vh;
    }
}

@media(max-width:650px) {
    main .titulo {
        left: 26vw;
        font-size: 20px;
    }
}


@media (max-width:500px) {
    section .personagens {
        height: 10%;
    }
    .personagens .foto {
        width: 30px;
        height: 30px;
    }
    .content-image {
        width: 100%;
        height: 70vh;
    }
    .content-image img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
    section .content-image {
        height: 50vh;
        display: flex;
        align-items: center;
    }
    .personagens .foto:hover {
        border: 1px solid #D82282;
    }
    .nome-personagem {
        font-size: 20px;
    }
    button {
        font-size: 15px;
        padding: 5px;
        letter-spacing: 1px;
    }
    .button {
        left: 43vw;
    }
    main .titulo {
        left: 28vw;
        font-size: 15px;
    }
    .button-volta {
        padding: 8px;
    }
}

@media(max-width:410px) {
    main .titulo {
        left: 22vw;
    }
}

@media(max-width:370px) {
    main .titulo {
        left: 21vw;
        font-size: 10px;
    }
}


</style>
