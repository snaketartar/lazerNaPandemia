<template>
  <v-app>
    <AppBar />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/shared/AppBar.vue';
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    AppBar
  },
};
</script>
