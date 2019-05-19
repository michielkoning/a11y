<template>
  <app-page title="Home"></app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue';

export default {
  components: {
    AppPage,
  },
};
</script>

<style lang="postcss" scoped>
.wrapper {
  @mixin center;

  margin-bottom: 3em;
  max-width: var(--container-width-xlg);
}
</style>
