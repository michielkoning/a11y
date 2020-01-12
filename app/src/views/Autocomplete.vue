<template>
  <app-page title="Autocomplete">
    <autocomplete id="countries" v-model="search" name="Zoek naar landen" :list="countries"/>
    {{ search }}
    <a
      href="https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.0pattern/combobox-autocomplete-list.html"
    >guidelines</a>
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
      countries: [],
      search: '',
    };
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    getCountries() {
      fetch('/data/countries.json')
        .then(response => response.json())
        .then(data => {
          this.countries = data.map(item => item.name);
        });
    },
  },
};
</script>

<style lang="postcss" scoped>
.text {
  max-width: var(--container-width-sm);
}
</style>
