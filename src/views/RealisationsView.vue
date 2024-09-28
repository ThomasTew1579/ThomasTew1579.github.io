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
  <HeroImage title="Réalisations" image="/public/image/illustrations/illu-real.webp" />

  <Damier title="Modélisation 3D" :order = "true" image="/public/image/photo-perso.jpg" >
    https://www.biens-surs.fr/

  </Damier>
</template>

