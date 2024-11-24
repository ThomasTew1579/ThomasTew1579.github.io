<script>
import HeroImage from '../components/HeroImage.vue';
import DamierAbout from '../components/DamierAbout.vue';
import WrapperAbout from '../components/WrapperAbout.vue';
import GalleryScroll from '../components/GalleryScroll.vue';
import DropdownYoutube from '../components/DropdownYoutube.vue';

export default {
    name : "HomeView",
    components:{
      HeroImage,
      DamierAbout,
      WrapperAbout,
      GalleryScroll,
      DropdownYoutube
    },
    data() {
      return {
        imageGallery : [
          "/image/about/gallery/DSC00141.webp",
          "/image/about/gallery/DSC00042.webp",
          "/image/about/gallery/DSC02036.webp",
          "/image/about/gallery/DSC00053.webp",
          "/image/about/gallery/DSC00113.webp",
          "/image/about/gallery/DSC01980.webp",
          "/image/about/gallery/DSC00139.webp",
          "/image/about/gallery/DSC00212.webp",
          "/image/about/gallery/DSC00491.webp",
          "/image/about/gallery/DSC00696.webp",
          "/image/about/gallery/DSC01005.webp",
          "/image/about/gallery/DSC09846.webp",
          "/image/about/gallery/DSC01847.webp",
          "/image/about/gallery/DSC02179.webp",
        ],
        itemsDropdown : [
          {
            title:"DEEP MERRIES",
            subtitle:"So typical",
            link:"https://www.youtube.com/watch?v=xFcnIvTF1js",
            image:"https://img.youtube.com/vi/xFcnIvTF1js/maxresdefault.jpg",
          },
          {
            title:"EARTHSTATE",
            subtitle:"What If",
            link:"https://www.youtube.com/watch?v=Z-a85VWPDAo",
            image:"https://img.youtube.com/vi/Z-a85VWPDAo/maxresdefault.jpg",
          },
          {
            title:"WHIST",
            subtitle:"Red Light",
            link:"https://www.youtube.com/watch?v=7Lufp4qASvY",
            image:"https://img.youtube.com/vi/7Lufp4qASvY/maxresdefault.jpg",
          },
          {
            title:"PLEINE LVNE",
            subtitle:"Foudre",
            link:"https://www.youtube.com/watch?v=Wkb3dAVz238",
            image:"https://img.youtube.com/vi/Wkb3dAVz238/maxresdefault.jpg",
          },
          {
            title:"JELLY JELLY FIRE",
            subtitle:"Ma Bombe",
            link:"https://www.youtube.com/watch?v=Zt8eef_YJNU",
            image:"https://img.youtube.com/vi/Zt8eef_YJNU/maxresdefault.jpg",
          },
        ],
      }
    }

}
</script>

<template>
  <HeroImage title="Qui suis-je ?" image="/image/blue.webp" />

  <div class="container mx-auto max-w-[1000px] px-4 flex flex-col gap-4 text-center">
    <h2 class="title-3 fade-in">
      Thomas Pasquet
    </h2>
    <p class="text-center fade-in">
      Je suis développeur web à Lyon. Passionné par la création sous toutes ses formes, j’ai un parcours varié allant de la musique à la modélisation 3D, en passant par l’organisation de concerts et la photographie. Ces expériences nourrissent mon travail en développement web, alliant technique et créativité. Découvrez-en plus sur mes passions et mon parcours.
    </p>

  </div>
  <WrapperAbout>

    <DamierAbout title="Musique" :order = "true" image="/image/about//gallery/DSC01471.webp" >
      Avec plus de 15 ans d’expérience en guitare et basse, et 10 ans en tant que chanteur, la musique a toujours été une source d’inspiration et d’expression pour moi. J'ai joué dans un groupe de reprises punk rock, avec plusieurs performances scéniques à mon actif. Cette expérience m'a appris à collaborer efficacement au sein d’équipes créatives et à gérer des projets collectifs. Mon objectif actuel est d’apprendre le violon pour interpréter des bandes originales de films et de jeux vidéo, ce qui reflète ma quête constante de maîtrise technique et créative.
    </DamierAbout>

    <DamierAbout title="Photographie" :order = "false" image="/image/about/gallery/DSC00139.webp" >
      Depuis 4 ans, je me passionne pour la photographie, notamment dans le domaine du sport et des concerts. J'utilise des longues focales pour capturer le mouvement avec précision, une approche qui demande autant de rigueur que de créativité.
    </DamierAbout>

    <GalleryScroll :images="imageGallery" />

    <DamierAbout title="Clip vidéo" :order = "true" image="/image/about/redlight.webp" >
      En tant qu’éclairagiste, caméraman, monteur et décorateur, j’ai réalisé une dizaine de clips musicaux pour divers groupes lyonnais. Cette expérience m'a permis de développer une approche technique approfondie, ainsi qu'une sensibilité artistique.
    </DamierAbout>
    
    <DropdownYoutube :items="itemsDropdown" />

    <DamierAbout title="Peinture" :order = "false" image="/image/about/paint.webp" >
      Depuis trois ans, je développe mon style artistique en peinture, en me concentrant sur des logos et des illustrations monochromes. J’ai réalisé plusieurs planches de skate personnalisées pour des groupes de musique et peint deux guitares, ainsi que quelques tableaux pour mon appartement.
    </DamierAbout>

    <DamierAbout title="Modélisation 3D" :order = "true" image="/image/about/CCI.webp" >
      Depuis 6 ans, je pratique la modélisation 3D, en particulier pour la conception de meubles, de bâtiments et de véhicules. J’utilise principalement Sketchup Pro et 3ds Max pour créer des conceptions détaillées, comme la réplique en 3D du Palais de la Bourse de Lyon. 
    </DamierAbout>

    <DamierAbout title="Jeux vidéo" :order = "false" image="/image/about/ow.webp" >
      Les jeux d’énigmes comme Tunic et Outer Wilds me passionnent pour leur capacité à stimuler la réflexion et à proposer des défis complexes. Je peux passer des heures à résoudre des énigmes, une démarche qui s’apparente à ma manière d’aborder les défis techniques.
    </DamierAbout>

    <DamierAbout title="Sport" :order = "true" image="/image/about/lac-blanc.webp" >
      Les sports que je pratique, comme l’escalade, le skateboard et la randonnée, sont des moyens pour moi de repousser mes limites tout en appréciant l’environnement naturel. Je pratique le skateboard quotidiennement, principalement comme moyen de transport en ville, et participe à des rassemblements de skate où j’interviens aussi en tant que photographe ou organisateur.
    </DamierAbout>

  </WrapperAbout>

</template>

