import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import TugasList from '../views/TugasList.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/tugas', component: TugasList }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
