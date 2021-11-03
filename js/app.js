document.addEventListener("DOMContentLoaded", () =>{
  /*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close'),
main = document.querySelector("main"),
header = document.querySelector("header")

// SHOW
toggleMenu.addEventListener('click', ()=>{
navMenu.classList.toggle('show')
main.style.display = "none"

})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
navMenu.classList.remove('show')
main.style.display = "block"
})
  
})