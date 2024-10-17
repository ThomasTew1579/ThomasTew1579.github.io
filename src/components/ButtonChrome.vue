<script>
export default {
    name : "ButtonChrome",
 }

 document.addEventListener("DOMContentLoaded", function () {
    const btnChrome = document.querySelector(".btn-chrome");
    
});

</script>


<template>
    <div class="btn-chrome fixed bottom-5 right-5 hover:w-[200px] hover:h-[190px] outline outline-2 outline-white transition-all duration-300 outline-offset-2 z-50 w-10 h-10 overflow-hidden bg-white rounded-[20px] p-2">
        <img class=" w-10" src="/image/chrome.webp" alt="logo google chrome">
        <p class="text-xs mt-1 p-2">
            Vous naviguez actuellement sur une version allégée du site. Pour une expérience complète, je vous recommande de le visiter depuis un navigateur web basé sur Chromium.
        </p>

    </div>
</template>


<style>
@supports (animation-timeline: view(block)) {
    .btn-chrome {
        display: none;
    }
}
.btn-chrome {
        animation: anim-chrome 1s infinite;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
@keyframes anim-chrome {
    from {
        outline-offset: 0px;
    }
    50% {
        outline-width: 4px;
    }
    to {
        outline-offset: 6px;
        outline-width: 0px;
    }
}
    
</style>