<script>
export default {
    name : "DropdownYoutube",
    props : {
        items : Array,
    },
 }


document.addEventListener("DOMContentLoaded", function () {
    const dropdownYoutube = document.querySelectorAll(".dropdown-youtube");
    for(const section of dropdownYoutube) {
        const dropdowns = section.querySelectorAll(".video");
        closeAllDropdown();
        dropdowns[2].dataset.open="true";
        section.dataset.init="true";

        for(const dropdown of dropdowns) {
            dropdown.addEventListener("mouseenter", () => {
                closeAllDropdown();
                dropdown.dataset.open="true";
            })
        }
        function closeAllDropdown () {
            for(const dropdown of dropdowns) {
                dropdown.dataset.open="false";
            } 
        }
    }
});
</script>


<template>
    <section class="dropdown-youtube md:h-[750px] py-4 bg-black/75 max-md:my-10">
        <div class="dropdown container px-4 mx-auto max-w-[1680px] flex flex-col md:flex-row justify-between gap-4 h-full  text-white">
            <a v-for="(item, index) in items" :key="index" :href="item.link" target="_blank" class="video rounded-md duration-500 h-[230px] md:h-full overflow-clip md:w-24 md:grow-0 relative">
                <img class="vignette image-scroll pointer-events-none absolute object-cover inset-0 z-0 w-full h-full" :src="item.image" alt="video-youtube" />
                <div class="overlay-video absolute left-0 pointer-events-none z-[1] bottom-0 h-1/2 w-full"></div>
                <div class="title absolute z-10 open flex flex-col gap-4 bottom-8 left-8">
                    <strong class="video-title duration-700 title-5 ">
                        {{ item.title }}
                    </strong>
                    <span class="subtitle duration-700 text-3xl ml-4 ">
                        {{ item.subtitle }}
                    </span>
                </div>
                <div class="title-close absolute bottom-0 left-0 max-md:hidden">
                    <span class="video-title origin-top-left pt-6 duration-700 close text-4xl absolute whitespace-nowrap -rotate-90 bottom-0 left-0 z-10 close">
                        {{ item.title }}
                    </span>
                </div>
            </a>
        </div>
    </section>
</template>


<style scoped>
 .dropdown-youtube {
    @media (min-width:768px) {
        opacity: 0;
        &[data-init="true"] {
            @apply opacity-100;
            .video {
                .vignette {
                    @apply blur-md;
                }
                .open {
                .video-title {
                    @apply opacity-0 -translate-x-[150%];
                }
                .subtitle {
                    @apply opacity-0 -translate-x-[200%];
                }
                }
                .close {
                }
                .overlay-video {
                    @apply h-full;
                }
    
                &[data-open="true"] {
                    @apply grow;
                    .vignette {
                    @apply blur-none;
                }
                    .open {
                        .video-title {
                            @apply opacity-100 -translate-x-0;
                        }
                        .subtitle {
                            @apply opacity-100 -translate-x-0;
                        }
                    }
                    .close {
                        @apply translate-y-[500px] opacity-0;
                    }
                    .overlay-video {
                        @apply h-full;
                    }
                }
            }
        }
    }
    .overlay-video {
        background: linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(0,0,0,1) 100%);
    }
 }
</style>