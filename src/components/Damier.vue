<script>
export default {
    name : "Damier",
    props : {
        title : String,
        text : String,
        btn : Object,
    },
    methods: {
        hasBtn () {
            return this.btn.url && this.btn.title;
        }
    }
 }

</script>


<template>
    <section class="damier-experiences flex bg-primary-100 flex-col gap-10 py-8 md:py-16 px-4">
        <div class="container md:px-12 xl:max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="text fade-in flex flex-col gap-4">
                <h2 class="title-5">{{ title }}</h2>
                <p class="">{{text}}</p>
                <a v-if="hasBtn" :href="btn.url"  class="btn-primary group w-fit py-[10px] px-[19px] font-semibold text-base rounded-full relative overflow-hidden select-none touch-manipulation transition-all duration-300 inline-flex items-center gap-2.5 outline outline-primary-900 outline-0 hover:outline-1">
                    <span class="content">
                        {{ btn.title }}
                    </span>
                    <span class="icon  size-[30px] p-[7px] overflow-hidden rounded-full duration-300">
                        <svg viewBox="0 0 40 16" class="h-4 w-10 fill-current transition-all duration-300 translate-x-[-1.5rem] group-hover:translate-x-0">
                            <use href="../assets/sprite/far.svg#arrow-right" width="16" />
                            <use href="../assets/sprite/far.svg#arrow-right" width="16" x="24" />
                        </svg>
                    </span>
                </a>
            </div>
            <div class="image hidden md:flex overflow-clip rounded-2xl relative h-[300px] lg:h-[500px] fade-in">
                <img class="image-scroll absolute object-cover inset-0 w-full h-full" src="../assets/image/illustrations/illu-form.webp" alt="">
            </div>
        </div>
    </section>
</template>
