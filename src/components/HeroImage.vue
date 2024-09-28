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
        <img class="image-scroll opacity-70 absolute object-cover aspcet-square max-md:h-full inset-0 z-0 w-full" :src="image" alt="">
        <div class="content h-full flex flex-col justify-center items-center z-[1] relative ">
            <div class="text text-white w-full pt-1 pb-2 text-center backdrop-blur-[20px] backdrop-brightness-75 shadow-lg">
                <div class="container mx-auto">
                    <h1 class="title-1 !leading-normal">
                        {{title}}
                    </h1>
                </div>
            </div>
        </div>
        <div class="background-wave-boate z-[2] absolute inset-0 overflow-clip">
            <img class="img-wave absolute top-0 left-0 w-full h-full" src="/public/image/wave-3.svg" alt="">
        </div>
    </section>
</template>


<style>
    .hero-image {
        background: var(--primary-gradient-40);
        @supports (animation-timeline: view(block)) {
            @media (min-width:1024px) {
                .content {
                    animation-name: hero-content;
                    animation-timing-function: linear;
                    animation-fill-mode: both;
                    animation-timeline: view(block);
                    animation-duration: 1ms;
                    animation-range: contain 100% exit-crossing 90%;

                }
            }
        }
    }

    @keyframes hero-content {
        from {
            transform: translateY(0%);
        }
        to {
            transform: translateY(40%);
        }
    }
 
</style>