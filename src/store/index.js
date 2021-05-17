import Vue from "vue";
import Vuex from "vuex";
import baseURL from "@/plugins/baseUrl";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: "3ef8cdde52fcb98a90ec0fc5a0f5f476",
    weatherByCity: {},
  },
  mutations: {
    setWeather(state, weather) {
      state.weatherByCity = weather;
    },
  },
  getters:{
    currentWeather: state => {
      let isForecastEmpty = Object.keys(state.weatherByCity).length === 0;
      return {
        isEmpty: isForecastEmpty,
        city: isForecastEmpty ?  "" : state.weatherByCity.name,
        weatherIcon: isForecastEmpty ?  "01n" : state.weatherByCity.weather[0].icon,
        description: isForecastEmpty ?  "" : state.weatherByCity.weather[0].description,
        temp : isForecastEmpty ?  0 : Math.floor(state.weatherByCity.main.temp)
      }
    },
  },
  actions: {
    async getWeather({ commit },cityName) {
      if (!cityName) {
        cityName = "Krasnodar";
      }
      const response = await fetch(
        `${baseURL}?q=${cityName}&units=metric&lang=ru&appid=${this.state.apiKey}`
      );
      const currentWeather = await response.json();
      if (currentWeather.cod === "404") {
        console.log("Город не найден");
        return;
      }
      commit("setWeather", currentWeather);
    },
  },
  modules: {},
});
