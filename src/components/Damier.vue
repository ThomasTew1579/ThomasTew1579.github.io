<script>
import ButtonPrimary from './button/ButtonPrimary.vue';
export default {
    name : "Damier",
    props : {
        title : String,
        text : String,
        image : String,
        order : Boolean,
        bg : Boolean,
        btn : Object,
    },
    methods: {
        hasBtn () {
            return this.btn.url && this.btn.title;
        },
    },
    components: {
        ButtonPrimary,
    }
 }

</script>


<template>
    <section :class="{'bg-primary-100': bg}" class="damier-experiences flex flex-col gap-10 py-8 md:py-16 px-4">
        <div class="container md:px-12 xl:max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div v-if="!order" class="image fade-in hidden md:flex overflow-clip rounded-2xl relative h-[300px] lg:h-[500px] fade-in">
                <img class="image-scroll absolute object-cover inset-0 w-full h-full" :src="image" alt="">
            </div>
            <div class="text flex flex-col gap-4">
                <h2 class="title-5 fade-in">{{ title }}</h2>
                <p class="fade-in">{{text}}</p>
                <ButtonPrimary v-if="hasBtn" :title="btn.title" icon="arrow-right" :link="btn.link" />  
            </div>
            <div v-if="order" class="image hidden md:flex overflow-clip rounded-2xl relative h-[300px] lg:h-[500px] fade-in">
                <img class="image-scroll absolute object-cover inset-0 w-full h-full" :src="image" alt="">
            </div>
        </div>
    </section>
</template>
