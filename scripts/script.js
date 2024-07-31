const navBtn = document.querySelector(".nav__btn")
const navlist = document.querySelector(".phone_list")
let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navlist.classList.remove("phone_list--open")
        navOpen = false
    } else {
        navBtn.classList.add("nav__btn--open")
        navlist.classList.add("phone_list--open")
        navOpen = true
    }
})