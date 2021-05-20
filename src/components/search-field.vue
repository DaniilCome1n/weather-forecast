<template>
  <v-text-field
    v-model="cityName"
    label="Найди свой город"
    append-icon="mdi-compass"
    color="accent"
    shaped
    filled
    @click:append="findWeatherByCoords"
    @keyup.enter="findWeatherByCity"
  ></v-text-field>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "search-field",
  data() {
    return {
      cityName: "",
    };
  },
  computed: {
    ...mapGetters(["geo"]),
  },
  methods: {
    ...mapActions(["getWeather"]),
    findWeatherByCity() {
      this.getWeather({ cityName: this.cityName });
    },
    findWeatherByCoords() {
      this.getWeather({ lat: this.geo.lat, lon: this.geo.lon });
    },
  },
};
</script>

<style scoped></style>
