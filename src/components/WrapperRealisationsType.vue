<script>
import ButtonTertiary from './button/ButtonTertiary.vue';

export default {
    name : "ArchiveRealisations",
    props : {
        realisations : Array,
    },
    components: {
        ButtonTertiary,
    }
 }
 document.addEventListener("DOMContentLoaded", function () {
     const realisationType = document.querySelectorAll(".realisation-type");
     setTimeout(() => {
         for(const type of realisationType) {
            const content = type.querySelector(".content-realisation");
            const btnViewMore = type.querySelector(".view-more");
            if(content.getBoundingClientRect().height >= window.innerHeight * 2) {
                content.style.setProperty("--content-height", window.getComputedStyle(content, null).getPropertyValue("height"));
                type.dataset.initViewMore = "true";
                btnViewMore.addEventListener("click", () => {
                    type.dataset.open = "true";
                })
            } else {
                type.dataset.initViewMore = "false";
            }
         }
     }, 500);

 })
</script>


<template>
    <div v-for="(realisation, index) in realisations" :key="index" :class="realisation.type" class="realisation-type">

        <div v-if="realisation.type == 'full-stack' || realisation.type == 'front-end'" :id="realisation.type" class="realisation flex flex-col gap-3">
            <h2 class="title-5 title-type mb-6 fade-in">
                {{ realisation.typeName }}
            </h2>
            <div class="content-realisation flex flex-col gap-3">
                <div v-for="(content, index) in realisation.content" :key="index + content.name" class="realisation-full-stack container xl:max-w-[1400px] text-white fade-in gap-2 lg:pl-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 bg-primary-600 rounded-md overflow-clip">
                        <div class="content-damier flex flex-col gap-2 h-full justify-center p-10">
                            <h3 class="title-6 font-semibold">
                                {{ content.name }}
                            </h3>
                            <p class="desc ">
                                {{ content.text }}
                            </p>
                            <ButtonTertiary v-if="content.url" target="_blank" :link="content.url" title="Lien vers le site" class="max-xl:mt-auto mt-10" />
                        </div>
                        <div class="pc-screen relative w-full max-md:hidden">
                            <img class="pc relative w-full" src="/image/pc_2.webp" alt="">
                            <div class="screen reverse absolute top-[23.2%]  h-[30%] w-[42.6%] overflow-clip rounded-[2px]">
                                <img class="site w-full scroll-screen " :src="content.media" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center absolute bottom-10 left-0 z-10">
                <button aria-label="voir plus" class="view-more group cursor-pointer text-white bg-primary-900 group w-fit py-[10px] px-[19px] font-semibold text-base rounded-full relative overflow-hidden select-none touch-manipulation transition-all !duration-300 inline-flex items-center gap-2.5 outline outline-primary-900 outline-0 hover:outline-1 hover:text-primary-900 hover:bg-white ">
                    <span class="text">
                        Voir plus de réalisation
                    </span>
                    <span class="icon group-hover:bg-primary-900 group-hover:text-primary-200 bg-primary-200 text-primary-900 size-[30px] p-[7px] overflow-hidden rounded-full duration-300">
                        <svg viewBox="0 0 40 16" class="h-4 w-10 fill-current transition-all duration-200 translate-x-[-1.5rem] group-hover:translate-x-0">
                            <use v-if="!icon" href="/sprite/far.svg#plus" width="16" />
                            <use v-if="!icon" href="/sprite/far.svg#plus" width="16" x="24" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>

        <div v-if="realisation.type == 'regisseur'" :id="realisation.type" class="realisation-type flex flex-col gap-3">
            <h2 class="title-5 title-type mb-6 fade-in">
                {{ realisation.typeName }}
            </h2>
            <div class="content-realisation flex flex-col gap-3">
                <div v-for="(content, index) in realisation.content" :key="index + content.name" class="realisation ">
                    {{ content.name }}
                    {{ content.text }}
                    {{ content.media }}
                </div>
            </div>
            <div class="w-full flex justify-center absolute bottom-10 left-0 z-10">
                <button aria-label="voir plus" class="view-more group cursor-pointer text-white bg-primary-900 group w-fit py-[10px] px-[19px] font-semibold text-base rounded-full relative overflow-hidden select-none touch-manipulation transition-all !duration-300 inline-flex items-center gap-2.5 outline outline-primary-900 outline-0 hover:outline-1 hover:text-primary-900 hover:bg-white ">
                    <span class="text">
                        Voir plus de réalisation
                    </span>
                    <span class="icon group-hover:bg-primary-900 group-hover:text-primary-200 bg-primary-200 text-primary-900 size-[30px] p-[7px] overflow-hidden rounded-full duration-300">
                        <svg viewBox="0 0 40 16" class="h-4 w-10 fill-current transition-all duration-200 translate-x-[-1.5rem] group-hover:translate-x-0">
                            <use v-if="!icon" href="/sprite/far.svg#plus" width="16" />
                            <use v-if="!icon" href="/sprite/far.svg#plus" width="16" x="24" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
        <div v-if="realisation.type == 'clip'" :id="realisation.type" class="realisation-type flex flex-col gap-3">
            <h2 class="title-5 title-type mb-6 fade-in">
                {{ realisation.typeName }}
            </h2>
            <div class="content-realisation flex flex-col gap-3">
                <div v-for="(content, index) in realisation.content" :key="index + content.name" class="realisation container xl:max-w-[1400px] text-white fade-in gap-2 pl-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 bg-primary-600 rounded-md overflow-clip">
                        <div class="content-damier flex flex-col gap-2 h-full justify-center p-10">
                            <h3 class="title-6">
                                {{ content.name }}
                            </h3>
                            <p class="desc mt-4">
                                {{ content.text }}
                            </p>
                            <ButtonTertiary v-if="content.url" target="_blank" :link="content.url" title="Lien vers le site" class="mt-4" />
                        </div>
                        <div class="pc-screen relative w-full">
                            <img class="pc relative w-full" src="/image/pc_2.webp" alt="">
                            <div class="screen reverse absolute top-[23.2%]  h-[30%] w-[42.6%] overflow-clip rounded-[2px]">
                                <img class="site w-full scroll-screen " :src="content.media" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center absolute bottom-10 left-0 z-10">
                <button aria-label="voir plus" class="view-more group cursor-pointer text-white bg-primary-900 group w-fit py-[10px] px-[19px] font-semibold text-base rounded-full relative overflow-hidden select-none touch-manipulation transition-all !duration-300 inline-flex items-center gap-2.5 outline outline-primary-900 outline-0 hover:outline-1 hover:text-primary-900 hover:bg-white ">
                    <span class="text">
                        Voir plus de réalisation
                    </span>
                    <span class="icon group-hover:bg-primary-900 group-hover:text-primary-200 bg-primary-200 text-primary-900 size-[30px] p-[7px] overflow-hidden rounded-full duration-300">
                        <svg viewBox="0 0 40 16" class="h-4 w-10 fill-current transition-all duration-200 translate-x-[-1.5rem] group-hover:translate-x-0">
                            <use v-if="!icon" href="/sprite/far.svg#plus" width="16" />
                            <use v-if="!icon" href="/sprite/far.svg#plus" width="16" x="24" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>


<style>
@media (min-width:1024px) {
    .title-type {
        padding-top: calc(var(--menu-height) + 20px);
    }
}

.realisation-type {
    .pc-screen {
        perspective: 705px;
        perspective-origin: 50% 50%;
        height: fit-content;
    
        .screen {
            view-timeline: --scroll-screen;
            transform: skew(0deg,28deg);
            top: 23.2%;
            left: 36.7%;
    
            @supports (animation-timeline: view(block)) {
                @media (min-width:768px) {
                    .scroll-screen {
                        animation-name: scroll-screen-real;
                        animation-timing-function: ease-in;
                        animation-fill-mode: both;
                        animation-timeline: --scroll-screen;
                        animation-duration: 1ms;
                        animation-range: cover 30% cover 100%;
                    }
                }
            }
        }
    }
    .realisation-content,
    .view-more {
        @apply opacity-0 pointer-events-none;
    }
    &[data-init-view-more="true"] {
        @apply relative after:content-[''] after:w-full after:absolute after:bottom-0 after:left-0 after:h-[30vh] after:pointer-events-none;
        &:after {
            background: linear-gradient(180deg, rgba(255,255,255,0) 10%, rgba(255,255,255,1) 50%);
        }

        .content-realisation,
        .view-more {
            @apply opacity-100 pointer-events-auto duration-700;
        }
        .content-realisation {
            @apply h-[200vh] overflow-clip ;
        }
        &[data-open="true"] {
            @apply after:opacity-0;
            .content-realisation {
                height: var(--content-height);
            }
            .view-more {
                @apply hidden;
            }
        }
    }
    &[data-init-view-more="false"] {
        .content-realisation,
        .view-more {
            @apply opacity-100 pointer-events-auto;
        }
        .view-more {
            @apply hidden;
        }
        
    }
}
@keyframes scroll-screen-real {
    from {
        transform: translateY(0%);
    }
    to {
        transform: translateY(-60%);
    }
}
  
</style>