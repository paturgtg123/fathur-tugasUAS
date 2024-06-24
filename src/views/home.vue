<template>
    <div class="home-container">
      <WeatherWidget />
    </div>
  </template>
  
  <script>
  import WeatherWidget from '../components/WeatherWidget.vue';
  
  export default {
    name: 'Home',
    components: {
      WeatherWidget
    }
  };
  </script>
  
  <style>
   body {
    background-image: url('../assets/bg.png'); 
    background-size: cover;
    background-repeat: no-repeat;
  }
  .home-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  </style>
  