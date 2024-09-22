<script>
import HeroImage from '../components/HeroImage.vue';
import Damier from '../components/Damier.vue';

export default {
    name : "ExpreienceView",
    components:{
      HeroImage,
      Damier,
    },
}
</script>

<template>
  <HeroImage title="Experience" image="/src/assets/image/illustrations/illu-xp.webp" />

  <Damier title="Développeur Full Stack chez Pilot’in" :order = "true" image="/src/assets/image/photo-perso.jpg" >
    J'ai participé à la conception et à la mise en production de sites WordPress, tout en assurant la maintenance des sites et l'évolution des fonctionnalités. J’ai également contribué à la documentation interne et à la gestion des avant-ventes.
  </Damier>

  <Damier title="Développeur Front End chez Pilot’in" :order = "true" image="/src/assets/image/photo-perso.jpg" >
    En tant que développeur front-end, j'étais responsable de l'intégration de contenu et des échanges entre les pôles développement et design.
  </Damier>

  <Damier title="Régisseur Lumière dans le Spectacle Vivant" :order = "true" image="/src/assets/image/photo-perso.jpg" >
    Je dirige une équipe de techniciens pour gérer l’installation et l’éclairage de concerts et de spectacles dans plusieurs lieux emblématiques comme Cité International et Transborder.
  </Damier>

  <Damier title="Électromécanique" :order = "true" image="/src/assets/image/photo-perso.jpg" >
    Chargé de la maintenance d’un parc de machines, j'ai travaillé sur le calcul et le dimensionnement d’installations électriques pour divers sites industriels.
  </Damier>

  <Damier title="Job Étudiant" :order = "true" image="/src/assets/image/photo-perso.jpg" >
    J'ai aussi exercé plusieurs jobs étudiants, notamment dans la gestion de silo agricole et dans la castration du maïs.
  </Damier>
</template>

