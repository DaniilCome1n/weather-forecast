import Vue from "vue";
import Vuex from "vuex";
import baseURL from "@/plugins/baseUrl";
import getQuery from "@/plugins/getQuery";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: "3ef8cdde52fcb98a90ec0fc5a0f5f476",
    weatherByCity: {},
    geo: null,
    error: "",
  },
  mutations: {
    setWeather(state, weather) {
      state.weatherByCity = weather;
    },
    setError(state, error) {
      state.error = error;
    },
    setGeo(state, geo) {
      state.geo = geo;
    },
  },
  getters: {
    currentWeather: (state) => {
      let isForecastEmpty = Object.keys(state.weatherByCity).length === 0;
      return {
        isEmpty: isForecastEmpty,
        city: isForecastEmpty ? "" : state.weatherByCity.name,
        weatherIcon: isForecastEmpty
          ? "01n"
          : state.weatherByCity.weather[0].icon,
        description: isForecastEmpty
          ? ""
          : state.weatherByCity.weather[0].description,
        temp: isForecastEmpty ? 0 : Math.floor(state.weatherByCity.main.temp),
        feelsLike: isForecastEmpty
          ? 0
          : Math.floor(state.weatherByCity.main.feels_like),
        wind: isForecastEmpty ? 0 : state.weatherByCity.wind.speed.toFixed(1),
      };
    },
    geo: (state) => {
      return state.geo;
    },
    error: (state) => {
      return state.error;
    },
  },
  actions: {
    async getWeather({ commit }, { cityName, lat, lon }) {
      commit("setError", "");
      const q = lat && lon ? "" : cityName || "Krasnodar";
      const data = {
        q: q,
        lat: lat,
        lon: lon,
      };
      const response = await fetch(
        `${baseURL}?${getQuery(data)}&units=metric&lang=ru&appid=${
          this.state.apiKey
        }`
      );
      const currentWeather = await response.json();
      if (currentWeather.cod === "404") {
        const error = "Город не найден";
        commit("setError", error);
        return;
      }
      commit("setWeather", currentWeather);
    },
  },
  modules: {},
});
