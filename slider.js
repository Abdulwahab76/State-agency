document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // centeredSlides: true,
        breakpoints: {
            // Set breakpoints for different screen sizes
            340: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
});