<template>
  <div id="app">
    <app-header />

    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style scoped lang="postcss">
@import './styles/base.css';
</style>
