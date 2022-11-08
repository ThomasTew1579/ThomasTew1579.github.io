// nav-------------------------------------------------------------------------

let header = document.querySelector("header");
let product = document.querySelector("#products");
let ressource = document.querySelector("#ressource");
let navList = document.querySelectorAll(".navList li");

let mouse = document.addEventListener("mousemove", function mouse(e) {
  mouseY = e.clientY;
  if (mouseY > 345) {
    navUnactive(product);
    navUnactive(ressource);
  }
});

function navActive(section) {
  header.classList.replace("unactive", "active");
  product.classList.replace("active", "unactive");
  ressource.classList.replace("active", "unactive");
  if (section != undefined) {
    section.classList.replace("unactive", "active");
  }
}

function navUnactive(section) {
  setTimeout(() => {
    header.classList.replace("active", "unactive");
  }, 150);
  if (section != undefined) {
    section.classList.replace("active", "unactive");
  }
}

navList[0].addEventListener("mouseenter", () => {
  navActive(products);
});

navList[1].addEventListener("mouseenter", () => {
  navActive(ressource);
});

navList[2].addEventListener("mouseenter", () => {
  navActive();
});

// -------------------------------------------------------------------------nav

// parallaxe-------------------------------------------------------------------

let parallaxe = document.querySelectorAll(".parallaxe img");

function parallaxeMove(index) {
  parallaxePosition =
    window.innerHeight - parallaxe[index].getBoundingClientRect().top;

  if (parallaxePosition > 0) {
    parallaxe[index].style.top = parseInt(parallaxePosition / 3) + "px";
  }
}

addEventListener("scroll", () => {
  parallaxeMove(0);
  parallaxeMove(1);
});

// -------------------------------------------------------------------parallaxe

//gallery----------------------------------------------------------------------

let left = document.querySelector(".btnL");
let right = document.querySelector(".btnR");

let video = document.querySelector("#galleryVideo");
let img = document.querySelector("#galleryImg");
let author = document.querySelector("#galleryAuthor");
let text = document.querySelector("#galleryText");

let counterCard = document.querySelectorAll("#counterCard div");

let exk = document.querySelector("#exk");
let ditp = document.querySelector("#ditp");
let bnp = document.querySelector("#bnp");




let exkiContent ={
  video:             "assets/img/Casclient-Exki.jpg",
  img:               "assets/img/EXKi-2.png",
  author:            "Thierry Soubestre",
  text:              "In a few weeks, 5 critical financial data sources were integrated and information is now available every day.",
}

let ditpContent = {
  video:             "assets/img/Casclient-DITP.jpg",
  img:               "assets/img/ditp.png",
  author:            "Bruno Parent",
  text:              "With propilot, we are able to share information in real time and use this effectively to steer the covid19 recovery plan across all ministries ",
}

let bnpContent ={
  video:             "assets/img/Casclient-BNPParibas.jpg",
  img:               "assets/img/bnp-paribas.png",
  author:            "Hervé Gouëzel",
  text:              "The solutions offered by Pilot'in let us keep control of our plan. In the end, we were able to largely surpass our initial objectives.",
}

let listContent = [exkiContent, ditpContent, bnpContent ];

let index = 0;


right.addEventListener("click", () => {
  next("+");
});

left.addEventListener("click", () => {
  next("-");
});

function next(signe) {
  video.style.opacity = "0";
  img.style.opacity = "0";
  author.style.opacity = "0";
  text.style.opacity = "0";
  if (signe == "+") {
    index++;
    if (index >= listContent.length) {
      index = 0;
    }
    unactive("right");
    active(index, "right");
    changeText(index);
    return;
  }
  if (signe == "-") {
    index--;
    if (index < 0) {
      index = listContent.length - 1;
    }
    unactive("left");
    active(index, "left");
    changeText(index);
    return;
  }
}

function unactive(sens) {
  video.className = "disparition_" + sens;
  img.className = "disparition_" + sens;
  author.className = "disparition_" + sens;
  text.className = "disparition_" + sens;
}

function active(indexContent, sens) {
  setTimeout(() => {
    video.src = listContent[indexContent].video;
    img.src = listContent[indexContent].img;
    author.textContent = listContent[indexContent].author;
    text.textContent = listContent[indexContent].text;
    video.className = "apparition_" + sens;
    img.className = "apparition_" + sens;
    author.className = "apparition_" + sens;
    text.className = "apparition_" + sens;
  }, 200);
}

function changeText(indexContent) {
  setTimeout (() =>{
    video.src= listContent[indexContent].video
    img.src= listContent[indexContent].img
    author.textContent = listContent[indexContent].author;
    text.textContent = listContent[indexContent].text;
  },200) 
  
  for (const index in counterCard) {
    if (index <= index.length + 1) {
      counterCard[index].classList.replace("active", "unactive");
    }
  }
  counterCard[indexContent].classList.replace("unactive", "active");
}


//----------------------------------------------------------------------gallery
