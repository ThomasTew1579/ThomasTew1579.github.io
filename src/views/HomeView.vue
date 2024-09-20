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
    <Damier title="Titre" text="texte nul" :btn="btnXp" />
  </main>
</template>
