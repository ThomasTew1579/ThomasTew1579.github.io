<script>
import { RouterLink } from 'vue-router';

export default {
    name : "FooterItem",
    props : {
        title : String,
        link : String,
        linkRouter : String,
    },
    methods: {
    },
    components: {
		RouterLink,
	},
 }
</script>

<template>
    <RouterLink v-if="linkRouter" :to="linkRouter" class="footer-item w-fit cursor-pointer first:lg:ml-auto after:content-[''] after:w-[0%] after:h-0.5 after:bg-white after:bottom-[-5px] after:left-0 after:absolute after:duration-300 hover:after:w-full font-semibold text-white relative duration-200 " :aria-label="title">
        <span class="content">
            {{ title }}
        </span>
    </RouterLink>
    <a v-if="!linkRouter" :href="link" class="footer-item w-fit cursor-pointer first:lg:ml-auto after:content-[''] after:w-[0%] after:h-0.5 after:bg-white after:bottom-[-5px] after:left-0 after:absolute after:duration-300 hover:after:w-full font-semibold text-white relative duration-200 " :aria-label="title">
        <span class="content">
            {{ title }}
        </span>
    </a>
</template>
