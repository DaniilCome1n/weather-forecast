<template>
  <div class="main-wrapper">
    <weatherCard />
  </div>
</template>

<script>
import weatherCard from "@/components/weather-card";
import { mapActions } from "vuex";

export default {
  components: {
    weatherCard,
  },
  name: "main-layout",
  data() {
    return {
      cityName: "",
      location: null,
    };
  },
  async mounted() {
    this.getWeather({});
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const geo = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        };

        this.$store.commit("setGeo", geo);
        this.getWeather({ lat: geo.lat, lon: geo.lon });
      },
      (err) => {
        console.log(err);
      }
    );
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
};
</script>

<style scoped lang="less">
.main-wrapper {
  font-family: "Montserrat", sans-serif;
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
