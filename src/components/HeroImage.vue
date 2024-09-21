<script>
export default {
    name : "HeroImage",
    props : {
        title : String,
        image : String,
    },
 }

</script>


<template>
      <section class="hero-image h-screen pb-8 md:pb-20 overflow-clip relative">
        <img class="image-scroll opacity-70 absolute object-cover aspcet-square max-md:h-full inset-0 z-0 w-full" src="/src/assets/illustrations/illu-real.webp" alt="">
        <div class="text container h-full flex flex-col justify-center items-center z-[1] relative mix-blend-multiply	">
            <h1 class="title-1">
                Réalisations
            </h1>
        </div>
        <div class="background-wave-boate z-[2] absolute inset-0 overflow-hidden">
            <img class="img-wave absolute top-0 left-0 w-full h-full" src="/src/assets/wave-3.svg" alt="">
        </div>
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
                    animation-range: contain 60% cover 90%;
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