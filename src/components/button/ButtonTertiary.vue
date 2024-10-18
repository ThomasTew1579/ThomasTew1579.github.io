<script>

export default {
    name : "ButtonTertiary",
    props : {
        title : String,
        link : String,
        target : String,
        linkRouter : String,
        class : String,
        icon : String,
    },
 }
</script>

<template>
    <RouterLink v-if="linkRouter" :to="linkRouter" :class="class" :target="target" class="btn-tertiary cursor-pointer group text-white bg-black/15 hover:bg-white hover:text-primary-900 group w-fit py-[10px] px-[19px] font-semibold text-base rounded-full relative overflow-hidden select-none touch-manipulation transition-all duration-300 inline-flex items-center gap-2.5">
        <span class="content">
            {{ title }}
        </span>
        <span class="icon size-[30px] p-[7px] bg-primary-900 text-primary-200 group-hover:bg-primary-200 group-hover:text-primary-900 overflow-hidden rounded-full duration-300">
            <svg viewBox="0 0 40 16" class="h-4 w-10 fill-current transition-all duration-300 translate-x-[-1.5rem] group-hover:translate-x-0">
                <use v-if="!icon" :href="'/sprite/far.svg#arrow-right'" width="16" />
                <use v-if="!icon" :href="'/sprite/far.svg#arrow-right'" width="16" x="24" />
                <use v-if="icon" :href="'/sprite/far.svg#' + icon" width="16" />
                <use v-if="icon" :href="'/sprite/far.svg#' + icon" width="16" x="24" />
            </svg>
        </span>
    </RouterLink>
    <a v-if="!linkRouter" :href="link" :class="class" :target="target" class="btn-tertiary link cursor-pointer group text-white bg-black/15 hover:bg-white hover:text-primary-900 group w-fit py-[10px] px-[19px] font-semibold text-base rounded-full relative overflow-hidden select-none touch-manipulation transition-all duration-300 inline-flex items-center gap-2.5">
        <span class="content">
            {{ title }}
        </span>
        <span class="icon size-[30px] p-[7px] bg-primary-900 text-primary-200 group-hover:bg-primary-200 group-hover:text-primary-900 overflow-hidden rounded-full duration-300">
            <svg viewBox="0 0 40 16" class="h-4 w-10 fill-current transition-all duration-300 translate-x-[-1.5rem] group-hover:translate-x-0">
                <use v-if="!icon" :href="'/sprite/far.svg#arrow-right'" width="16" />
                <use v-if="!icon" :href="'/sprite/far.svg#arrow-right'" width="16" x="24" />
                <use v-if="icon" :href="'/sprite/far.svg#' + icon" width="16" />
                <use v-if="icon" :href="'/sprite/far.svg#' + icon" width="16" x="24" />
            </svg>
        </span>
    </a>
</template>

