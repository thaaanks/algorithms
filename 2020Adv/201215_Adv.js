/* Day 15

JS Carousel
- use JS to make it function
- left and right arrows should Worker
- Use Css transitions
*/

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const card = document.querySelector(".card");
const gallery = document.querySelector(".gallery");
const current = document.querySelector(".current");


function showNextImg(){
    gallery.style.transform = "translateX(-200px)";
}

function showPreImg(){
    gallery.style.transform = "translateX(-20px)";
}


next.addEventListener("click", showNextImg);
previous.addEventListener("click", showPreImg);


