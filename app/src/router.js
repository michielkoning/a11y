import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Modal from './views/Modal.vue';
import Cards from './views/Cards.vue';

import Autocomplete from './views/Autocomplete.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/cards',
      component: Cards,
    },
    {
      path: '/modal',
      component: Modal,
    },
    {
      path: '/autocomplete',
      component: Autocomplete,
    },
  ],
});
