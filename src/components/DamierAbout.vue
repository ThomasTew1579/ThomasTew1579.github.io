<script>
import ButtonSecondary from './button/ButtonSecondary.vue';
export default {
    name : "DamDamierAboutier",
    props : {
        title : String,
        image : String,
        hideMobileImage : Boolean,
        order : Boolean,
        btn : Object,
    },
    methods: {
        hasBtn () {
            return this.btn.url && this.btn.title;
        },
    },
    components: {
        ButtonSecondary,
    }
 }

</script>


<template>
    <section class="damier-about text-white relative flex flex-col gap-10 first:pt-8 md:first:pt-16 last:pb-8 md:last:pb-16 max-md:px-4">
        <div class="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-2 max-md:gap-8 items-center">
            <div v-if="!order" :class="{'hidden md:flex ': hideMobileImage}" class="image fade-in overflow-clip relative h-[300px] lg:h-[600px] fade-in">
                <img class="image-scroll absolute object-cover inset-0 w-full h-full" :src="image" alt="">
            </div>
            <div class="text flex px-6 md-px-12 flex-col gap-4">
                <h2 class="title title-2 fade-in">{{ title }}</h2>
                <p class="fade-in">
                    <slot></slot>
                </p>
                <ButtonSecondary v-if="hasBtn && btn" :title="btn.title" icon="arrow-right" :link="btn.url" />  
            </div>
            <div v-if="order" :class="{'hidden md:flex ': hideMobileImage}" class="image overflow-clip relative h-[300px] lg:h-[600px] fade-in">
                <img class="image-scroll absolute object-cover inset-0 w-full h-full" :src="image" alt="">
            </div>
        </div>
    </section>
</template>


<style>
@supports (animation-timeline: view(block))  {
    @media (min-width:768px) {
        .title {
            -webkit-text-stroke: 2px white;
            color: transparent;
            animation-name: title-damier;
            animation-timing-function: linear;
            animation-fill-mode: both;
            animation-timeline: view(block);
            animation-duration: 1ms;
            animation-range: cover 0% cover 80%;
        }
    }
}

@keyframes title-damier {
        from {
            transform: translateX(70%);
            opacity: 0;
        }
        to {
            transform: translateX(0%);
            opacity: 1;
            
        }
    }
 
</style>