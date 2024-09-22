<script>
import HeroImage from '../components/HeroImage.vue';
import Damier from '../components/Damier.vue';

export default {
    name : "HomeView",
    components:{
      HeroImage,
      Damier,
    },
}
</script>

<template>
  <HeroImage title="Qui suis-je ?" image="/src/assets/image/blue.jpg" />
  <Damier title="Musique" :order = "true" image="src/assets/image/about/musique.webp" >
    Je suis passionné par la musique et je joue de la guitare, de la basse et du chant. J'explore aussi le violon et fais partie d'un groupe où je m'exprime à travers différentes compositions musicales.

  </Damier>
  <Damier title="Sport" :order = "false" image="src/assets/image/about/sport.webp" >
    L'escalade, la randonnée et le skateboard sont pour moi des moyens d’allier défi physique et évasion. Ces activités me permettent de rester actif et de repousser mes limites.

  </Damier>
  <Damier title="Peinture" :order = "true" image="src/assets/image/about/paint.webp" >
    Je peins principalement à l'acrylique sur toile, mais j'aime aussi personnaliser des planches de skateboard avec mes créations graphiques.

  </Damier>
  <Damier title="Modélisme" :order = "false" image="src/assets/image/about/modelism.webp" >
    Je construis des voitures télécommandées, des drones et des avions. Ces projets me permettent d’explorer la mécanique et l’aérodynamisme.
  </Damier>
  <Damier title="Menuiserie" :order = "true" image="src/assets/image/about/menuiserie.webp" >
    Je suis également menuisier amateur, créant des meubles tels que des bibliothèques et des bureaux. Le travail du bois me passionne car il associe créativité et précision.

  </Damier>
  <Damier title="Engagement Associatif et Organisation" :order = "false" image="src/assets/image/about/live.webp" >
    Je suis engagé dans des associations, à la fois en tant que bénévole et adhérent. J'aime aussi participer à l’organisation et à la technique de concerts.

  </Damier>
  <Damier title="Vidéos et Photographie" :order = "true" image="src/assets/image/about/js.webp" >
    Je filme et monte des clips vidéo de musique, tout en pratiquant la photographie amateur, particulièrement lors de concerts et d'événements sportifs.

</Damier>
<Damier title="Rétro Gaming et Jeux Vidéo" :order = "false" image="src/assets/image/about/jv.webp" >
  Je suis un amateur de jeux vidéo rétro, comme ceux sur PS1 et Game Boy Advance. J'adore aussi les jeux d'énigmes comme "Tunic" et "Outer Wilds" pour leur atmosphère et leur complexité narrative.

  </Damier>
  <Damier title="Jeux de société" :order = "true" image="src/assets/image/about/js.webp" >
    Les jeux de société sont un autre de mes passe-temps favoris, que je pratique surtout en groupe.

  </Damier>
  <Damier title="Modélisation 3D" :order = "false" image="src/assets/image/about/js.webp" >
    Je réalise également de la modélisation 3D et des rendus photoréalistes, alliant technologie et créativité pour donner vie à des concepts.

  </Damier>
</template>

