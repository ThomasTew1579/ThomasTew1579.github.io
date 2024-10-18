<script>
import WrapperRealisationsType from '../components/WrapperRealisationsType.vue';
export default {
    name : "ArchiveRealisations",
    components: {
        WrapperRealisationsType,
    },
    data() {
      return {
        realisations : [
          {
            type:"full-stack",
            typeName:"Projet full stack",
            content: [
            {
                name:"Inser-eco93 ",
                text:"Développement front-end et back-end pour un site vitrine. Projet réalisé seul avec satisfaction du client. Ce projet m'a permis d’appliquer mon expertise pour créer un site fonctionnel et ergonomique.",
                media:"/image/screen/insereco.webp",
              },
              {
                url:"https://urps-mk-ara.org/",
                name:"URPS MK ARA",
                text:"Création d’un filtre d’archives et d’une carte interactive en front-end et back-end. Client très satisfait du résultat. Cette solution technique complexe a amélioré considérablement l'expérience utilisateur en facilitant la recherche d’informations.",
                media:"/image/screen/urps-mk-ara.webp",
              },
              {
                url:"https://pilot-in.com/",
                name:"Pilot'in",
                text:"Premier gros projet full-stack réalisé seul. Le client a été satisfait du développement front-end et back-end. Cette réalisation a marqué une étape importante dans ma carrière en consolidant mes compétences techniques et ma gestion de projets d'envergure.",
                media:"/image/screen/pilotin.webp",
              },
              {
                url:"https://neoloc-immobilier.fr/",
                name:"Neoloc",
                text:"Refonte totale du site vitrine en front-end et back-end sans maquette. Résultat satisfaisant, le client continue de collaborer. J’ai su proposer des solutions efficaces pour répondre aux attentes du client tout en offrant une navigation optimisée.",
                media:"/image/screen/neoloc.webp",
              },
              {
                url:"https://novely-renovation.fr/",
                name:"Novely",
                text:"Refonte complète du site vitrine sans maquette, en front-end et back-end. Client satisfait du travail réalisé. J’ai pris des décisions créatives et techniques pour moderniser le site et améliorer son attractivité.",
                media:"/image/screen/novely.webp",
              },
              {
                name:"Serpol",
                text:"Développement complet front-end et back-end pour Serpol, branche de Serfim. Projet terminé avec succès. Client satisfait. Le site est conçu pour être évolutif et adaptable aux besoins futurs de l’entreprise.",
                media:"/image/screen/serpol.webp",
              },
              {
                name:"Serfim TIC",
                text:"Développement front-end et back-end. Site structuré et performant livré avec satisfaction du client. Ce projet a renforcé ma capacité à concevoir des solutions stables pour des entreprises à forte exigence technique.",
                media:"/image/screen/serfimtic.webp",
              },
              {
                name:"Terenvie",
                text:"Développement front-end et back-end pour cette branche de Serfim. Résultats très positifs et client satisfait. J’ai assuré un développement fluide et respecté les délais tout en garantissant une qualité optimale.",
                media:"/image/screen/terrenvie.webp",
              },
              {
                url:"https://www.pournosenfants.com/",
                name:"MTB pour nos enfants",
                text:"Développement full-stack avec intégration d’animations au scroll. Le client a apprécié l'interactivité du site. Les animations apportent une touche dynamique tout en garantissant une navigation fluide.",
                media:"/image/screen/mtbpne.webp",
              },
              {
                url:"https://www.manerty.com/",
                name:"Manerty ",
                text:"Premier site vitrine full-stack que j’ai développé seul. Le client est satisfait et nous travaillons toujours ensemble pour faire évoluer le site. Ce projet m’a permis de consolider mes compétences en front-end et back-end tout en répondant aux exigences spécifiques du client.",
                media:"/image/screen/manerty.webp",
              },
              
            ]
          },
          {
            type:"front-end",
            typeName:"Projet front end",
            content: [
              {
                url:"https://inovaya.com/",
                name:"Inovaya",
                text:"Développement d’animations au scroll en front-end, en équipe. Le client a été satisfait du rendu interactif. Le site offre une expérience visuelle fluide, parfaitement alignée avec les attentes du client.",
                media:"/image/screen/inovaya.webp",
              },
              {
                url:"https://www.cabinet-eyssette.fr/",
                name:"Cabinet Eyssette",
                text:"Développement des animations au scroll en CSS et du style du site en front-end. Projet réalisé en équipe avec succès. Client satisfait. J’ai contribué à créer une expérience utilisateur fluide grâce à des animations élégantes et efficaces.",
                media:"/image/screen/cabinet-eyssette.webp",
              },
              {
                url:"https://www.serfim.com/",
                name:"Serfim",
                text:"Développement des animations et du style du site en front-end. Ce projet m’a permis d'apprendre le back-end sur WordPress. Client satisfait. J’ai su m'adapter rapidement aux besoins techniques pour offrir un site fonctionnel et attractif.",
                media:"/image/screen/serfim.webp",
              },
              {
                url:"https://katrimmo.com/",
                name:"Katrimmo",
                text:"Refonte du style mobile en front-end, réalisée seul. Le site est optimisé pour une meilleure expérience utilisateur. Client satisfait. Ce projet m'a permis de perfectionner mes compétences en conception mobile-first.",
                media:"/image/screen/kattrimo.webp",
              },
              {
                url:"https://ridedott.com/fr/",
                name:"Dott",
                text:"Refonte complète du style du site et intégration en 8 langues. J’ai respecté un design strict imposé par le client. Le projet a été un succès, et je continue de collaborer pour les évolutions. Cette collaboration continue témoigne de la confiance que le client accorde à mon travail.",
                media:"/image/screen/dott.webp",
              },
              {
                url:"https://www.sepr.edu/",
                name:"SEPR",
                text:"Projet en équipe avec développement front-end de nombreuses animations. Le client a exprimé sa satisfaction. Nous avons réussi à maintenir une performance élevée malgré la complexité des animations.",
                media:"/image/screen/sepr.webp",
              },
              {
                url:"https://latetedanslesnuages.com/",
                name:"La Tête dans les Nuages",
                text:"Développement des animations et du style avec de nombreuses micro-animations en front-end, en équipe. Résultat apprécié par le client. Ce projet a mis en valeur ma capacité à créer des interfaces interactives et ludiques, adaptées à l'univers des jeux d'arcade.",
                media:"/image/screen/ltdln.webp",
              },
              {
                url:"https://www.biens-surs.fr/",
                name:"Biens Sûrs",
                text:"Développement front-end en équipe pour un promoteur immobilier. Le client a apprécié le design et la performance du site. Ce projet a permis d’allier esthétique et fonctionnalité pour une expérience utilisateur optimale.",
                media:"/image/screen/manerty.webp",
              },
              {
                url:"https://thermiconseil.com/",
                name:"Thermiconseil",
                text:"Projet en équipe pour le développement front-end, avec des défis de mise en page de contenu dense. Le client est satisfait. J’ai su trouver des solutions créatives pour rendre le contenu technique plus accessible et lisible.",
                media:"/image/screen/thermiconseil.webp",
              },
              {
                url:"https://www.groupe-sra.fr/",
                name:"SRA Group",
                text:"Développement front-end en équipe, avec une grande diversité de styles et de contenu. Client satisfait du rendu final. J’ai contribué à optimiser l'organisation des contenus pour une navigation fluide et intuitive.",
                media:"/image/screen/sra.webp",
              },
              {
                url:"https://unijus.org/",
                name:"Unijus",
                text:"Premier projet en front-end avec développement des animations et du style. Résultat final validé par le client. Ce projet m’a permis de faire mes premières armes en animation web tout en respectant les exigences de l’industrie.",
                media:"/image/screen/unijus.webp",
              },
            ]
          },
        ]
      }
    }
 }

</script>


<template>
    <section class="archive-ralisations">
        <div class="container mx-auto flex flex-col lg:flex-row gap-12">
            <div class="sidebar">
                <div class="content sticky flex flex-col gap-4 px-4 duration-300">
                  <strong class="text-xl">Type de projet :</strong>
                  <a v-for="(realisation, index) in realisations" :key="index" :href="'#'+realisation.type" class="types px-4 py-2 rounded-sm bg-primary-100 hover:text-white hover:bg-primary-900 duration-200 flex group overflow-hidden whitespace-nowrap pr-12 flex-row items-center gap-2">
                    {{ realisation.typeName }}
                      <svg viewBox="0 0 16 16" class="h-4 w-4 z-10 fill-white absolute right-4 transition-all duration-500 translate-x-[200%] group-hover:translate-x-0">
                        <use href="/sprite/far.svg#arrow-right" width="16" />
                    </svg>
                  </a>
                </div>
            </div>
            <div class="realisations flex flex-col gap-10 max-md:px-4">
                <WrapperRealisationsType :realisations="realisations" />
            </div>
        </div>
    </section>
</template>


<style scoped>
.archive-ralisations {
  .sidebar {
    padding-top: calc(var(--menu-height) + 20px);
    .content {
      top: calc(var(--menu-height) + 20px);
    }
  }
}

.scroll-down {
  .archive-ralisations {
  .sidebar {
    .content {
      top: 20px;
    }
  }
}
}
  
</style>