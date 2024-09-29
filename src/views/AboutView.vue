<script>
import HeroImage from '../components/HeroImage.vue';
import DamierAbout from '../components/DamierAbout.vue';
import WrapperAbout from '../components/WrapperAbout.vue';
import GalleryScroll from '../components/GalleryScroll.vue';

export default {
    name : "HomeView",
    components:{
      HeroImage,
      DamierAbout,
      WrapperAbout,
      GalleryScroll
    },
    data() {
      return {
        imageGallery : [
          "/image/about/gallery/DSC00042.jpg",
          "/image/about/gallery/DSC00053.jpg",
          "/image/about/gallery/DSC00113.jpg",
          "/image/about/gallery/DSC00139.jpg",
          "/image/about/gallery/DSC00141.jpg",
          "/image/about/gallery/DSC00212.jpg",
          "/image/about/gallery/DSC00491.jpg",
          "/image/about/gallery/DSC00696.jpg",
          "/image/about/gallery/DSC01005.jpg",
          "/image/about/gallery/DSC09846.jpg",
          "/image/about/gallery/DSC00042.jpg",
          "/image/about/gallery/DSC00053.jpg",
          "/image/about/gallery/DSC00113.jpg",
        ],
      }
    }

}
</script>

<template>
  <HeroImage title="Qui suis-je ?" image="/image/blue.jpg" />

  <div class="container mx-auto max-w-[1000px] flex flex-col gap-4 text-center">
    <h2 class="title-3 fade-in">
      Thomas Pasquet
    </h2>
    <p class="text-center fade-in">
      Je suis développeur web à Lyon. Passionné par la création sous toutes ses formes, j’ai un parcours varié allant de la musique à la modélisation 3D, en passant par l’organisation de concerts et la photographie. Ces expériences nourrissent mon travail en développement web, alliant technique et créativité. Découvrez-en plus sur mes passions et mon parcours.
    </p>

  </div>
  <WrapperAbout>
    <DamierAbout title="Musique" :order = "true" image="/image/about/musique.webp" >
      Avec plus de 15 ans d’expérience en guitare et basse, et 10 ans en tant que chanteur, la musique a toujours été une source d’inspiration et d’expression pour moi. J'ai joué dans un groupe de reprises punk rock, avec plusieurs performances scéniques à mon actif. Cette expérience m'a appris à collaborer efficacement au sein d’équipes créatives et à gérer des projets collectifs. Mon objectif actuel est d’apprendre le violon pour interpréter des bandes originales de films et de jeux vidéo, ce qui reflète ma quête constante de maîtrise technique et créative.

    </DamierAbout>

    <!-- <DamierAbout title="Concerts" :order = "false" image="/image/about/sport.webp" >
      Depuis 8 ans, je travaille dans l’organisation de concerts, principalement dans les genres punk rock et metalcore, mais également pour d'autres styles musicaux variés. Je suis spécialisé dans la gestion technique, particulièrement la lumière et le backline. Ces événements, souvent complexes, demandent une planification rigoureuse et une gestion technique précise, des compétences que j’applique également dans le développement web pour assurer la performance et la qualité des sites que je développe.
    </DamierAbout> -->

    <DamierAbout title="Photographie" :order = "false" image="/image/about/gallery/DSC00139.jpg" >
      Depuis 4 ans, je me passionne pour la photographie, notamment dans le domaine du sport et des concerts. J'utilise des longues focales pour capturer le mouvement avec précision, une approche qui demande autant de rigueur que de créativité.
    </DamierAbout>
    <GalleryScroll :images="imageGallery" />

    <DamierAbout title="Clip vidéo" :order = "true" image="/image/about/gallery/DSC00043.jpg" >
      En tant qu’éclairagiste, caméraman, monteur et décorateur, j’ai réalisé une dizaine de clips musicaux pour divers groupes lyonnais. Cette expérience m'a permis de développer une approche technique approfondie, ainsi qu'une sensibilité artistique, que j’applique également dans mon métier de développeur web, où l’esthétique et la technique doivent s’harmoniser pour offrir une expérience utilisateur de qualité.
    </DamierAbout>

    <DamierAbout title="Peinture" :order = "false" image="/image/about/paint.webp" >
      Depuis trois ans, je développe mon style artistique en peinture, en me concentrant sur des logos et des illustrations monochromes. J’ai réalisé plusieurs planches de skate personnalisées pour des groupes de musique et peint deux guitares, ainsi que quelques tableaux pour mon appartement. Ce travail exige patience, précision et un sens aigu de l'esthétique, des qualités que je mets également à profit dans le développement de sites web sur mesure, où l’équilibre entre design et fonctionnalité est essentiel.

    </DamierAbout>
    <!-- <DamierAbout title="Modélisme" :order = "false" image="/image/about/live.webp" >
      Depuis mon enfance, je construis des voitures télécommandées, principalement des buggys tout terrain motorisés. Aujourd'hui, j'envisage de m'orienter vers la construction de modèles d’avions et de drones. Cette passion pour le modélisme m’a appris à porter attention aux détails mécaniques et à la précision, des compétences qui trouvent une application directe dans le développement front-end, où chaque ligne de code doit être méticuleusement optimisée pour garantir la performance du site.
    </DamierAbout> -->
    <DamierAbout title="Modélisation 3D" :order = "true" image="/image/about/js.webp" >
      Depuis 6 ans, je pratique la modélisation 3D, en particulier pour la conception de meubles, de bâtiments et de véhicules. J’utilise principalement Sketchup Pro et 3ds Max pour créer des conceptions détaillées, comme la réplique en 3D du Palais de la Bourse de Lyon. La modélisation 3D et le développement web partagent une même exigence de précision et d’attention aux détails, que je maîtrise pour concevoir des projets fonctionnels et esthétiques.

  </DamierAbout>
  <!-- <DamierAbout title="Rétro-gaming" :order = "false" image="/image/about/jv.webp" >
    Ma passion pour le rétro-gaming, avec des jeux comme Spyro, Tomb Raider et Final Fantasy sur PS1, ainsi que Pokémon sur Game Boy, est motivée par mon admiration pour le design graphique et la nostalgie des jeux classiques. Je collectionne les consoles Sony et les portables de toutes marques. Cette appréciation pour le design se reflète dans ma manière d’aborder le développement web, où j’aime combiner l’esthétique moderne avec des éléments de design intemporels.
    </DamierAbout> -->
    <DamierAbout title="Jeux vidéo" :order = "false" image="/image/about/jv.webp" >
      Les jeux d’énigmes comme Tunic et Outer Wilds me passionnent pour leur capacité à stimuler la réflexion et à proposer des défis complexes. Je peux passer des heures à résoudre des énigmes, une démarche qui s’apparente à ma manière d’aborder les problèmes dans le développement web. Tout comme dans les jeux vidéo, je cherche à décoder et optimiser les interactions utilisateurs, en tirant parti de ma capacité à repérer les subtilités et à explorer des solutions créatives.
    </DamierAbout>
    <DamierAbout title="Sport" :order = "true" image="/image/about/sport.webp" >
      Les sports que je pratique, comme l’escalade, le skateboard et la randonnée, sont des moyens pour moi de repousser mes limites tout en appréciant l’environnement naturel. Je pratique le skateboard quotidiennement, principalement comme moyen de transport en ville, et participe à des rassemblements de skate où j’interviens aussi en tant que photographe ou organisateur. Cette recherche d'équilibre entre technique et performance est également présente dans ma manière de gérer des projets complexes en développement web, où chaque détail compte.
    </DamierAbout>
  </WrapperAbout>
</template>

