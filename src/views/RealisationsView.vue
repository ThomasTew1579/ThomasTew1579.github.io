<script>
import HeroImage from '../components/HeroImage.vue';
import Damier from '../components/Damier.vue';

export default {
    name : "RealisationsView",
    components:{
      HeroImage,
      Damier,
    },
}
</script>

<template>
  <HeroImage title="Réalisations" image="/src/assets/image/illustrations/illu-real.webp" />

  <Damier title="Modélisation 3D" :order = "true" image="/src/assets/image/photo-perso.jpg" >
    Je réalise également de la modélisation 3D et des rendus photoréalistes, alliant technologie et créativité pour donner vie à des concepts.

    Illustration : Un écran affichant un projet 3D en cours dans un logiciel de modélisation, avec un rendu détaillé.
  </Damier>
</template>

