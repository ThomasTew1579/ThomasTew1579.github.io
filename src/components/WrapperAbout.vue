<script>
export default {
    name : "WrapperAbout",
 }

 document.addEventListener("DOMContentLoaded", function () {
     const wrapperAbout = document.querySelector(".wrapper-about");
     if(!wrapperAbout) return;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const bgLine = wrapperAbout.querySelector(".fil-scroll");
    const hero = wrapperAbout.querySelector(".hero-image");
    const bodyHeight = wrapperAbout.clientHeight;
    const lines = bgLine.querySelectorAll(".line-scroll");
    
    initLine();
    
    function initLine () {
        bgLine.classList.add("opacity-0");
        setTimeout(() => {
            wrapperAbout.style.setProperty("--window-height", windowHeight);
            wrapperAbout.style.setProperty("--body-height", bodyHeight);
            for(const line of lines) {
                let viewBox = line.viewBox;
                viewBox.baseVal.width = windowWidth;
            }
            bgLine.classList.remove("opacity-0");
        }, 800);
    }
    
    window.addEventListener("resize", () => {
        initLine();
    })
 })

</script>

<template>
    <div class="wrapper-about relative z-[49] my-[20dvh] bg-primary-900 overflow-x-clip">
        <svg class="bubble top pointer-events-none hidden md:block fill-primary-900 top-0 -translate-y-[99%] absolute" xmlns="http://www.w3.org/2000/svg" viewBox="-0.1 -1175.1 3000 1177">
            <path d="M 0 0 C 1000 -1 2000 0 3000 0 L 3000 2 L 0 2 Z"/>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
        <div class="fil-scroll | bg max-lg:hidden">
            <div class="bg-line">
                <svg class="line-scroll" viewBox="0 0 1512 12600" stroke-linejoin="round" stroke-linecap="round" stroke-width="70px" xmlns="http://www.w3.org/2000/svg">
                    <use href="/image/about/line-scroll.svg#l1" style="--path-lenght:2027;" x="0" y="0" />
                    <use href="/image/about/line-scroll.svg#l2" style="--path-lenght:1785;" x="0" y="1050" />
                    <use href="/image/about/line-scroll.svg#l3" style="--path-lenght:1694;" x="0" y="2100" />
                    <use href="/image/about/line-scroll.svg#l4" style="--path-lenght:1559;" x="0" y="3150" />
                    <use href="/image/about/line-scroll.svg#l5" style="--path-lenght:2924;" x="0" y="4200" />
                    <use href="/image/about/line-scroll.svg#l6" style="--path-lenght:1250;" x="0" y="5250" />
                    <use href="/image/about/line-scroll.svg#l7" style="--path-lenght:1402;" x="0" y="6300" />
                    <use href="/image/about/line-scroll.svg#l8" style="--path-lenght:1165;" x="0" y="7350" />
                    <use href="/image/about/line-scroll.svg#l9" style="--path-lenght:1444;" x="0" y="8400" />
                    <use href="/image/about/line-scroll.svg#l10" style="--path-lenght:1581;" x="0" y="9450" />
                    <use href="/image/about/line-scroll.svg#l11" style="--path-lenght:1215;" x="0" y="10500" />
                    <use href="/image/about/line-scroll.svg#l12" style="--path-lenght:1136;" x="0" y="11550" />
                </svg>
            </div>
        </div>
        <svg class="bubble bottom pointer-events-none  hidden md:block  fill-primary-900 rotate-180 bottom-0 translate-y-[99%] absolute" xmlns="http://www.w3.org/2000/svg" viewBox="-0.1 -1175.1 3000 1177">
            <path d="M 0 -500 C 1 -1400 3000 -1400 3000 -500 L 3000 2 L 0 2 Z"/>
        </svg>
    </div>
</template>

<style>



.wrapper-about {
    view-timeline: --wrapper-about;
    --svg-height: 1050;
    --value: 50;
    --indice: calc(calc(calc(var(--value) / 100) / 2) - calc(calc(calc(var(--svg-height) / var(--window-height)) * 100) - 90) / 1000);
    --ratio-svg-widow: calc(calc(var(--svg-height) / var(--window-height)) * 100);
    --start-line: calc(calc(calc(var(--indice) * -1) * var(--ratio-svg-widow) + var(--value)));
    --end-line: calc(calc(var(--indice) * var(--ratio-svg-widow) + var(--value)));

    .fil-scroll {
        z-index: -1;
        position: absolute;
        overflow: clip;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient( 0deg, #252773 5%,  #252873e4 49%,#252873e4 70%, #252773 95%);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        animation-duration: 0.2s;
        opacity: 1;

        .bg-line {
            --line-width: 1512px;
            background: white;
            mix-blend-mode: darken;
            width: 100%;

            .line-scroll {
            margin-block: -2px;
            overflow: visible;
            & use {
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 70px;
                fill: none;
                stroke: #252773;
                transform: translateX(calc(50vw - (var(--line-width) * 0.5)));
                height: calc(var(--svg-height) * 1px);
                animation-name: line-scroll;
                animation-timing-function: linear;
                animation-fill-mode: both;
                animation-timeline: view(block);
                animation-duration: 1ms;
                animation-range: cover calc(var(--start-line) * 1%) cover
                calc(var(--end-line) * 1%);
            }
            }
        }
    }

    
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
    @keyframes line-scroll {
    from {
      stroke-dasharray: 0 var(--path-lenght);
      opacity: 0;
    }
    1% {
      opacity: 1;
    }
    to {
      stroke-dasharray: var(--path-lenght) var(--path-lenght);
    }
}

</style>