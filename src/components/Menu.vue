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
    const nav = menu.querySelector(".nav");
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
            document.body.classList.remove("scroll-default", "scroll-up");
            document.body.classList.add("scroll-down");
        } else {
            // Scroll Up

            if (st < menu.getBoundingClientRect().height) {
                document.body.style.setProperty("transition", "0s")
                document.body.classList.remove("scroll-down", "scroll-up");
                document.body.classList.add("scroll-default");
            } else {
                document.body.style.setProperty("transition", "0.3s ease")
                document.body.classList.remove("scroll-default", "scroll-down");
                document.body.classList.add("scroll-up");
            }
        }
        lastScrollTop = st;
    }

    document.body.classList.add("scroll-default");
    
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

    nav.addEventListener("click", handleClickMenu);
    burger.addEventListener("click", handleClickMenu);
    window.addEventListener("scroll", handlePageScroll);
 })


</script>

<template>
      <nav class="menu fixed top-0 left-0 z-50 duration-300 w-screen" >
            <div class="wrapper ">
                <div class="links flex flex-row gap-4 items-center py-2 px-4 duration-500">
                    <RouterLink to="/" class="home-logo group overflow-hidden relative text-[25px] md:text-[33px] font-bold cursor-pointer duration-300 !leading-[160%] md:hover:pl-12 pl-2 text-white">Thomas</RouterLink>
                   
                    <div class="nav duration-500 fixed top-[85px] right-0 flex flex-col w-full max-h-[90vh] gap-6 items-center max-lg:bg-black/70 ease-[cubic-bezier(0.53, -0.23, 0.5, 1.16)] max-md:max-w-[95vw] py-12 rounded-md lg:contents max-lg:backdrop-blur-md max-lg:translate-x-[110%]">
                            <MenuItem title="Qui suis-je ?" linkRouter="/about" />                        
                            <MenuItem title="Experiences" linkRouter="/experiences" />                        
                            <MenuItem title="Réalisations" linkRouter="/realisations" />                        
                            <MenuItem title="Formation" linkRouter="/formations" />                        
                            <ButtonPrimary title="Contactez moi" icon="envelope" linkRouter="#" hashRooter="#cta-contact" />                        
                            <ButtonPrimary title="Mon CV" icon="download" link="/image/CV_Thomas_PASQUET.pdf" target="_blank" />                        
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

body {
    &.scroll-default {
        .menu {
            @apply lg:absolute opacity-100;
            .wrapper {
                @apply container mx-auto px-2;
                .links {
                    @apply rounded-b-md backdrop-blur-sm bg-black/30 hover:backdrop-blur-md;
                }
            }
        }
    }
    &.scroll-up {
        .menu {
            @apply translate-y-0;
        }
    }
    &.scroll-down {
        .menu {
            @apply -translate-y-full;
        }
    }

    &.scroll-down,
    &.scroll-up {
        .menu {
            @apply fixed opacity-100;
            .wrapper {
                @apply backdrop-blur-sm bg-black/30 hover:backdrop-blur-md duration-200;
                .links {
                    @apply container mx-auto px-2 ;
                }
            }
        }
    }
    &.scroll {
        .menu {
            .links {
                @apply bg-black/45;
            }
        }
    }
}

.menu {
    .home-logo {
        &:before {
            @apply max-md:hidden absolute left-0 top-1 opacity-0 w-10 h-10 rotate-45 scale-0 duration-300;
            content: url(/image/logo.svg);
        }
        &:hover {
            &:before {
                @apply rotate-0 scale-100 opacity-100;
            }
        }
    }
    @apply opacity-0 duration-150;


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
