<script>
import ButtonSecondary from './button/ButtonSecondary.vue';
export default {
    name : "Footer",
    components: {
        ButtonSecondary,
    }
 }

</script>


<template>
    <foooter class="footer">
        <div class="container">
            <div class="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10 bg-primary-900 text-white rounded-t-2xl md:pb-20">
                <div class="col-1">
                    <strong class="title-5">
                        Thomas Pasquet
                    </strong>
                    <p class="mt-4">Developeur Front-end</p>
                </div>
                <div class="col-2 ml-auto">
                    <strong>
                        Liens
                    </strong>
                </div>
                <div class="col-3 ml-auto flex flex-col gap-2">
                    <strong>
                        Liens
                    </strong>
                    <!-- <a class="link" href="mailto:pasquet.thomas69@gmail.com" class="mail">Qui suis-je ?</a>
                    <a class="link" href="mailto:pasquet.thomas69@gmail.com" class="mail">Réalisations</a>
                    <a class="link" href="mailto:pasquet.thomas69@gmail.com" class="mail">Experiences</a>
                    <a class="link" href="mailto:pasquet.thomas69@gmail.com" class="mail">Formation</a> -->
                </div>
                <div class="col-4 ml-auto flex flex-col gap-2">
                    <strong>
                        Contact
                    </strong>
                    <!-- <a class="link" href="mailto:pasquet.thomas69@gmail.com" class="mail">pasquet.thomas69@gmail.com</a>
                    <a class="link" href="tel:+33781598200" class="mail">07 81 59 82 00</a> -->
                    <div class="reseaux flex flex-row gap-2">
                        <a href="" class="github">
                            <svg viewBox="0 0 40 40" class="h-10 w-10 fill-current transition-all duration-100 rounded-full outline outline-0 outline-white hover:outline-1">
                                <!-- <use xlink:href="/src/sprite/fab.svg#github" width="26" x="7" /> -->
                            </svg>
                        </a>
                        <a href="" class="linkedin">
                            <svg viewBox="0 0 40 40" class="h-10 w-10 fill-current transition-all duration-100 rounded-full outline outline-0 outline-white hover:outline-1">
                                <!-- <use xlink:href="/src/sprite/fab.svg#linkedin" width="26" x="7" /> -->
                            </svg>
                        </a>
                        <a href="" class="insta">
                            <svg viewBox="0 0 40 40" class="h-10 w-10 fill-current transition-all duration-100 rounded-full outline outline-0 outline-white hover:outline-1">
                                <!-- <use xlink:href="/src/sprite/fab.svg#instagram" width="26" x="7" /> -->
                            </svg>
                        </a>

                    </div>
                </div>

            </div>

        </div>
    </foooter>
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

    .link {
        position: relative;
        width: fit-content;
        &::after {
            content: "";
            width: 0%;
            height: 2px;
            background: white;
            bottom: 0px;
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
