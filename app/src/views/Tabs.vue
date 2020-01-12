<template>
  <app-page title="Tabs">
    <div class="tabs">
      <template v-for="(item, index) in items">
        <button
          :key="`button-${index}`"
          role="presentation"
          :aria-expanded="item.expanded"
          @click="toggleTab(item)"
        >
          {{ item.title }}
        </button>
        <div :key="`text-${index}`" :aria-hidden="!item.expanded" role="tabpanel" class="content">
          <p>{{ item.text }}</p>
          <a href="#">Lees meer over ...</a>
        </div>
      </template>
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue';

export default {
  components: {
    AppPage,
  },
  data() {
    return {
      items: [
        {
          title: 'Waak over je privacy',
          text:
            'Topman Mark Zuckerberg mijmerde in het boek Het Facebook-effect al dat het zijn ideaal is als je via zijn vinding jarenlang de complete levenslijn van een persoon kunt volgen. Dat zal niet iedereen aanspreken, zeker niet omdat het bedrijf toch al onder vuur ligt vanwege privacy-schendingen. ',
          expanded: true,
        },
        {
          title: 'Het is verslavend',
          text:
            "Nieuwkomers op Facebook verwonderen zich over zoveel gebruiksgemak. En wat grappig, de eerste keer dat iemand 'vind ik leuk' aanvinkt bij een bericht dat je hebt geplaatst. Lichtelijk verslavend ook, die 'likes' of aardige reacties. Maar ja, het zorgt er in veel gevallen wel voor dat je vervolgens na ieder geplaatst bericht om de haverklap gaat zitten kijken wie (is er dan echt niemand die mij leuk vindt?) heeft gereageerd op jouw spitsvondigheid.",
          expanded: false,
        },
        {
          title: 'Genoeg van small talk ',
          text:
            'Niks mis met een onschuldig praatje over het weer. Maar waarom melden sommige mensen met droge ogen op hun prikbord dat ze zojuist de vuilniszakken buiten hebben gezet? Of dat zoonlief van acht maanden de broek vol heeft? Of dat het zaterdag is? Op Facebook regeert de overtreffende trap van small talk. Willen we dit allemaal weten?',
          expanded: false,
        },
      ],
    };
  },
  methods: {
    toggleTab(tab) {
      const tabToClose = this.items.find(item => item.expanded === true);

      if (tabToClose === tab) return;

      tabToClose.expanded = false;

      const tabToOpen = this.items.find(item => item === tab);
      tabToOpen.expanded = true;
    },
  },
};
</script>

<style lang="postcss" scoped>
.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

button {
  border-radius: 1em 1em 0 0;
  border: 2px solid #ccc;
  padding: 1em;
  flex: 1 1 auto;
  order: -1;
  text-align: center;
  &[aria-expanded='true'] {
    border-bottom-color: transparent;
  }
}

.content {
  padding: 1em;
  flex: 0 0 100%;
  border: 2px solid #ccc;
  border-top: 0;
}

[aria-hidden] {
  display: none;
}
</style>
