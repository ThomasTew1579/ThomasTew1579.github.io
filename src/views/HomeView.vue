<script>
import Damier from '../components/Damier.vue';
import HeroScrollWave from '../components/HeroScrollWave.vue';

export default {
    name : "HomeView",
    components:{
      Damier,
      HeroScrollWave,
    },
    data() {
      return {
        btnXp : {
          url: "/",
          title: "btn moche",
        },
        btnFrom : {
          url: "/",
          title: "btn moche",
        }
      }
    }
}
</script>

<template>
  <main>
    <HeroScrollWave />
    <Damier 
      title="Thomas Pasquet" 
      text="Né en 1994 et originaire de la Sarthe, je vis maintenant à Lyon depuis 2016. Régisseur lumière dans le spectacle vivant puis reconverti dans le développement web, j’occupe actuellement un poste de développeur full stack au sein d’une agence WordPress lyonnaise. <br>
      Je souhaite désormais mettre aux défis mes compétences de Développeur Front acquises et enrichir mes connaissances dans les frameworks JavaScript." 
      :order = "true"
      image="/src/assets/image/photo-perso.jpg" 
      :btn="btnXp" 
    />
    <Damier 
      title="Mon experiences" 
      text="Mon parcours professionnel m’a permis d’acquérir des compétences variées, allant de la gestion d’équipes en tant que régisseur lumière à la création de sites web en tant que développeur. Après ma reconversion dans le développement web, j’ai travaillé chez Pilot’in comme développeur Front-End puis Full Stack, où j’ai mené plusieurs projets avec une expertise en HTML, CSS, JavaScript et WordPress. Aujourd’hui, je souhaite me spécialiser dans le développement Front-End, en mettant l’accent sur l’optimisation de l’expérience utilisateur et des performances web." 
      image="/src/assets/image/illustrations/illu-xp.webp" 
      :btn="btnXp" 
    />
    <Damier 
      title="Mes formations" 
      text="Mon parcours de formation est marqué par une évolution constante vers le développement web. Après un BTS en électrotechnique et une formation en régie technique de l’événementiel, j’ai suivi des cours en ligne spécialisés en HTML, CSS et JavaScript sur Udemy et Elephorme. Ces formations m'ont permis d'acquérir les bases solides et d'approfondir mes compétences dans les technologies web, essentielles à mon activité de développeur." 
      image="/src/assets/image/illustrations/illu-form.webp" 
      :bg = "true"
      :order = "true"
      :btn="btnFrom" 
    />
  </main>
</template>
