<script>
import { RouterLink } from 'vue-router';

export default {
    name : "FooterItem",
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
    <RouterLink :to="link" class="footer-item w-fit first:lg:ml-auto after:content-[''] after:w-[0%] after:h-0.5 after:bg-white after:bottom-[-5px] after:left-0 after:absolute after:duration-300 hover:after:w-full font-semibold text-white relative duration-200 ">
        <span class="content">
            {{ title }}
        </span>
    </RouterLink>
</template>
