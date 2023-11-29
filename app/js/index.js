// Hamburger
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navigation-top');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
// Hamburger end

// swiper

const swiper = new Swiper(".swiper", {
    spaseBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    mouseWhell: true,
    keyboard: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
    },
})

// swiper End