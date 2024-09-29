<script>
export default {
    name : "WrapperAbout",
 }

</script>

<template>
    <div class="wrapper-about relative z-[49] my-[20dvh] bg-primary-900">
        <svg class="bubble top pointer-events-none hidden md:block fill-primary-900 top-0 -translate-y-[99%] absolute" xmlns="http://www.w3.org/2000/svg" viewBox="-0.1 -1175.1 3000 1177">
            <path d="M 0 0 C 1000 -1 2000 0 3000 0 L 3000 2 L 0 2 Z"/>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
        <svg class="bubble bottom pointer-events-none  hidden md:block  fill-primary-900 rotate-180 bottom-0 translate-y-[99%] absolute" xmlns="http://www.w3.org/2000/svg" viewBox="-0.1 -1175.1 3000 1177">
            <path d="M 0 -500 C 1 -1400 3000 -1400 3000 -500 L 3000 2 L 0 2 Z"/>
        </svg>
    </div>
</template>

<style>



.wrapper-about {
    view-timeline: --wrapper-about;
        .bubble {
            @apply hidden;
        }
        @supports (animation-timeline: view(block))  {
            @media (min-width:768px) {
                .content {
                    animation-name: wrapper-about;
                    animation-timing-function: linear;
                    animation-fill-mode: both;
                    animation-timeline: --wrapper-about;
                    animation-duration: 1ms;
                    animation-range: cover 0% cover 15%;
                }
                .bubble {
                    @apply block z-[49];
                    &.top {
                        & path {
                            animation-name: bubble-scroll-top;
                            animation-timing-function: linear;
                            animation-fill-mode: both;
                            animation-timeline: --wrapper-about;
                            animation-duration: 1ms;
                            animation-range: cover 0% cover 20%;
                        }
                    }
                    &.bottom {
                        & path {
                            animation-name: bubble-scroll-bottom;
                            animation-timing-function: linear;
                            animation-fill-mode: both;
                            animation-timeline: --wrapper-about;
                            animation-duration: 1ms;
                            animation-range: contain 0% cover 100%;
                        }
                    }
                }
            }
        }
    }
    @keyframes wrapper-about {
        from {
            transform: translateY(10%);
            opacity: 0;
        }
        to {
            transform: translateY(0%);
            opacity: 1;
            
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