<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-info">
      <q-toolbar color="primary" class="q-pa-md">
        <q-toolbar-title class="text-white">Prediksi Cuaca Hari Ini</q-toolbar-title>
        <q-space />
        <tugas-dropdown />
      </q-toolbar>
    </q-header>
    <q-page-container class="q-ma-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import TugasDropdown from './components/TugasDropdown.vue';

export default {
  name: 'App',
  components: {
    TugasDropdown
  }
};
</script>

<style scoped>
/* Gaya global */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

/* Gaya header */
.q-header {
  background-color: rgb(22, 216, 226); 
  backdrop-filter: blur(10px); 
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease; 
}

.q-toolbar-title {
  font-size: 32px; 
  font-weight: 600; 
  letter-spacing: 0.5px; 
  color: white; 
}

.text-white {
  color: white;
}


/* Gaya tombol */
.q-btn {
  min-width: 140px; 
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 4px;
  background-color: #4caf50; 
  color: white;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Transisi halus */
}

.q-btn:hover {
  background-color: #388e3c; /* Warna lebih gelap saat dihover */
  transform: scale(1.05); /* Perbesar tombol sedikit saat dihover */
}

/* Gaya input */
.q-input {
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease; /* Transisi halus */
}

.q-input:focus {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Bayangan lebih jelas saat fokus */
}
</style>
