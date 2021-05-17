<template>
  <div class="main-wrapper">
    <div class="search-wrapper">
      <v-text-field
        v-model="cityName"
        label="Найди свой город"
        append-icon="mdi-cloud-search"
        outlined
        shaped
        @click:append="findWeatherByCity"
      ></v-text-field>
    </div>
    <weatherCard />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import weatherCard from "@/components/weather-card";

export default {
  components: {
    weatherCard,
  },
  name: "main-layout",
  data() {
    return {
      cityName: "",
    };
  },
  async mounted() {
    await this.getWeather();
  },
  methods: {
    ...mapActions(["getWeather"]),
    findWeatherByCity() {
      this.getWeather(this.cityName);
    },
  },
};
</script>

<style scoped lang="less">
.main-wrapper {
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height: 100vh;
  position: absolute;
  background-image: url("../assets/img/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .search-wrapper {
    height: 50px;
    width: 350px;
  }
}
</style>
