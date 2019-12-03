// Your code goes here
const logoBig = document.querySelector(".logo-heading")

logoBig.addEventListener("mouseover", () => {
    logoBig.style.transform = "scale(1.2)";
    logoBig.style.transition = "transform .3s"
})

logoBig.addEventListener("mouseleave", () => {
    logoBig.style.transform = "scale(1)"
})


const keys = document.querySelector(".intro img")

keys.addEventListener("click", () => {
    keys.style.transform = "scale(1.1)";
    keys.style.transistion = "transform .3s"
})

keys.addEventListener("dblclick", () => {
    keys.style.transform = "scale(1)";
    keys.style.transition = "transform .2";
})


const scrollText = document.querySelector(".intro h2")

window.addEventListener("scroll", () => {
    scrollText.style.color = "red"
    scrollText.style.transition = "transform .2";
})



const resizeImage =
document.querySelector(".intro img");

window.addEventListener('resize', () => {
resizeImage.src = "https://c4.wallpaperflare.com/wallpaper/63/433/185/desert-truck-bus-fallout-wallpaper-preview.jpg"
})




const mapimg = document.querySelector(".text-content img")

mapimg.addEventListener("drag", () => {
    mapimg.style.transform= "scale(2)";
})



