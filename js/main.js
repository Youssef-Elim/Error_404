let bottom = document.querySelector(".navBottom"),
    close = document.querySelector(".navClose"),
    list = document.querySelector(".navList"),
    link = document.querySelectorAll(".navLink");

/*===== MENU SHOW =====*/
if (bottom) {
    bottom.addEventListener("click", function () {
        list.classList.add("showMenu")
        let error = document.querySelector(".homeData")
        error.classList.add("hide")
    })
}
/*===== MENU HIDDEN =====*/
if (close) {
    close.addEventListener("click", function () {
        list.classList.remove("showMenu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
link.forEach((e) => e.addEventListener("click", function () {
    list.classList.remove("showMenu")
}))

const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal(`.homeData`, { origin: 'top', delay: 400 })
sr.reveal(`.homeImg`, { origin: 'bottom', delay: 600 })
sr.reveal(`.homeFooter`, { origin: 'bottom', delay: 800 })

let error = document.querySelector(".homeData")
error.style.transform = "inherit !important"

error.classList.add("hide")