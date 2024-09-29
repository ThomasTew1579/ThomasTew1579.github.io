<script>
export default {
    name : "GalleryScroll",
    props : {
        images : Array,
    },

 }

</script>


<template>
    <section class="gallery-scroll">
        <div class="wrapper bg-black max-h-[600px] overflow-clip">
            <div class="gallery grid grid-cols-4 gap-2">
                <div v-for="(image, index) in images" :key="index"  class="card h-80 ">
                    <img class="w-full h-full object-cover rounded-md" :src="image" alt="">
                </div>
            </div>
        </div>
    </section>
</template>


<style>
    .gallery-scroll {
        view-timeline-name: --gallery-scroll-fade-in;
        
        .gallery {
            transform: translateY(-10%) rotate(22deg);
            animation-name: gallery-rotate;
            animation-timing-function: linear;
            animation-fill-mode: both;
            animation-timeline: --gallery-scroll-fade-in;
            animation-duration: 1ms;
            animation-range: cover 0% cover 100%;
        }

        .card {
            position: relative;
            animation-timing-function: linear;
            animation-fill-mode: both;
            animation-timeline: --gallery-scroll-fade-in;
            animation-duration: 1ms;
            animation-range: cover 0% cover 100%;
            &:nth-child(2n+1) {
                animation-name: cards-up;
            }

            &:nth-child(2n+2) {
                animation-name: cards-down;
            }

        }

    }

    @keyframes cards-up {
        from {
            transform: translateY(-10%);
        }

        to {
            transform: translateY(50%);
        }
    }

    @keyframes cards-down {
        from {
            transform: translateY(10%);
        }

        to {
            transform: translateY(-50%);
        }
    }

    @keyframes gallery-rotate {
        from {
            filter: blur(10px);
            opacity: 0;
        }

        20% {
            opacity: 1;
        }
        30% {
            filter: blur(0px);
        }
        
    }
   
</style>