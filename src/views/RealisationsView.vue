<script>
import HeroImage from '../components/HeroImage.vue';
import Damier from '../components/Damier.vue';
import ArchiveRealisations from '../components/ArchiveRealisations.vue';

export default {
    name : "RealisationsView",
    components:{
      HeroImage,
      Damier,
      ArchiveRealisations,
    },
}
</script>

<template>
  <HeroImage title="Réalisations" image="/image/illustrations/illu-real.webp" />

  <ArchiveRealisations />

</template>

