<template>
  <div class="container">
    <div class="header">
      <h1>WEATHER APP</h1>
      <div class="search-bar">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="search-input"
        />
        <button @click="searchByCity" class="search-button">Search</button>
      </div>
    </div>
    <main>
      <div v-if="weatherData">
        <h2>
          {{ weatherData.name }}, {{ weatherData.sys.country }}
        </h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

const apikey = 'fb2ff5c520fc1e462ef408ea01d314ac';

export default {
  name: "App",
  data() {
    return {
      city: "", // 搜索框输入的城市
      weatherData: null, // 存储天气数据
    };
  },
  computed: {
    // 计算温度并转换为摄氏度
    temperature() {
      return this.weatherData
        ? Math.floor(this.weatherData.main.temp - 273.15)
        : null;
    },
    // 获取天气图标的URL
    iconUrl() {
      return this.weatherData
        ? `http://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : null;
    },
  },
  mounted() {
    // 获取当前用户位置的天气
    this.fetchCurrentLocationWeather();
  },
  methods: {
    // 获取当前用户位置的天气数据
    async fetchCurrentLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
          await this.fetchWeatherData(url);
        });
      }
    },
    // 根据输入框的城市名获取天气数据
    async searchByCity() {
      if (this.city) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
        await this.fetchWeatherData(url);
      }
    },
    // 请求天气API数据
    async fetchWeatherData(url) {
      try {
        const response = await axios.get(url);
        this.weatherData = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.header {
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.search-input {
  padding: 10px;
  font-size: 16px;
}

.search-button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}

main {
  margin-top: 20px;
}

img {
  width: 100px;
  height: 100px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 20px;
}

span {
  font-size: 18px;
  color: gray;
}
</style>