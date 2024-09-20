<script>
import { RouterLink } from 'vue-router';

export default {
    name : "MenuItem",
    props : {
        title : String,
        link : String,
    },
    methods: {
    },
    components: {
		RouterLink,
	},
 }
</script>

<template>
    <RouterLink :to="link" class="menu-item first:lg:ml-auto after:content-[''] after:w-[0%] after:h-0.5 after:bg-white after:bottom-[10px] after:left-0 after:absolute after:duration-300 hover:after:w-full  py-4 px-2 font-semibold text-white relative duration-200 ">
        <span class="content">
            {{ title }}
        </span>
    </RouterLink>
</template>


<style>

</style>