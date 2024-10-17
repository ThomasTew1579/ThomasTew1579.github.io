<script>
import ButtonSecondary from './button/ButtonSecondary.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
    name : "SliderCardScroll",
    props : {
        title : String,
        slides : Array,
    },
    methods: {
        hasBtn () {
            return this.btn.url && this.btn.title;
        },
    },
    components: {
        ButtonSecondary,
        Splide,
        SplideSlide,
    },
    data() {
        return {
            splideOptions: {
                destroy:true,
                breakpoints: {
                    1024: {
                        destroy:false,
                        type: 'loop',
                        autoplay:false,
                        arrows: false,
                        pagination: true,
                        perMove: 1,
                        gap: 16,
                        perPage: 1,
                        padding: 24,
                    }
                }
            }
        };
    },
 }

</script>


<template>
    <section class="slider-realisations flex flex-col gap-10 lg:mt-20 py-8 md:py-16 fade-in">
        <div class="container md:px-12">
            <div class="intro text-center">
                <h2 class="title-4">
                    {{title}}
                </h2>
            </div>
        </div>
        <Splide :options="splideOptions" class="splide">
            <SplideSlide 
                v-for="(slide, index) in slides" 
                :key="index" 
                class="splide__slide card lg:shadow-2xl group p-6 rounded-2xl h-[250px] lg:h-[20vw] overflow-clip flex flex-col justify-end"
            >
                <img class="image-scroll absolute object-cover inset-0 w-full h-full z-0" :src="slide" alt="">
            </SplideSlide>
        </Splide>
        <div class="container">
            <div class="outro flex justify-center">
                <ButtonSecondary link="/realisations" title="Voir tout" />
            </div>
        </div>
    </section>
</template>


<style>
    .slider-realisations {
        view-timeline-name:--card-scroll-anim;

        .splide__track {
            @apply !overflow-x-clip !overflow-y-visible;
        } 
        .splide__list {
            @apply lg:!grid grid-cols-5 lg:gap-4 lg:w-[120vw] lg:-translate-x-[10vw];
        } 

        @supports (animation-timeline: view(block)) {
            @media (min-width:768px) {
                .intro {
                    animation-name: intro-anim;
                    animation-timing-function: linear;
                    animation-fill-mode: both;
                    animation-timeline: --card-scroll-anim;
                    animation-duration: 1ms;
                    animation-range: cover 0% cover 60%;
                }
                .card {
                    &:nth-child(1),
                    &:nth-child(5) {
                        animation-name: card-scroll-anim-1;
                        animation-timing-function: linear;
                        animation-fill-mode: both;
                        animation-timeline: --card-scroll-anim;
                        animation-duration: 1ms;
                        animation-range: entry-crossing 0% cover 60%;
                    }
                    &:nth-child(2),
                    &:nth-child(4) {
                        animation-name: card-scroll-anim-2;
                        animation-timing-function: linear;
                        animation-fill-mode: both;
                        animation-timeline: --card-scroll-anim;
                        animation-duration: 1ms;
                        animation-range: entry-crossing 0% cover 60%;
                    }
                    &:nth-child(3) {
                        animation-name: card-scroll-anim-3;
                        animation-timing-function: linear;
                        animation-fill-mode: both;
                        animation-timeline: --card-scroll-anim;
                        animation-duration: 1ms;
                        animation-range: entry-crossing 0% cover 60%;
                    }
                }
            }
        }
        
    }

    @keyframes intro-anim {
        from {
            transform: translateY(-150px);
        }
        to {
            transform: translateY(0%);
        }
    }
    @keyframes card-scroll-anim-1 {
        from {
            transform: translateY(-250px);
        }
        to {
            transform: translateY(0%);
        }
    }
    @keyframes card-scroll-anim-2 {
        from {
            transform: translateY(-150px);
        }
        to {
            transform: translateY(0%);
        }
    }
    @keyframes card-scroll-anim-3 {
        from {
            transform: translateY(-70px);
        }
        to {
            transform: translateY(0%);
        }
    }
</style>