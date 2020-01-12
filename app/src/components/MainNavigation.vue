<template>
  <header>
    <h1>Components</h1>
    <nav aria-labelledby="menu-title">
      <h2 id="menu-title" class="sr-only" tabindex="-1">Main navigation</h2>
      <ul ref="list">
        <li>
          <router-link to="/cards">Cards</router-link>
        </li>
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
          <router-link to="/tabs">Tabs</router-link>
        </li>
        <li>
          <router-link to="/accordeon">Accordeon</router-link>
        </li>
        <li>
          <router-link to="/">Error handler</router-link>
        </li>
      </ul>
      <div class="arrow" :style="{ transform: arrowPosition }" />
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      arrowPosition: 0,
    };
  },
  watch: {
    $route(to) {
      const { step } = to.meta;
      const position = this.$refs.list.querySelector(`:nth-child(${step + 1}`).offsetTop;
      this.arrowPosition = `translateY(${position}px)`;
    },
  },
};
</script>

<style lang="postcss" scoped>
nav {
  position: relative;
}

ul {
  @mixin list-reset;

  margin-bottom: 1em;
}

a {
  color: currentColor;
}

.arrow {
  display: block;
  position: absolute;
  top: 0;
  right: -3em;
  border-top: 0.75em solid transparent;
  border-bottom: 0.75em solid transparent;
  border-left: 1em solid #999;
  transition: transform 0.2s ease-out;
}

header {
  padding: var(--gutter);
  background: #999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--width-navigation-left);
}
</style>
