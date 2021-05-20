<template>
  <v-card
    v-if="!currentWeather.isEmpty"
    class="mx-auto"
    min-width="360"
    max-width="350"
    color="secondary"
    elevation="7"
  >
    <SearchField />
    <v-card-title v-if="error === ''" class="py-0">{{
      currentWeather.city
    }}</v-card-title>
    <v-card-title v-else>{{ error }}</v-card-title>
    <div class="main-info py-0 px-4" v-if="error === ''">
      <div class="left">
        <img
          :src="
            require(`@/assets/weather-icons/${currentWeather.weatherIcon}.svg`)
          "
          alt="weather-icon"
          class="mt-1"
        />
      </div>
      <div class="right">
        <span
          class="right__degrees"
          v-html="`${currentWeather.temp}&degC`"
        ></span>
      </div>
    </div>
    <div class="sub-info px-4 mb-4 d-flex flex-column" v-if="error === ''">
      <span class="sub-info__description">{{
        currentWeather.description
      }}</span>
      <div class="bottom d-flex justify-space-between">
        <span class="bottom__wind">Ветер: {{ currentWeather.wind }}м/с</span>
        <span
          class="bottom__feels-like"
          v-html="`Ощущается как: ${currentWeather.feelsLike}&degC`"
        ></span>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import SearchField from "@/components/search-field";

export default {
  components: {
    SearchField,
  },
  name: "weather-card",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentWeather", "error"]),
  },
  mounted() {},
};
</script>

<style scoped lang="less">
.main-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    img {
      width: 110px;
    }
  }
  .right {
    margin-top: 11px;
    .right__degrees {
      font-size: 60px;
    }
  }
}
.sub-info {
  .sub-info__description {
    white-space: nowrap;
  }
  .sub-info__description::first-letter {
    text-transform: uppercase;
  }
}
</style>
