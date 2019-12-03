// Your code goes here

//logo 
const logoBig = document.querySelector(".logo-heading")

logoBig.addEventListener("mouseover", () => {
    logoBig.style.transform = "scale(1.2)";
    logoBig.style.transition = "transform .3s"


})

logoBig.addEventListener("mouseleave", () => {
    logoBig.style.transform = "scale(1)"
})

const pressKey = document.querySelector(".logo-heading")

window.addEventListener("keydown", () => {
    pressKey.style.color = "red";
})

window.addEventListener("keyup", () => {
    pressKey.style.color = "black";
})

window.addEventListener("keypress", (event) => {
    pressKey.style.color = "blue";
    event.stopPropagation();
})


//NAV

const wheelVar = document.querySelector(".nav-link")

window.addEventListener("wheel", () => {
    wheelVar.style.color = "red";
})




//HEADER IMG
const keys = document.querySelector(".intro img")

keys.addEventListener("click", () => {
    keys.style.transform = "scale(1.1)";
    keys.style.transistion = "transform .3s"
})

keys.addEventListener("dblclick", () => {
    keys.style.transform = "scale(1)";
    keys.style.transition = "transform .2";
})

const resizeImage =
document.querySelector(".intro img");

window.addEventListener('resize', () => {
resizeImage.src = "https://c4.wallpaperflare.com/wallpaper/63/433/185/desert-truck-bus-fallout-wallpaper-preview.jpg"
})


//H2 
const scrollText = document.querySelector(".intro h2")

window.addEventListener("scroll", () => {
    scrollText.style.color = "red"
    scrollText.style.transition = "transform .2";
})


//Propagation 

const props = document.querySelector(".content-destination")

props.addEventListener("click", () => {
    props.style.background = "red";
   
})

const nextStep = document.querySelector('.content-destination h2');
nextStep.addEventListener("click", (event) => {
    nextStep.style.color = "blue";
    event.stopPropagation();
    console.log(event);
})


//Prevent Links from Refreshing
const stoplink = document.querySelectorAll(".nav-link")

stoplink.forEach(el => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("stopped the link");
    })
})












