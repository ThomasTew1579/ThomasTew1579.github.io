<script>
import { RouterLink } from 'vue-router';

export default {
    name : "ButtonSecondary",
    props : {
        title : String,
        link : String,
        class : String,
        icon : String,
    },
    methods: {
    },
    components: {
		RouterLink,
	},
 }
</script>

<template>
    <RouterLink :to="link" class="btn-secondary group text-white bg-primary-900 group w-fit py-[10px] px-[19px] font-semibold text-base rounded-full relative overflow-hidden select-none touch-manipulation transition-all duration-300 inline-flex items-center gap-2.5 outline outline-primary-900 outline-0 hover:outline-1 hover:text-primary-900 hover:bg-white ">
        <span class="content">
            {{ title }}
        </span>
        <span class="icon group-hover:bg-primary-900 group-hover:text-primary-200 bg-primary-200 text-primary-900 size-[30px] p-[7px] overflow-hidden rounded-full duration-300">
            <svg viewBox="0 0 40 16" class="h-4 w-10 fill-current transition-all duration-200 translate-x-[-1.5rem] group-hover:translate-x-0">
                <use :href="'/src/assets/sprite/far.svg#' + icon" width="16" />
                <use :href="'/src/assets/sprite/far.svg#' + icon" width="16" x="24" />
            </svg>
        </span>
    </RouterLink>
</template>


<style>

</style>