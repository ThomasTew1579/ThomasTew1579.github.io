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
  <HeroImage title="Formations" image="/image/illustrations/illu-form.webp" />

  <Damier title="Développeur Web" :order = "true" image="/image/formation/form-dev.webp" >
    J’ai suivi une formation en ligne complète en développement web, me permettant d’acquérir une solide maîtrise des langages et technologies essentielles tels que HTML, CSS, JavaScript, PHP, ainsi que des frameworks comme React et WordPress. Cette formation m’a permis de développer des compétences pratiques en création de sites web, allant du front-end au back-end, en passant par l’intégration de bases de données et la gestion de serveurs. Grâce à cette formation, j’ai appris à m’adapter aux exigences du marché actuel et à rester à jour avec les technologies les plus utilisées dans le domaine du web. 
   </Damier>

  <Damier title="Dessinateur Projeteur" :order = "false" image="/image/formation/form-paint.webp" >
En tant que dessinateur projeteur, j'ai reçu une formation approfondie dans plusieurs logiciels de modélisation et de conception tels que Autodesk AutoCAD, 3ds Max, Revit, ainsi que la suite Adobe (Photoshop, InDesign, After Effects, Illustrator, Premiere Pro). Cette formation m’a permis de développer une compréhension fine des concepts de design et d’architecture, ainsi qu’une maîtrise technique des outils de modélisation 2D et 3D.
</Damier>

  <Damier title="Régisseur Lumière" :order = "true" image="/image/formation/form-light.webp" >
    Ma formation en régie lumière m’a permis d'acquérir une expertise complète dans la gestion des éclairages scéniques et la programmation de consoles lumière telles que la GrandMA 2, GrandMA 3, et Chamsys MQ80. J’ai également appris les bases de la scénographie et de l’éclairage théâtral, ainsi que la programmation DMX512 pour la gestion des équipements scéniques. Cette formation a renforcé mon sens de la gestion technique et de la précision.
</Damier>

  <Damier title="BTS Génie Électrique" :order = "false" image="/image/formation/form-elec.webp" >
    Mon BTS en Génie Électrique m’a fourni une solide base technique dans la distribution électrique et la maintenance des installations industrielles. J’y ai acquis des compétences essentielles en dimensionnement d’installations électriques, en réalisation d’ouvrages techniques, et en habilitation haute tension. Cette formation m’a permis de développer une approche méthodique des projets complexes, en assurant leur conformité aux normes de sécurité et d’efficacité énergétique.
</Damier>

  <Damier title="BAC PRO Electrotechnique" :order = "true" image="/image/formation/form-elec2.webp" >
    J’ai obtenu un BAC PRO en électrotechnique, où j'ai appris les bases de l’électricité, aussi bien pour les bâtiments que pour les environnements industriels. Cette formation m'a initié aux méthodes de câblage, d’installation et de maintenance de matériel électrique. J'ai également eu l'honneur de recevoir plusieurs distinctions au concours du Meilleur Apprenti de France en 2012, avec une médaille d’argent au niveau départemental et des médailles d’or aux niveaux régional et national.
</Damier>


</template>

