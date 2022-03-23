const menu = document.querySelector('#mobile-menu')
const menuLikns = document.querySelector('.navbar_menu')
const menuBtn = document.querySelector('#button')
let bg = document.querySelector("#nav")
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLikns.classList.toggle('active');
    menuBtn.classList.toggle('active');
    // bg.classList.add("bg")
})


document.addEventListener('DOMContentLoaded', function() {
    new Splide('#image-slider').mount();
});