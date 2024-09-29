<script>
import HeroImage from '../components/HeroImage.vue';
import Damier from '../components/Damier.vue';
import TimelineVertical from '../components/TimelineVertical.vue';

export default {
    name : "ExpreienceView",
    components:{
      HeroImage,
      Damier,
      TimelineVertical,
    },
}
</script>

<template>
  <HeroImage title="Experience" image="/image/illustrations/illu-xp.webp" />
  <TimelineVertical />
</template>

