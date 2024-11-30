<script>
import ButtonSecondary from './button/ButtonSecondary.vue';
export default {
    name : "TimelineVertical",
    components: {
        ButtonSecondary,
    },
    data() {
      return {
        experiences :  [
          {
            label:'Développeur Full Stack - Pilot’in',
            icon:'code',
            texts:[
                "Développement de sites WordPress Back End / Front End",
                "Mise en production de sites web",
                "Participation aux cadrages d’avant vente avec le pôle avant-vente ",
                "Documentation des outils et processus internes ",
                "Maintenance et évolution des sites en production ",
            ],
            drawer:"En tant que développeur full stack chez Pilot’in, j'ai eu l'occasion de développer des sites de A à Z, en travaillant à la fois sur le front-end et le back-end. Mes missions incluaient la création de sites sous WordPress, leur mise en production, ansi que la maintenance et l'évolution continue des sites en ligne. J'ai également participé à la phase de cadrage en collaboration avec le pôle avant-vente, garantissant ainsi une bonne compréhension des besoins clients, et la mise en œuvre de solutions sur-mesure. En parallèle, j’ai rédigé des documentations pour des outils internes, assurant une transmission fluide des connaissances au sein de l’agence.",
          },
          {
            label:"Développeur Front End - Pilot’in",
            icon:'code',
            texts:[
                "Développement front-end et intégration de contenu",
                "Amélioration continue des processus internes",
                "Référant des développements Front avancés, en assurant la communication avec le pôle Design",
            ],
            drawer:"Dans mon rôle de développeur front-end, j'étais chargé d'intégrer des designs et de développer des fonctionnalités avancées en utilisant des technologies comme HTML, CSS, JavaScript, et PHP. J’ai amélioré en continu les process internes, en prenant également le rôle de référant pour les projets front-end complexes. En plus de ma responsabilité sur le développement, j'étais le point de contact entre l'équipe de développement et celle de design, assurant ainsi une communication fluide et une cohérence entre la conception graphique et la réalisation technique. Ce poste m'a permis de renforcer mon expertise en front-end tout en affinant mes capacités de travail en équipe.",
          },
          {
            label:"Régisseur Lumière dans le Spectacle Vivant et l'Événementiel",
            icon:'lightbulb-on',
            texts:[
                "Gestion d’équipe, 3 à 15 techniciens",
                "Gestion de stock d’équipements scéniques (1500 références)",
                "Planification, installation et câblage électrique d’équipement scénique",
                "Suivie de conduite lumière",
            ],
            drawer:"Avant de me reconvertir dans le développement web, j’ai occupé le poste de régisseur lumière dans le domaine du spectacle vivant et de l'événementiel. J'étais responsable de la gestion d'équipes techniques allant de 3 à 15 techniciens, ainsi que de la gestion de stocks d'équipements scéniques comprenant jusqu’à 1500 références. Mon travail impliquait la planification, l'installation et le câblage électrique des équipements scéniques, garantissant la bonne mise en œuvre des spectacles et événements. J’ai travaillé dans divers lieux, allant des théâtres aux salles de concert en passant par des événements corporate, ce qui a affiné ma capacité à travailler sous pression et à respecter des délais stricts. Cette expérience m’a donné un sens aigu de l’organisation et une capacité à gérer des projets complexes.",
          },
          {
            label:"Électromécanicien",
            icon:'bolt',
            texts:[
                "Chargé de la maintenance d’un parc de machines de production continue",
                "Calcul et dimmensionnement d’ installation de distribution",
                "Mise à jour de schémas éléctriques",
            ],
            drawer:"Au sein de plusieurs entreprises, j’ai occupé le poste d'électromécanicien, où j’étais chargé de la maintenance de parcs de machines industrielles en production continue. Cela incluait le calcul et le dimensionnement des installations électriques, ainsi que la mise à jour régulière de schémas électriques. Mon rôle était essentiel pour assurer le bon fonctionnement et la longévité des machines, tout en respectant les normes de sécurité et de qualité en vigueur. Ces responsabilités m’ont permis de développer une rigueur méthodique et une approche analytique des problématiques techniques.",
          },
          {
            label:"Étudiant et Jobs Étudiants",
            icon:'person-dolly',
            texts:[
                "Gestion de silo agricole",
                "Castration du mais",
            ],
            drawer:"Lors de mes études, j'ai également travaillé sur divers projets et missions en tant que job étudiant, notamment dans le secteur agricole avec Terrena, où j’ai géré un silo agricole, et la castration du maïs. Ces expériences m'ont inculqué un fort sens des responsabilités, de l’autonomie, ainsi qu'une excellente capacité d’adaptation à différents environnements de travail.",
          },
        ],
      }
    },
    mounted() {
    this.sectionTimline();
  },
  methods: {
    sectionTimline() {
        const timelineVertical = document.querySelector(".timeline-vertical");
    if(!timelineVertical) return;
    const mediaQuery = window.matchMedia("(min-width: 768px)").matches;

    const gapContent = parseInt(window.getComputedStyle(timelineVertical, null).getPropertyValue("--gap-content"));

    const contents = timelineVertical.querySelectorAll(".content");
    const followerSvg = timelineVertical.querySelector(".follower-svg");
    const loadingBar = timelineVertical.querySelector(".loading-bar");

    let contentHeightArray = [];

    contents[0].classList.replace("unactive", "active");

    timelineVertical.style.setProperty("--follower-top-position-0" , "0px" )

    const lastIndex = contents.length - 2;

    for(const [index, content] of Object.entries(contents)) {
        let contentHeight = content.getBoundingClientRect().height;
        contentHeightArray.push(contentHeight + gapContent);
        let totalContentHeight = 0;
        contentHeightArray.forEach((el) => {
            totalContentHeight = totalContentHeight + el;
        })
        timelineVertical.style.setProperty("--follower-top-position-" + (parseInt(index) + 1) , totalContentHeight + "px" );
        content.dataset.scrollPosition = timelineVertical.offsetTop + content.offsetTop - parseInt(window.getComputedStyle(document.body, null).getPropertyValue("--menu-height")) - 40;
        if(index == lastIndex) {
            timelineVertical.style.setProperty("--loading-bar-height" , totalContentHeight + "px" );
        }
    }
    
    function animScroll () {
        for(const [index, content] of Object.entries(contents)) {
        let contentTop = content.getBoundingClientRect().top;
        let contentBottom = content.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;


        if ( (windowHeight / 2) > contentTop && (windowHeight / 2) < contentBottom + 40 ) {
                content.classList.replace("unactive", "active");
                followerSvg.style.setProperty("top", "var(--follower-top-position-" + index + ")")
                loadingBar.style.setProperty("height", "calc(var(--follower-top-position-" + index + ") + 10px)")
        } else {
            content.classList.replace("active", "unactive");
        }

        if ( (windowHeight / 2) < contents[0].getBoundingClientRect().top ) {
            contents[0].classList.replace("unactive", "active");
        } 
        }
    }
    activeScroll();
    
    window.addEventListener("resize",() => activeScroll);

    function activeScroll () {
        if(mediaQuery) {
        window.addEventListener("scroll", animScroll);
        } else {
        window.removeEventListener("scroll", animScroll);
        }
    }

    const cardsDrawer = timelineVertical.querySelectorAll(".card-drawer");
    const drawers = timelineVertical.querySelectorAll(".drawer");
    const overlayDrawer = timelineVertical.querySelector(".overlay-drawer");
    
    overlayDrawer.addEventListener("click", closeAllDrawer);

    for(const card of cardsDrawer) {
        const btnDrawer = card.querySelector(".btn-drawer");
        btnDrawer.addEventListener("click", () => {
            closeAllDrawer()
            let drawerClass = ".drawer-"+card.dataset.cardId;
            let activeDrawer = timelineVertical.querySelector(drawerClass);
            console.log(drawerClass)
            activeDrawer.classList.add("drawer-open");
            overlayDrawer.classList.add("active-drawer");
        })
    }
    let didScrollTime = false;
    var lastScrollTopTime = 0;

    window.addEventListener("scroll", function () {
        didScrollTime = true;
    });

    setInterval(function () {
        if (didScrollTime) {
            hasScrolled();
            didScrollTime = false;
        }
    }, 160);

    function hasScrolled() {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTopTime - st) <= 30) {
            return;
        }
        closeAllDrawer()
        lastScrollTopTime = st;
    }

    function closeAllDrawer () {
        for(const drawer of drawers) {
            drawer.classList.remove("drawer-open");
        }
        overlayDrawer.classList.remove("active-drawer");
    }
    }
  }
}

</script>


<template>
    <section class="timeline-vertical py-16 lg:py-20 overflow-clip" >
        <div class="container xl:max-w-[1000px] mx-auto">
            <div class="column flex flex-col lg:flex-row gap-12 w-full">

                <div class="cards-row relative border-primary-800 w-full md:pl-12 flex flex-col gap-3">
                    <div class="bg-loading-bar hidden md:block absolute left-0 top-0 w-2  bg-white -translate-x-1/2">
                    </div>
                    <div class="loading-bar hidden md:block absolute left-0 top-0 w-2 rounded-md bg-primary-600 duration-700 -translate-x-1/2">
                    </div>
                    <div class="follower-svg fade-in hidden md:flex absolute left-[-18px] -translate-y-1 top-0 duration-700 justify-center items-center p-2 rounded-full bg-primary-600">
                        <svg class=" block size-5 fill-white z-10">
                            <use href="/sprite/far.svg#lightbulb-on" />
                        </svg>
                    </div>
                    <div class="cards flex flex-col">
                        <div v-for="(xp, index) in experiences"  :key="index" :data-card-id="index" :class="'card-' + index"  class="content card-drawer fade-in-card flex flex-col gap-2.5 unactive first:rounded-t-md border-t-2 border-primary-900 first:border-none last:rounded-b-md p-4 md:p-8 bg-primary-100 w-full">
                            <div class="title-card flex flex-row gap-2 items-center">
                                <svg viewBox="0 0 16 16" class="h-6 w-6 z-10 fill-primary-900 ">
                                    <use v-if="!xp.icon" href="/sprite/far.svg#start" width="16" />
                                    <use v-if="xp.icon" :href="'/sprite/far.svg#' + xp.icon" width="16" />
                                </svg>
                                <strong class="label text-xl">
                                    {{xp.label}}
                                </strong>
                            </div>
                            <ul class="list-disc list-inside pl-4 ">
                                <li v-for="(text, index) in xp.texts"  class="text mt-2">
                                    {{text}}
                                </li>
                            </ul>
                            <button aria-label="open-drawer" class="btn-secondary duration-300 btn-drawer mt-4 group cursor-pointer text-white bg-primary-900 group w-fit py-[10px] px-[19px] font-semibold text-base rounded-full relative overflow-hidden select-none touch-manipulation transition-all inline-flex items-center gap-2.5 outline outline-primary-900 outline-0 hover:outline-1 hover:text-primary-900 hover:bg-white ">
                                <span class="content-btn">
                                    En savoir plus
                                </span>
                                <span class="icon group-hover:bg-primary-900 group-hover:text-primary-200 bg-primary-200 text-primary-900 size-[30px] p-[7px] overflow-hidden rounded-full duration-300">
                                    <svg viewBox="0 0 40 16" class="h-4 w-10 fill-current transition-all duration-200 translate-x-[-1.5rem] group-hover:translate-x-0">
                                        <use href="/src/assets/sprite/far.svg#telescope" width="16" />
                                        <use href="/src/assets/sprite/far.svg#telescope" width="16" x="24" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay-drawer z-[49] opacity-0 translate-x-full fixed inset-0 w-full h-full bg-black/10 backdrop-blur-sm duration-300"></div>
        <div v-for="(xp, index) in experiences" :key="index" :class="'drawer-' + index" class="drawer duration-500 text-white h-full p-8 fixed top-1/2 right-0 -translate-y-1/2 translate-x-full rounded-l-md flex flex-col gap-10 lg:justify-center overflow-y-auto">
            <div class="title-card flex flex-row gap-2 items-center">
                <svg viewBox="0 0 16 16" class="h-6 w-6 min-w-6 z-10 fill-current ">
                    <use v-if="!xp.icon" href="/sprite/far.svg#start" width="16" />
                    <use v-if="xp.icon" :href="'/sprite/far.svg#' + xp.icon" width="16" />
                </svg>
                <strong class="label text-xl">
                    {{xp.label}}
                </strong>
            </div>
            <p class="text">
                {{xp.drawer}}
            </p>
        </div>
    </section>
</template>


<style>
 .timeline-vertical {
    --gap-content: 0px;
    .column {
        .sidebar {
            .card {
                top: 92px;
            }
        }
        .cards {
            @media (min-width:768px) {
                gap: var(--gap-content);                
            }
            .bg-loading-bar {
                height: calc(var(--loading-bar-height) - 10px) ;
            }
        }
    }

    .overlay-drawer {
        &.active-drawer {
            @apply opacity-100 translate-x-0;
        }
    }

    .drawer {
        z-index: 99;
        top: calc(50dvh + var(--menu-height)/2) ;
        max-height: calc(100dvh - var(--menu-height)*2);
        max-width: 500px;
        &.drawer-open {
            @apply translate-x-0 bg-primary-600;
        }
    }
    @supports (animation-timeline: view(block)) {
        @media (min-width:768px) {
            .fade-in-card {
                animation-name: card-fade-in;
                animation-timing-function: linear;
                animation-fill-mode: both;
                animation-timeline: view(block);
                animation-duration: 1ms;
                animation-range: entry-crossing 20% cover 40%;
                transform-origin: top right;
            }
        }
    }
}
@keyframes card-fade-in {
    from {
        transform: translateY(50%);
        opacity: 0;
        border-top-width: 0;
        filter: blur(8px);
    }
    50% {
        opacity: 0;
        border-top-width: 0;
    }
    to {
        transform: translateY(0) ;
        opacity: 1;
        border-top-width: 1px;
        filter: blur(0px);
    }
}

</style>
