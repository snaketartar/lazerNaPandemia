<template>
  <v-container>
      <v-card  class="mb-6" v-for="jogo of jogos" :key="jogo.id"  outlined shaped tile>
          <v-card-title >
              <p class="title text-center my-2 teste"> #{{ jogo.id }} - {{ jogo.name }} </p>
          </v-card-title>
          <v-card-subtitle>
              {{ jogo.year }} - {{ jogo.genre }}
          </v-card-subtitle>
          <v-img class="mb-3" :src="jogo.photo" :alt="jogo.photo "/>
          <v-text class="pl-3">
              Disponível em:
              <v-list class="pl-6" v-for="plataforma of jogo.platform" :key="plataforma">
                  - {{ plataforma }}
              </v-list>
          </v-text>
      </v-card>
  </v-container>
</template>

<script>
export default {
    name: 'JogosLista',
    props: {
      jogos: {
        type: Array,
        required: true
        }
    }
}
</script>

<style scoped>
.v-list {
    font-size: 14px;
}
.teste {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: normal;
    hyphens: auto;
}
</style>