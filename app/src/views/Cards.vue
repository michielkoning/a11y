<template>
  <app-page title="Cards">
    <h1>Redenen om met Facebook te stoppen</h1>
    <div class="news">
      <app-card v-for="item in items" :key="item.title" :content="item" />
    </div>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage.vue';
import AppCard from '@/components/AppCard.vue';

export default {
  components: {
    AppPage,
    AppCard,
  },
  data() {
    return {
      items: [
        {
          title: 'Waak over je privacy',
          text:
            'Topman Mark Zuckerberg mijmerde in het boek Het Facebook-effect al dat het zijn ideaal is als je via zijn vinding jarenlang de complete levenslijn van een persoon kunt volgen. Dat zal niet iedereen aanspreken, zeker niet omdat het bedrijf toch al onder vuur ligt vanwege privacy-schendingen. ',
          image: '/img/card-1.jpg',
          alt: 'Mark Zuckberg lacht terwijl hij je privacy schendt',
          link: 'privacyschening',
          url: '#privary',
        },
        {
          title: 'Het is verslavend',
          text:
            "Nieuwkomers op Facebook verwonderen zich over zoveel gebruiksgemak. En wat grappig, de eerste keer dat iemand 'vind ik leuk' aanvinkt bij een bericht dat je hebt geplaatst. Lichtelijk verslavend ook, die 'likes' of aardige reacties. Maar ja, het zorgt er in veel gevallen wel voor dat je vervolgens na ieder geplaatst bericht om de haverklap gaat zitten kijken wie (is er dan echt niemand die mij leuk vindt?) heeft gereageerd op jouw spitsvondigheid.",
          image: '/img/card-2.jpg',
          alt: 'Mark Zuckberg kijkt moeilijk',
          link: 'verslaving',
          url: '#verslaving',
        },
        {
          title: 'Genoeg van small talk ',
          text:
            'Niks mis met een onschuldig praatje over het weer. Maar waarom melden sommige mensen met droge ogen op hun prikbord dat ze zojuist de vuilniszakken buiten hebben gezet? Of dat zoonlief van acht maanden de broek vol heeft? Of dat het zaterdag is? Op Facebook regeert de overtreffende trap van small talk. Willen we dit allemaal weten?',
          image: '/img/card-3.jpg',
          alt: 'Mark Zuckberg kijkt verbaasd, maar laat gerust je tijd verspillen',
          link: 'onzin',
          url: '#onzin',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.news {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
</style>
