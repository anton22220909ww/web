document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.s-gallery-container', {
    loop: true,
    navigation: {
      nextEl: '.s-gallery-container-next',
      prevEl: '.s-gallery-container-prev',
    },
  });
})


const navMenuClose = () => {
  document.querySelector(".nav-menu").classList.remove("nav-menu--active")
  document.querySelector("body").style.overflow = 'auto'
}

const navMenuOpen = () => {
  document.querySelector(".nav-menu").classList.add("nav-menu--active")
  document.querySelector("body").style.overflow = 'hidden'

}