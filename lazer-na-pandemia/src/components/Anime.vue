<template>
</template>

<script>
export default {
  data() {
    return {
      animeList: [],
    };
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json")
      .then((response) => response.json())
      .then((json) => {
        this.animeList = json;
      });
  },
};
</script>

<style scoped></style>
