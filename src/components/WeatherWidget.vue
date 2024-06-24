<template>
    <div class="weather-widget">
      <q-card class="q-ma-md" flat bordered>
        <q-card-section>
          <div class="widget-title">Cuaca Saat Ini</div>
        </q-card-section>
        <q-card-section class="input-section">
          <q-input v-model="city" label="Masukkan Kota" dense outlined class="input-field" />
          <q-btn @click="getWeather" color="primary" label="Cari" dense class="search-btn" />
        </q-card-section>
        <q-card-section v-if="weather" class="weather-info" v-cloak>
          <div class="weather-location">{{ weather.name }}</div>
          <div class="weather-temp">Temperatur: {{ weather.main.temp }}°C</div>
          <div class="weather-description">Deskripsi: {{ translateDescription(weather.weather[0].description) }}</div>
        </q-card-section>
        <q-card-section v-if="error" class="error-section">
          <div class="error-message">{{ error }}</div>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'WeatherWidget',
    data() {
      return {
        city: '',
        weather: null,
        error: null,
        apiKey: 'd298c515fe18c45c2707834b3439d31d' // Masukkan API key Anda di sini
      };
    },
    methods: {
      async getWeather() {
        this.weather = null; // Reset data cuaca sebelumnya
        this.error = null;   // Reset pesan error sebelumnya
        try {
          const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
              q: this.city,
              units: 'metric',
              appid: this.apiKey
            }
          });
          this.weather = response.data;
        } catch (err) {
          if (err.response && err.response.data && err.response.data.message) {
            this.error = `Error: ${err.response.data.message}`;
          } else {
            this.error = 'Error: Tidak dapat mengambil data cuaca.';
          }
        }
      },
      translateDescription(description) {
        // Fungsi untuk menerjemahkan deskripsi cuaca ke bahasa Indonesia
        switch (description.toLowerCase()) {
          case 'clear sky':
            return 'Langit Cerah';
          case 'few clouds':
            return 'Berawan Sedikit';
          case 'scattered clouds':
            return 'Berawan';
          case 'shower rain':
            return 'Hujan Rintik';
          case 'rain':
            return 'Hujan';
          case 'overcast clouds':
            return 'Berawan Mendung';
          case 'thunderstorm':
            return 'Badai Petir';
          case 'snow':
            return 'Salju';
          case 'mist':
            return 'Kabut';
          default:
            return description;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .weather-widget {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .widget-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-align: center;
  }
  
  .input-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .input-field {
    flex: 1;
    margin-right: 10px;
    font-size: 14px;
  }
  
  .search-btn {
    min-width: 80px;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .search-btn:hover {
    background-color: #4caf50;
    transform: scale(1.05);
  }
  
  .weather-info {
    margin-top: 16px;
    padding: 16px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s, transform 0.3s;
  }
  
  .weather-info:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }
  
  .weather-location {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
  }
  
  .weather-temp {
    font-size: 18px;
    color: #555;
  }
  
  .weather-description {
    font-size: 16px;
    color: #666;
    margin-top: 8px;
  }
  
  .error-section {
    margin-top: 16px;
  }
  
  .error-message {
    color: #f44336;
    font-size: 14px;
  }
  </style>
