<template>
  <v-card v-if="!currentWeather.isEmpty" class="mx-auto my-2" width="350">
    <v-card-title>{{ currentWeather.city }}</v-card-title>
    <div class="main-info">
      <div class="left">
        <img
          :src="require(`@/assets/weather-icons/${currentWeather.weatherIcon}.svg`)"
          alt="weather-icon"
        />
        <span class="left__description">{{ currentWeather.description }}</span>
      </div>
      <div class="right">
        <span class="right__degrees" v-html="`${currentWeather.temp}&degC`"></span>
      </div>
    </div>
    <v-card-text></v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>Tonight's availability</v-card-title>
    <v-card-text></v-card-text>
    <v-card-actions></v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "weather-card",
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "currentWeather",
    ]),
  },
  mounted() {
  },
};
</script>

<style scoped lang="less">
.main-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 110px;
    }
    .left__description::first-letter{
      text-transform: uppercase;
    }
  }
  .right {
    margin-top: 11px;
    .right__degrees{
      font-size: 60px;
    }
  }
}
</style>
