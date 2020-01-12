<template>
  <li class="item" @mousedown="mouseDown" @mouseup="mouseUp">
    <h2>
      <a :href="url">{{ content.title }}</a>
    </h2>
    <div class="image-wrapper">
      <img :src="content.image" :alt="content.alt" />
    </div>
    <p>{{ content.text }}</p>

    <span class="cta" aria-hidden="true">Lees meer</span>
  </li>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      url: '/modal',
      down: null,
    };
  },
  methods: {
    mouseUp() {
      const up = +new Date();
      if (up - this.down < 200) {
        this.goToItem();
      }
    },
    mouseDown() {
      this.down = +new Date();
    },
    goToItem() {
      this.$router.push(this.url);
    },
  },
};
</script>

<style lang="postcss" scoped>
.item {
  display: flex;
  flex-direction: column;
  position: relative;

  &:focus-within,
  &:hover {
    box-shadow: 0 0 0 2px;
    outline: 2px solid transparent;

    a:focus {
      text-decoration: none;
    }
  }
}

.image-wrapper {
  order: -1;
}

.item {
  background: var(--color-gray-lighter);
  padding: 0.5em;
  border-radius: 0.25em;
  cursor: pointer;
}

a:focus {
  outline: none;
  text-decoration: underline;
}

.cta {
  margin-top: auto;
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
