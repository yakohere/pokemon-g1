const openBtn = document.querySelector("#open-btn")
const closeBtn = document.querySelector("#close-btn")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")


openBtn.addEventListener("click", function () {
    modal.classList.toggle("close")
    overlay.classList.toggle("overlay-close")
})

closeBtn.addEventListener("click", function () {
    modal.classList.toggle("close")
    overlay.classList.toggle("overlay-close")
})

setTimeout(function() {
    modal.classList.remove("close")
    modal.classList.add("open")
}, 1000)