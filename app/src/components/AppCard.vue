<template>
  <div class="item">
    <h2>{{ content.title }}</h2>
    <div class="image-wrapper">
      <img :src="content.image" :alt="content.alt">
    </div>
    <p>{{ content.text }}</p>
    <a href="#" class="read-more">Lees meer over {{ content.title | lowercase }}</a>
  </div>
</template>

<script>
export default {
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    },
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.item {
  display: flex;
  flex-direction: column;
  background: var(--color-gray-lighter);
  padding: 0.5em;
  border-radius: 0.25em;
}

a {
  margin-top: auto;
  display: block;
  height: 3em;
}

img {
  display: block;
  height: 12em;
  object-fit: cover;
  width: 100%;
}

.image-wrapper {
  order: -1;
  border-radius: 0.25em 0.25em 0 0;
  margin: -0.5em -0.5em 0;
  overflow: hidden;
  margin-bottom: 1em;
}
</style>
