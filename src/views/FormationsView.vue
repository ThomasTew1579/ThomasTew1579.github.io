<script>
import HeroImage from '../components/HeroImage.vue';
import Damier from '../components/Damier.vue';

export default {
    name : "FormationsView",
    components:{
      HeroImage,
      Damier,
    },
}
</script>

<template>
  <HeroImage title="Formations" image="/public/image/illustrations/illu-form.webp" />

  <Damier title="Développeur Full Stack chez Pilot’in" :order = "true" image="/public/image/photo-perso.jpg" >
    J'ai participé à la conception et à la mise en production de sites WordPress, tout en assurant la maintenance des sites et l'évolution des fonctionnalités. J’ai également contribué à la documentation interne et à la gestion des avant-ventes.
  </Damier>


</template>

