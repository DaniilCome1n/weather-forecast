<template>
  <div class="main-wrapper">
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="5"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-card-title>Cafe Badilico</v-card-title>
      <v-card-text></v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Tonight's availability</v-card-title>
      <v-card-text></v-card-text>
      <v-card-actions></v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "main-layout",
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.getWeather()
  },
  methods:{
    ...mapActions([
      'getWeather'
    ]),
  }
};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  height: 100vh;
  position: absolute;
  background-image: url("../assets/img/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
