let moon = document.getElementById('moon')
let text = document.getElementById('text')
let cityRight = document.getElementById('cityRight')
let cityLeft = document.getElementById('cityLeft')

window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    moon.style.top = value * .08 + "rem";
    text.style.marginTop = value * .15 + "rem";
    cityLeft.style.left = value * -.15 + "rem";
    cityRight.style.left = value * .15 + "rem";
})