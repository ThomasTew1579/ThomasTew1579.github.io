<script setup>
import ButtonPrimary from './button/ButtonPrimary.vue';

</script>

<script>
export default {
    name : "Menu",
    props : {
    },
    methods: {
    }
}
</script>

<template>
      <nav class="menu fixed top-0 left-0 w-full z-50 duration-300" >
            <div class="container px-2">
                <div class="links flex flex-row gap-4 rounded-b-md items-center py-2 px-4 duration-500">
                    <a href="/index.html" class="text-[25px] md:text-[33px] font-bold cursor-pointer duration-300 !leading-[160%] hover:pl-8 pl-4 text-white">Thomas</a>
                   
                    <div class="nav duration-500 fixed top-[85px] right-0 flex flex-col w-full max-h-[90vh] gap-6 items-center max-lg:bg-black/70 ease-[cubic-bezier(0.53, -0.23, 0.5, 1.16)] max-md:max-w-[95vw] py-12 rounded-l-2xl lg:contents">
                            <ButtonPrimary title="test" icon="arrow-right" link="/index.html#cta-contact" />                        
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
    .links {
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, 0.3);
        &:hover {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        @media (max-width:1024px) {
            .nav {
                backdrop-filter: blur(9px);
                -webkit-backdrop-filter: blur(9px);
                transform: translateX(110%);
            }
        }
    }

    &.scroll {
        .links {
            background: rgba(0, 0, 0, 0.45);
        }
    }

    .btn-menu {
        &::after {
            content: "";
            width: 0%;
            height: 2px;
            background: white;
            bottom: 10px;
            left: 0;
            position: absolute;
            transition: 0.3s;
        }
        &:hover {
            &::after {
                width: 100%;
            }
        }
    }

    .burger {
        .line {
            fill: none;
            stroke: white;
            stroke-width: 6;
            transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);

            &.top {
                stroke-dasharray: 60 207;
                stroke-width: 6;
            }

            &.center {
                stroke-dasharray: 60 60;
                stroke-width: 6;
            }

            &.bottom {
                stroke-dasharray: 60 207;
                stroke-width: 6;
            }
        }
    }


    &[data-menu-is-open="true"] {
        @media (max-width:1024px) {
        .links {
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            background: rgba(0, 0, 0, 0.7);
                .nav {
                    transform: translateX(0);
                }
            }
        }

        .burger {
            .line {
                &.top {
                    stroke-dasharray: 90 207;
                    stroke-dashoffset: -134;
                    stroke-width: 6;
                }

                &.center {
                    stroke-dasharray: 1 60;
                    stroke-dashoffset: -30;
                    stroke-width: 6;
                }

                &.bottom {
                    stroke-dasharray: 90 207;
                    stroke-dashoffset: -134;
                    stroke-width: 6;
                }
            }
        }
    }
}
</style>
