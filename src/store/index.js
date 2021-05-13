import Vue from "vue";
import Vuex from "vuex";
import baseURL from "@/plugins/baseUrl";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: "3ef8cdde52fcb98a90ec0fc5a0f5f476",
  },
  mutations: {},
  actions: {
    async getWeather() {
      console.log(this.state.apiKey)
      await fetch(`${baseURL}?q=London&appid=${this.state.apiKey}`);
    },
  },
  modules: {},
});
