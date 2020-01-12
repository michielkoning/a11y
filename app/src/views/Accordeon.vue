<template>
  <app-page title="Accordeon">
    <div class="text">
      <details>
        <summary>What is the population of New Orleans?</summary>According to 2010 Census Bureau
        estimates, New Orleans' population is made up of approximately 343,829 residents.
      </details>

      <details>
        <summary>What's a Po' Boy?</summary>A po' boy (also po-boy, po boy) is a traditional
        sandwich from Louisiana. It almost always consists of meat, which is usually roast beef or
        fried seafood, often shrimp, crawfish, fish, oysters or crab.
      </details>

      <details> <summary>How do I get to New Orleans?</summary>Use Google Maps. </details>
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue';

export default {
  components: {
    AppPage,
  },
};
</script>

<style lang="postcss" scoped>
.text {
  max-width: var(--container-width-sm);
}

summary {
  font-weight: var(--font-weight-bold);
}

details[open] {
  margin-bottom: 1em;
}
</style>
