<template>
  <div id="app">
    <main-navigation />

    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue';

export default {
  components: {
    MainNavigation,
  },
};
</script>

<style scoped lang="postcss">
@import './styles/base.css';
</style>
