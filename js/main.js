let bottom = document.querySelector(".navBottom"),
    close = document.querySelector(".navClose"),
    list = document.querySelector(".navList"),
    link = document.querySelectorAll(".navLink");

/*===== MENU SHOW =====*/
if (bottom) {
    bottom.addEventListener("click", function () {
        list.classList.add("showMenu")
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
