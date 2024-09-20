<script>
import Damier from '../components/Damier.vue';

export default {
    name : "HomeView",
    components:{
      Damier,
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
    <Damier title="Titre" text="texte nul" :btn="btnXp" />
  </main>
</template>
