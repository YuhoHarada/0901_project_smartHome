document.getElementById("menu").addEventListener("click", () => {
    document.querySelector("nav").style.right = "0"
    document.querySelector("nav").style.width = "100vw"
})

document.querySelector("nav").addEventListener("click", () => {
    document.querySelector("nav").style.width = "300px"
    document.querySelector("nav").style.right = "-300px"
})

