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
            label:'Développeur Full Stack chez Pilot’in',
            text:"J'ai participé à la conception et à la mise en production de sites WordPress, tout en assurant la maintenance des sites et l'évolution des fonctionnalités. J’ai également contribué à la documentation interne et à la gestion des avant-ventes.",
          },
          {
            label:"Développeur Front End chez Pilot’in",
            text:"En tant que développeur front-end, j'étais responsable de l'intégration de contenu et des échanges entre les pôles développement et design.",
          },
          {
            label:"Régisseur Lumière dans le Spectacle Vivant",
            text:"Je dirige une équipe de techniciens pour gérer l’installation et l’éclairage de concerts et de spectacles dans plusieurs lieux emblématiques comme Cité International et Transborder.",
          },
        ],
      }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const timelineVertical = document.querySelector(".timeline-vertical");
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
                loadingBar.style.setProperty("height", "var(--follower-top-position-" + index + ")")
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
})

</script>


<template>
    <section class="timeline-vertical py-16 lg:py-20" >
        <div class="container xl:max-w-[1200px] mx-auto">
            <div class="column flex flex-col lg:flex-row gap-12 w-full">
                <div class="sidebar">
                    <div class="card fade-in lg:w-96 flex flex-col gap-6 sticky bg-primary-200 p-6 rounded-3xl">
                        <div class="">
                            <h2 class="title-5">titre attente</h2>
                            <p>lorem ipsummmmmm</p>
                        </div>
                    </div>
                </div>

                <div class="cards-row relative border-primary-800 w-full md:pl-12 flex flex-col gap-3">
                    <div class="bg-loading-bar hidden md:block absolute left-0 top-0 w-2  bg-white -translate-x-1/2">
                    </div>
                    <div class="loading-bar hidden md:block absolute left-0 top-0 w-2 rounded-md bg-primary-600 duration-700 -translate-x-1/2">
                    </div>
                    <div class="follower-svg fade-in hidden md:flex absolute left-[-18px] -translate-y-1 top-0 duration-700 justify-center items-center p-2 rounded-full bg-primary-600">
                        <svg class=" block size-5 fill-white z-10">
                            <use href="/src/assets/sprite/far.svg#lightbulb-on" />
                        </svg>
                    </div>
                    <div class="cards flex flex-col">
                        <div v-for="(xp, index) in experiences"  :key="index"  class="content fade-in flex flex-col gap-2.5 unactive first:rounded-t-md border-t-2 border-primary-900 first:border-none last:rounded-b-md p-8 md:p-12 bg-primary-100 w-full">
                            <strong class="label title-6">
                                {{xp.label}}
                            </strong>
                            <div class="text mt-2">
                                {{xp.text}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                height: var(--loading-bar-height);
            }
        }
    }
}

</style>