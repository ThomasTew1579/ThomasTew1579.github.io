<script>
import { RouterLink } from 'vue-router';
import ButtonPrimary from './button/ButtonPrimary.vue';
import MenuItem from './button/MenuItem.vue';
export default {
    name : "Menu",
    props : {
    },
    methods: {
    },
    components: {
        ButtonPrimary,
        MenuItem,
        RouterLink
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const burger = menu.querySelector(".burger");
    let didScroll = false;
    var lastScrollTop = 0;
    const delta = 10;

    window.addEventListener("scroll", function () {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 160);
    
    function hasScrolled() {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - st) <= 30) {
            return;
        }

        if (st > lastScrollTop && st > menu.getBoundingClientRect().height) {
            // Scroll Down
            menu.classList.remove("scroll-default", "scroll-up");
            menu.classList.add("scroll-down");
        } else {
            // Scroll Up

            if (st < menu.getBoundingClientRect().height) {
                menu.style.setProperty("transition", "0s")
                menu.classList.remove("scroll-down", "scroll-up");
                menu.classList.add("scroll-default");
            } else {
                menu.style.setProperty("transition", "0.3s ease")
                menu.classList.remove("scroll-default", "scroll-down");
                menu.classList.add("scroll-up");
            }
        }
        lastScrollTop = st;
    }

    menu.classList.add("scroll-default");
    
    function handlePageScroll() {
        if (window.scrollY >= document.innerHeight * 0.6) {
            menu.classList.add("scroll");
        } else {
            menu.classList.remove("scroll");
        }
    }

    function handleClickMenu () {
        let isOpen = menu.dataset.menuIsOpen === "true";

        if(!isOpen ) {
            menu.dataset.menuIsOpen = "true";
        } else {
            menu.dataset.menuIsOpen = "";
        }
    }
    burger.addEventListener("click", handleClickMenu);
    window.addEventListener("resize", handleClickMenu);
    window.addEventListener("scroll", handlePageScroll);
 })


</script>

<template>
      <nav class="menu fixed top-0 left-0 w-full z-50 duration-300" >
            <div class="wrapper ">
                <div class="links flex flex-row gap-4 items-center py-2 px-4 duration-500">
                    <RouterLink to="/" class="text-[25px] md:text-[33px] font-bold cursor-pointer duration-300 !leading-[160%] hover:pl-8 pl-4 text-white">Thomas</RouterLink>
                   
                    <div class="nav duration-500 fixed top-[85px] right-0 flex flex-col w-full max-h-[90vh] gap-6 items-center max-lg:bg-black/70 ease-[cubic-bezier(0.53, -0.23, 0.5, 1.16)] max-md:max-w-[95vw] py-12 rounded-md lg:contents max-lg:backdrop-blur-md max-lg:translate-x-[110%]">
                            <MenuItem title="Qui suis-je ?" link="/#cta-contact" />                        
                            <MenuItem title="Réalisations" link="/#cta-contact" />                        
                            <MenuItem title="Experiences" link="/#cta-contact" />                        
                            <MenuItem title="Formation" link="/#cta-contact" />                        
                            <ButtonPrimary title="Contactez moi" icon="arrow-right" link="/#cta-contact" />                        
                    </div>
                    <button class="burger padding-0 relative ml-auto flex cursor-pointer items-center border-none bg-transparent outline-none lg:hidden" aria-label="Main Menu">
                        <svg width="40" height="40" viewBox="0 0 100 100">
                            <path class="line top" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path class="line center" d="M 20,50 H 80" />
                            <path class="line bottom" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </div>
    
            </div>                            
        </nav>
</template>

<style scoped>

.menu {
    @apply opacity-0 duration-150;
    &.scroll-default {
        @apply lg:absolute opacity-100;
        .wrapper {
            @apply container mx-auto px-2;
            .links {
                @apply rounded-b-md backdrop-blur-sm bg-black/30 hover:backdrop-blur-md;
            }
        }
    }
    &.scroll-up {
        @apply translate-y-0;
    }
    &.scroll-down {
        @apply -translate-y-full;
    }

    &.scroll-down,
    &.scroll-up {
        @apply fixed opacity-100;
        .wrapper {
            @apply backdrop-blur-sm bg-black/30 hover:backdrop-blur-md duration-200;
            .links {
                @apply container mx-auto px-2 ;
            }
        }
    }
    &.scroll {
        .links {
            @apply bg-black/45;
        }
    }

    .burger {
        .line {
            @apply fill-none stroke-white stroke-[6px];
            transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
            &.top {
                stroke-dasharray: 60 207;
            }
            &.center {
                stroke-dasharray: 60 60;
            }
            &.bottom {
                stroke-dasharray: 60 207;
            }
        }
    }


    &[data-menu-is-open="true"] {
        @media (max-width:1024px) {
        .links {
            @apply backdrop-blur-none bg-black/70;
                .nav {
                    @apply translate-x-0;
                }
            }
        }

        .burger {
            .line {
                &.top {
                    stroke-dasharray: 90 207;
                    stroke-dashoffset: -134;
                }
                &.center {
                    stroke-dasharray: 1 60;
                    stroke-dashoffset: -30;
                }
                &.bottom {
                    stroke-dasharray: 90 207;
                    stroke-dashoffset: -134;
                }
            }
        }
    }
}
</style>
