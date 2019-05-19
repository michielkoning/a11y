<template>
  <nav aria-labelledby="menu-title">
    <h2 id="menu-title" class="sr-only" tabindex="-1">{{ $t('mainNavigation') }}</h2>
    <ul>
      <li>
        <router-link to="/modal">Modal</router-link>
      </li>
      <li>
        <router-link to="/autocomplete">Autocomplete</router-link>
      </li>
      <li>
        <router-link to="/">Caroussel</router-link>
      </li>
      <li>
        <router-link to="/">Tabs</router-link>
      </li>
      <li>
        <router-link to="/">Accordeon</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppBadge from '@/components/AppBadge.vue';
import { mapState } from 'vuex';

export default {
  components: {
    AppBadge,
  },
  computed: {
    ...mapState('tour', ['list']),
  },
};
</script>

<style lang="postcss" scoped>
nav {
  padding: 1em;
}

ul {
  @mixin list-reset;

  margin-bottom: 1em;
}

a {
  align-items: center;
  display: flex;
  position: relative;
}
</style>
