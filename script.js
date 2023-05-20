const hamburgerBtn = document.querySelector(".navigation__hamburger")
const menuContainer = document.querySelector(".navigation__list")
const header = document.querySelector(".header")
const menuLinks = document.querySelectorAll(".navigation__container-link")

hamburgerBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("navigation__list--show")
  header.classList.toggle("header-dropdown")
  hamburgerBtn.classList.toggle("navigation__hamburger--pinned")

  menuLinks.forEach((item) => {
    item.classList.toggle("navigation__container-link--active")
  })
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled")
  } else {
    header.classList.remove("header-scrolled")
  }
})
