let burger = document.getElementById("burger");
let header = document.querySelector("header")
let nav = document.querySelector("nav");
let liensNav = nav.querySelectorAll("a");


function activeMenu () {
    if(innerWidth <= 1000){
        if (header.classList.contains("active")) {
            header.classList.replace("active", "desactive");
        } else {
            header.classList.replace("desactive", "active");
        }
    }
  }

burger.addEventListener("click", () => {
    activeMenu()
})

liensNav[0].addEventListener("click", () => {
    activeMenu()
})

liensNav[1].addEventListener("click", () => {
    activeMenu()
})

liensNav[2].addEventListener("click", () => {
    activeMenu()
})

liensNav[3].addEventListener("click", () => {
    activeMenu()
})


let cv = document.querySelector(".arrowWrapper");


cv.addEventListener("mouseover", () => {
    console.log("ping")
  cv.classList.add("active");
});
cv.addEventListener("mouseleave", () => {
  cv.classList.remove("active");
}); 





let homePhoto = document.querySelector(".home_photo")
let home = document.getElementById("home")

homePhoto.addEventListener("mouseover", () => { 
    home.classList.add("active")
});
homePhoto.addEventListener("mouseleave", () => {
  home.classList.remove("active");
});


let about = document.getElementById("about")
let article = document.querySelectorAll("article")



function activecroll (id, scroll){
    if (window.scrollY < scroll) {
        id.classList.replace("active", "desactive");
    } else {
        id.classList.replace("desactive", "active");
    }
}

document.addEventListener("scroll", () => {
    // console.log(window.scrollY)
    activecroll(about, 250);

    if(window.innerWidth < 600 ){
        activecroll(article[0], 1250);
        activecroll(article[1], 1750);
        activecroll(article[2], 2250);
        activecroll(article[3], 2750);
        activecroll(article[4], 3250);
        activecroll(article[5], 3750);
        activecroll(article[6], 4250);
        activecroll(article[7], 4750);
    } else {
        activecroll(article[0], 800);
        activecroll(article[1], 1300);
        activecroll(article[2], 1800);
        activecroll(article[3], 2300);
        activecroll(article[4], 2800);
        activecroll(article[5], 3300);
        activecroll(article[6], 3800);
        activecroll(article[7], 4300);
    }
    
})