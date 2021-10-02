<template>
  <div class="app-bar">
    <v-app-bar color="deep-purple accent-4" app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Jogos e Animes</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/jogos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-gamepad-variant-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Jogos</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/anime">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-movie-edit-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Animes</v-list-item-title>
            </v-list-item>
          </router-link>
          <!-- <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sobre</v-list-item-title>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
* {
  font-family: above;
}
.app-bar a {
  text-decoration: none;
}
</style>
