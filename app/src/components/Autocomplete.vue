<template>
  <div class="autocomplete">
    <input
      :id="id"
      v-model="searchTerm"
      maxlength="100"
      type="search"
      autocomplete="off"
      @input="onChange"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter.prevent="onEnter"
      @keydown.esc.prevent="reset"
      @keydown.tab="reset"
    />
    <icon icon="search" title="Zoeken" />
    <ul v-show="isOpen" id="autocomplete-results">
      <li
        v-for="(result, index) in results"
        :key="result.slug"
        :class="{ 'is-active': index === arrowCounter }"
        @click="selectResult(result)"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/AppIcon.vue';

export default {
  components: {
    Icon,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      results: [],
      searchTerm: '',
      arrowCounter: 0,
    };
  },
  computed: {
    isOpen() {
      return this.results.length > 0;
    },
  },

  watch: {
    searchTerm() {
      this.$emit('change', this.searchTerm);
    },
  },

  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    this.searchTerm = this.value;
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },

  methods: {
    onChange() {
      if (this.searchTerm.length > 0 && this.list.length > -1) {
        this.results = this.list
          .filter(accessory => {
            const term = this.searchTerm.toLowerCase();
            return accessory.toLowerCase().includes(term);
          })
          .slice(0, 10);
      } else {
        this.reset();
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length - 1) {
        this.arrowCounter += 1;
      } else {
        this.arrowCounter = 0;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter -= 1;
      } else {
        this.arrowCounter = this.results.length - 1;
      }
    },
    onEnter() {
      const result = this.results[this.arrowCounter];
      if (result) this.selectResult(result);
    },
    selectResult(result) {
      this.searchTerm = result;
      this.reset();
    },
    reset() {
      this.results = [];
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.reset();
      }
    },
  },
};
</script>

<style scoped lang="postcss">
input {
  width: 100%;
}

.autocomplete {
  margin-bottom: 1em;
  position: relative;

  &:focus-within {
    input {
      border-color: var(--color-gray);
    }
    & svg {
      color: var(--color-gray);
    }
  }
}

svg {
  position: absolute;
  right: 0.5em;
  top: 50%;
  margin-top: -12px;
  color: $color-border;
  transition: color 0.2s ease-in-out;
}

ul {
  @mixin list-reset;

  border: 2px solid var(--color-gray);
  border-top: 0;
  position: absolute;
  background: var(--color-white);
  top: 100%;
  left: 0;
  right: 0;
  z-index: 9;
}

li {
  padding: 0.25em 0.625rem;
  cursor: pointer;

  &.is-active,
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
}
</style>
