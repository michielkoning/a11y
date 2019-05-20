<template>
  <div class="autocomplete">
    <label :for="id">{{ name }}</label>
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
      @keydown.tab="close"
    />
    <icon icon="search" title="Zoeken" />
    <ul v-if="isOpen">
      <li
        v-for="(result, index) in results"
        :key="result.value"
        tabindex="-1"
        :class="{ 'is-active': index === arrowCounter }"
        @click="selectResult(result)"
        v-html="result.title"
      />
    </ul>
    <div role="status" aria-live="assertive" aria-relevant="additions" class="sr-only">
      {{ statusText }}
    </div>
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
    name: {
      type: String,
      default: '',
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
    statusText() {
      if (this.results.length) {
        const resultsLabel =
          this.results.length === 1
            ? 'Er is 1 resultaat beschikbaar'
            : `Er zijn ${this.results.length} resultaten beschikbaar.`;
        return `${resultsLabel} Gebruik de pijltjestoetsen om te navigeren door de resultaten`;
      } else if (this.searchTerm) {
        return 'Er zijn geen resultaten beschikbaar.';
      }
      return '';
    },
    isOpen() {
      return this.results.length > 0;
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
        const results = this.list
          .filter(item => {
            const term = this.searchTerm.toLowerCase();
            return item.toLowerCase().includes(term);
          })
          .slice(0, 10);

        this.results = results.map(item => ({
          value: item,
          // make current searchterm bold with a regex
          title: item.replace(
            new RegExp(`(^|)(${this.searchTerm})(|$)`, 'ig'),
            '$1<span class="highlight">$2</span>$3',
          ),
        }));
      } else {
        this.close();
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
      this.searchTerm = result.value;
      this.close();
      this.$emit('input', this.searchTerm);
    },
    reset() {
      this.searchTerm = '';
      this.close();
    },
    close() {
      this.results = [];
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.close();
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

>>> .highlight {
  font-weight: var(--font-weight-bold);
}
</style>
