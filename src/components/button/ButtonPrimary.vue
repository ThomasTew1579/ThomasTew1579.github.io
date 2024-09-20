<script>
import { RouterLink } from 'vue-router';

export default {
    name : "ButtonPrimary",
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
    <RouterLink :to="link" class="btn-primary bg-primary-900 text-white hover:bg-white hover:text-primary-900 relative group py-3 pr-5 pl-10 hover:pr-10 hover:pl-5 after:content-[''] after:absolute after:bg-white after:left-4 after:w-2 after:h-2 after:aspcet-square after:rounded-full hover:after:scale-[50] after:duration-700 font-semibold text-base rounded-tl-md rounded-br-md overflow-hidden select-none touch-manipulation transition-all duration-300 inline-flex items-center gap-2.5">
        <span class="content z-10">
            {{ title }}
        </span>
        <svg viewBox="0 0 16 16" class="h-4 w-4 z-10 fill-primary-900 absolute right-4 transition-all duration-500 translate-x-[200%] group-hover:translate-x-0">
            <use :href="'/src/assets/sprite/far.svg#' + icon" width="16" />
        </svg>
    </RouterLink>
</template>


<style scoped>
    .btn-primary {
        &[data-is-active="true"] {
            outline: inset 1px var(--primary-900);
        }
    }
</style>