<template>
  <header>
    <main-navigation />
  </header>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue';

export default {
  components: {
    MainNavigation,
  },
};
</script>

<style lang="postcss" scoped>
header {
  padding: var(--gutter);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background: #999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--width-navigation-left);
}
</style>
