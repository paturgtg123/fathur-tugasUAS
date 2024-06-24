<template>
  <q-btn-dropdown
    label="List Tugas Fathur"
    color="primary"
    split
    class="q-ma-md"
  >
    <q-list style="min-width: 150px;">
      <q-item v-for="tugas in tugasList" :key="tugas.name" clickable tag="a" :href="tugas.url" target="_blank">
        <q-item-section>{{ tugas.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {
  name: 'TugasDropdown',
  data() {
    return {
      tugasList: [
        { name: 'TUGAS 1', url: 'https://fathur-projec-cv.netlify.app/' },
        { name: 'TUGAS 2', url: 'https://fathur-tugas2.vercel.app' },
        { name: 'TUGAS 3', url: 'https://223510705-mufliffadhlurrochman.vercel.app' },
        { name: 'TUGAS 4', url: 'https://fathur-tugas4.vercel.app' },
        { name: 'TUGAS 5', url: 'https://fathur-tugas5.vercel.app' },
        { name: 'TUGAS 6', url: 'https://fathur-tugasper6.vercel.app' },
        { name: 'TUGAS 7', url: 'https://fathur-tugas7.vercel.app' }
      ]
    };
  }
};
</script>

<style scoped>
.q-ma-md {
  margin: 16px;
}
</style>
