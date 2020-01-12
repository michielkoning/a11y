import Vue from 'vue';
import Router from 'vue-router';
import Modal from './views/Modal.vue';
import Cards from './views/Cards.vue';
import Accordeon from './views/Accordeon.vue';
import Tabs from './views/Tabs.vue';
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
      path: '/cards',
      component: Cards,
      meta: {
        step: 0,
      },
    },
    {
      path: '/modal',
      component: Modal,
      meta: {
        step: 1,
      },
    },
    {
      path: '/autocomplete',
      component: Autocomplete,
      meta: {
        step: 2,
      },
    },
    {
      path: '/tabs',
      component: Tabs,
      meta: {
        step: 5,
      },
    },
    {
      path: '/accordeon',
      component: Accordeon,
      meta: {
        step: 6,
      },
    },
  ],
});
