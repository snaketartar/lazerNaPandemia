<template>
  <v-container>
    <h4>Nós separamos uma lista com os jogos mais prestigiados da história! </h4>

    <JogosLista :jogos="jogosOrdenados"/>
    
  </v-container>
</template>

<script>

import JogosLista from '../components/JogosLista';

export default {
  name: 'Jogos',
  components: {
    JogosLista
  },
  data() {
    return {
      jogos: []
    }
  },
  created() {
    fetch('https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json')
      .then(response => response.json())
      .then(json => {
        this.jogos = json;
      })
  },
  computed: {
    jogosOrdenados() {
      const listaComputada = this.jogos.slice(0).sort(
        (a, b) =>  a.pontos < b.pontos ? +1 : 1
      );
      return listaComputada;
    }
  }
}
</script>

<style scoped>
.p {
  font-size: 20px !important;
}
</style>