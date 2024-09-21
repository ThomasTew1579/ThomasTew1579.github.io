<script>
import ButtonTertiary from './button/ButtonTertiary.vue';
export default {
    name : "CtaContact",
    props : {
        title : String,
        image : String,
        order : Boolean,
        bg : Boolean,
        btn1 : Object,
        btn2 : Object,
    },
    methods: {
        hasBtn1 () {
            return this.btn1.url && this.btn1.title;
        },
        hasBtn2 () {
            return this.btn2.url && this.btn2.title;
        },
    },
    components: {
        ButtonTertiary,
    }
 }

</script>


<template>
    <section id="cta-contact" class="cta-contact py-8 md:py-16 px-4 fade-in">
        <div class="container  xl:max-w-[1000px] md:px-12">
            <div class="cta p-8 overflow-clip bg-primary-900 rounded-2xl relative md:p-20 text-center">
                <img class="image-scroll absolute object-cover aspcet-square opacity-40 max-md:h-full inset-0 z-0 w-full" :src="image" alt="">
                <div class="text flex flex-col gap-8 z-10 relative text-white">
                    <h2 class="title-4">{{title}}</h2>
                    <div class="btn flex flex-col items-center md:flex-row justify-center gap-10">  
                        <ButtonTertiary v-if="hasBtn1" :link="btn1.url" :title="btn1.title" :icon="btn1.icon" />
                        <ButtonTertiary v-if="hasBtn2" :link="btn2.url" :title="btn2.title" :icon="btn2.icon" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
