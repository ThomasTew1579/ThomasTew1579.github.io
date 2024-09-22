<script>
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
import CtaContact from './components/CtaContact.vue'
import Footer from './components/Footer.vue'
export default {
    name : "",
    components:{
      RouterView,
      Menu,
      Footer,
      CtaContact
    },
    data() {
      return {
        btnContactTel : {
          url: "tel:+33781598200",
          title: "Par téléphone",
          icon: "phone",
        },
        btnContactMail : {
          url: "mailto:pasquet.thomas69@gmail.com",
          title: "Par E-mail",
          icon: "envelope",
        }
      }
    }
}
</script>

<template>
  <header>
    <Menu />
  </header>
  <main>
    <RouterView />
    <CtaContact 
        title="Contactez Moi !" 
        image="/src/assets/image/blue.jpg" 
        :btn1="btnContactTel" 
        :btn2="btnContactMail" 
      />
  </main>
  <Footer />
</template>

<style scoped>


</style>
