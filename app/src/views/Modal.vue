<template>
  <app-page title="Modal">
    <app-modal v-if="showModal" title="Titel van de modal" @close="toggleModal">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur molestiae
        voluptatem officia harum minima nobis. Autem nesciunt sint dolor voluptates a tenetur,
        repellendus libero quo qui provident? Quod, culpa.
      </p>
      <fieldset>
        <legend class="sr-only">Form</legend>
        <div class="form-item">
          <label for="name">Name</label>
          <input id="user" type="text" />
        </div>
        <div class="form-item">
          <label for="email">Email</label>
          <input id="email" type="email" />
        </div>
      </fieldset>
    </app-modal>
    <button ref="button" @click="toggleModal">Show modal</button>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue';
import AppModal from '@/components/AppModal.vue';

export default {
  components: {
    AppPage,
    AppModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      if (!this.showModal) {
        this.$refs.button.focus();
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.text {
  max-width: var(--container-width-sm);
}
</style>
