<template>
  <v-text-field
    v-model="cityName"
    label="Найди свой город"
    append-icon="mdi-cloud-search"
    color="accent"
    shaped
    filled
    @click:append="findWeatherByCity"
    @keyup.enter="findWeatherByCity"
  ></v-text-field>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "search-field",
  data() {
    return {
      cityName: ""
    };
  },
  methods: {
    ...mapActions(["getWeather"]),
    findWeatherByCity() {
      this.getWeather({ cityName: this.cityName });
    },
  },
};
</script>

<style scoped>

</style>