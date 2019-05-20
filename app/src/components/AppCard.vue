<template>
  <div class="item" @click="goToPage">
    <h2>{{ content.title }}</h2>
    <div class="image-wrapper">
      <img :src="content.image" :alt="content.alt" />
    </div>
    <p>{{ content.text }}</p>
    <a ref="link" :href="content.url" class="read-more">
      Lees meer over {{ content.link }} van
      <span lang="en">Facebook</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToPage(event) {
      if (event.target !== this.$refs.link) {
        this.$router.push(this.content.url);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.item {
  display: flex;
  flex-direction: column;
}

.image-wrapper {
  order: -1;
}

.item {
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
  border-radius: 0.25em 0.25em 0 0;
  margin: -0.5em -0.5em 0;
  overflow: hidden;
  margin-bottom: 1em;
}
</style>
