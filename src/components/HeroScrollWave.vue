<script>
export default {
    name : "HeroScrollWave",
 }

</script>


<template>
    <section class="hero font-primary flex relative flex-col items-center">
            <div class="surtitle">
                <div class="title-1">
                    <span class="z-[1]">
                        Hi ! I'm Thomas,
                        <br>
                        A Front-end Developer
                    </span>
                </div>
            </div>
            
            <div class="title">
                <h1 class="title-1">
                    Hi ! I'm Thomas
                </h1>
                
                <div class="background-wave z-0 absolute inset-0 overflow-hidden">
                    <img class="img-wave absolute top-0 left-0 w-full h-full" src="/image/wave-2.svg" alt="">
                </div>

            </div>
        </section>
</template>

<style>
    .hero {
        @apply h-[90dvh] md:h-[100dvh] flex justify-center flex-col items-center;
 
        .background-wave {
            @apply hidden;
        }
        .title {
            @apply hidden;
        }
        .surtitle {
            @apply w-full relative;
            mask: url(/image/wave-2-mask.svg)  ;
            -webkit-mask: url(/image/wave-2-mask.svg)  ;
            .title-1 {
                @apply block w-full text-center;
                background: linear-gradient(240deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
                background-clip: text;
                color: transparent;

            }
        }

    }

    @supports (animation-timeline: view(block)) {
        .hero {
            --hero-height:150vh;
            @media (max-width:1024px) {
                --hero-height:130vh;
            }
            height: var(--hero-height);  
            view-timeline: --hero-scroll-wave; 
            .surtitle {
                @apply z-[1] w-full relative;
                mask: url(/image/wave-2-mask.svg)  ;
                -webkit-mask: url(/image/wave-2-mask.svg)  ;
                @supports (animation-timeline: view(block))  {
                    @media (min-width:768px) {
                        animation-name: hero-scroll-wave;
                        animation-timing-function: linear;
                        animation-fill-mode: both;
                        animation-timeline:  --hero-scroll-wave;
                        animation-duration: 1ms;
                        animation-range: contain 0% cover 100%;
                    }
                }
                .title-1 {
                    @apply sticky block w-full text-center top-[50dvh] -translate-y-1/2;
                    background: linear-gradient(240deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
                    background-clip: text;
                    color: transparent;
                }
            }
            .title {
                @apply block w-full absolute top-0 text-white;
                mask: url(/image/wave-2-mask-reverse.svg)  ;
                -webkit-mask: url(/image/wave-2-mask-reverse.svg)  ;
                background: linear-gradient(240deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
                mask-position: top center;
                background-repeat: no-repeat;
                background-size: auto 100vh;
                backdrop-filter: blur(3px);
                -webkit-backdrop-filter: blur(3px);
                .title-1 {
                    @apply -translate-y-full translate-x-[-1.2vh] z-[1] sticky block w-full text-center top-[50dvh];
                    transform: translateY(-100%) translateX(-1.2vh);
                }   
            }
            .background-wave {
                @apply block;
            }
            .surtitle,
            .title {
                height: var(--hero-height);
                mask-mode:luminance ;
                -webkit-mask-mode: luminance ;
                mask-repeat: no-repeat;
                -webkit-mask-repeat: no-repeat;
                mask-size: 100% auto ;
                -webkit-mask-size: 100% auto ;
            }
        }
    }

    @keyframes hero-scroll-wave {
    from {
        transform: translateY(0%);
    }
    60% {
        transform: translateY(0%);
    }
    to {
        transform: translateY(-10%);
    }
}
</style>
