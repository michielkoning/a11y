<template>
  <app-page title="Autocomplete">
    <autocomplete />
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue';
import Autocomplete from '@/components/Autocomplete.vue';

export default {
  components: {
    AppPage,
    Autocomplete,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="postcss" scoped>
.text {
  max-width: var(--container-width-sm);
}
</style>
