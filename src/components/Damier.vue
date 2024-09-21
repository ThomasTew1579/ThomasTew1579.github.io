<script>
import ButtonSecondary from './button/ButtonSecondary.vue';
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
        ButtonSecondary,
    }
 }

</script>


<template>
    <section :class="{'bg-primary-100 my-10': bg}" class="damier relative flex flex-col gap-10 py-8 md:py-16 max-md:px-4">
        <svg v-if="bg" class="bubble top hidden md:block fill-primary-100 top-0 -translate-y-[99%] absolute z-40" xmlns="http://www.w3.org/2000/svg" viewBox="-0.1 -1175.1 3000 1177">
            <path d="M 0 0 C 1000 -1 2000 0 3000 0 L 3000 2 L 0 2 Z"/>
        </svg>
        <div class="container md:px-12 xl:max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div v-if="!order" class="image fade-in hidden md:flex overflow-clip rounded-2xl relative h-[300px] lg:h-[500px] fade-in">
                <img class="image-scroll absolute object-cover inset-0 w-full h-full" :src="image" alt="">
            </div>
            <div class="text flex flex-col gap-4">
                <h2 class="title-5 fade-in">{{ title }}</h2>
                <p class="fade-in">{{text}}</p>
                <ButtonSecondary v-if="hasBtn" :title="btn.title" icon="arrow-right" :link="btn.url" />  
            </div>
            <div v-if="order" class="image hidden md:flex overflow-clip rounded-2xl relative h-[300px] lg:h-[500px] fade-in">
                <img class="image-scroll absolute object-cover inset-0 w-full h-full" :src="image" alt="">
            </div>
        </div>
        <svg v-if="bg" class="bubble bottom  hidden md:block  fill-primary-100 rotate-180 bottom-0 translate-y-[99%] absolute z-40" xmlns="http://www.w3.org/2000/svg" viewBox="-0.1 -1175.1 3000 1177">
            <path d="M 0 -500 C 1 -1400 3000 -1400 3000 -500 L 3000 2 L 0 2 Z"/>
        </svg>
    </section>
</template>


<style>
    .damier {
        view-timeline: --damier;
        .bubble {
            &.top {
                & path {
                    animation-name: bubble-scroll-top;
                    animation-timing-function: linear;
                    animation-fill-mode: both;
                    animation-timeline: --damier;
                    animation-duration: 1ms;
                    animation-range: cover 10% cover 100%;
                }
            }
            &.bottom {
                & path {
                    animation-name: bubble-scroll-bottom;
                    animation-timing-function: linear;
                    animation-fill-mode: both;
                    animation-timeline: --damier;
                    animation-duration: 1ms;
                    animation-range: contain 100% cover 90%;
                }
            }
        }
    }

    @keyframes bubble-scroll-top {
        from {
            d:path("M 0 0 C 1000 -1 2000 0 3000 0 L 3000 2 L 0 2 Z");
        }
        to {
            d:path("M 0 -500 C 1 -1400 3000 -1400 3000 -500 L 3000 2 L 0 2 Z");
            
        }
    }
    @keyframes bubble-scroll-bottom {
        from {
            d:path("M 0 -500 C 1 -1400 3000 -1400 3000 -500 L 3000 2 L 0 2 Z");
            
        }
        to {
            d:path("M 0 0 C 1000 -1 2000 0 3000 0 L 3000 2 L 0 2 Z");
        
        }
    }
</style>