<script>
import ButtonSecondary from './button/ButtonSecondary.vue';
import FooterItem from './button/FooterItem.vue';
export default {
    name : "Footer",
    components: {
        ButtonSecondary,
        FooterItem,
    }
 }
</script>

<template>
    <footer class="footer overflow-hidden relative block w-full">
        <div class="container">
            <div class="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 bg-primary-900 text-white rounded-t-2xl md:pb-20">
                <div class="col-1 flex flex-row gap-2">
                    <RouterLink to="/" class="md:w-28 md:h-28 w-16 h-16 relative block">
                        <img src="/image/logo.svg" alt="" class="logo">
                    </RouterLink>
                    <div class="flex flex-col gap-2">
                        <strong class="text-2xl">
                            Thomas Pasquet
                        </strong>
                        <p >Developeur Front-end</p>
                    </div>
                </div>
                <div class="col-3 md:ml-auto flex flex-col gap-2">
                    <FooterItem title="Qui suis-je ?" link="/about" />                        
                    <FooterItem title="Experiences" link="/experiences" />                        
                    <FooterItem title="Réalisations" link="/realisations" />                        
                    <FooterItem title="Formation" link="/formations" />    
                </div>
                <div class="col-4 md:ml-auto flex flex-col gap-2">
                    <strong class="text-xl mb-2">
                        Contact
                    </strong>
                    <a href="mailto:pasquet.thomas69@gmail.com" class="footer-item w-fit first:lg:ml-auto after:content-[''] after:w-[0%] after:h-0.5 after:bg-white after:bottom-[-5px] after:left-0 after:absolute after:duration-300 hover:after:w-full font-semibold text-white relative duration-200 ">
                        <span class="content">
                            pasquet.thomas69@gmail.com
                        </span>
                    </a>
                    <a href="tel:+33781598200" class="footer-item w-fit first:lg:ml-auto after:content-[''] after:w-[0%] after:h-0.5 after:bg-white after:bottom-[-5px] after:left-0 after:absolute after:duration-300 hover:after:w-full font-semibold text-white relative duration-200 ">
                        <span class="content">
                            07 81 59 82 00
                        </span>
                    </a>
                    <div class="reseaux flex flex-row gap-2">
                        <a href="https://github.com/ThomasTew1579" target="_blank" class="github">
                            <svg viewBox="0 0 40 40" class="h-10 w-10 fill-current transition-all duration-100 rounded-full outline outline-0 outline-white hover:outline-1">
                                <use href="/sprite/fab.svg#github" width="26" x="7" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/pasquet-thomas/" target="_blank" class="linkedin">
                            <svg viewBox="0 0 40 40" class="h-10 w-10 fill-current transition-all duration-100 rounded-full outline outline-0 outline-white hover:outline-1">
                                <use href="/sprite/fab.svg#linkedin" width="26" x="7" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/tew_1579/" target="_blank" class="insta">
                            <svg viewBox="0 0 40 40" class="h-10 w-10 fill-current transition-all duration-100 rounded-full outline outline-0 outline-white hover:outline-1">
                             <use href="/sprite/fab.svg#instagram" width="26" x="7" />
                            </svg>
                        </a>

                    </div>
                </div>

            </div>

        </div>
    </footer>
</template>

<style>
.footer {
    view-timeline: --footer-scroll;
    @supports (animation-timeline: view(block)) {
        @media (min-width:768px) {
            .container {
                animation-name: footer-container;
                animation-timing-function: linear;
                animation-fill-mode: both;
                animation-timeline:  --footer-scroll;
                animation-duration: 1ms;
                animation-range: cover 0% contain 0%;
            }
            .content > div {
                animation-name: footer-content;
                animation-timing-function: linear;
                animation-fill-mode: both;
                animation-timeline:  --footer-scroll;
                animation-duration: 1ms;
                animation-range: cover 0% contain 0%;
            }
        }
    }
}

@keyframes footer-container {
    from {
        transform: scaleX(1.3);
    }
    50% {
        transform: scaleX(1);
    }
}
@keyframes footer-content {
    0% {
        transform: translateY(20%);
        opacity: 0;
    }
    50% {
        transform: translateY(20%);
        opacity: 0;
    }
    80% {
        transform: translateY(0);
        opacity: 1;
    }
}

</style>
