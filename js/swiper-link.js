var swiper = new Swiper(".main-slider", {
    autoplay: {
        delay: 3000,
    },
    watchOverflow: true,
    speed: 1000,
    loop: true,
});
var swiper = new Swiper(".doctors-slider", {
    autoplay: {
        delay: 3000,
    },
    watchOverflow: true,
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 30,

    breakpoints: {
        100: {
            slidesPerView: 1,
        },

        500: {
            slidesPerView: 1,
        },

        600: {
            slidesPerView: 2,
        },

        800: {
            slidesPerView: 2,
        },

        1280: {
            slidesPerView: 2,
        },

        1281: {
            slidesPerView: 2
        }
    }
});
var swiper = new Swiper(".slider-min", {
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
    },
    watchOverflow: true,
    speed: 1000,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".slider-min-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".slider-min-arrow-next",
        prevEl: ".slider-min-arrow-prev",
    },
    breakpoints: {
        100: {
            slidesPerView: 3,
            spaceBetween: 10,
        },

        500: {
            slidesPerView: 3,
            spaceBetween: 15,
        },

        600: {
            slidesPerView: 3,
            spaceBetween: 15,
        },

        800: {
            slidesPerView: 4,
            spaceBetween: 10
        },

        1280: {
            slidesPerView: 4,
            spaceBetween: 10
        },

        1281: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }


});
var swiper2 = new Swiper(".mySwiper2", {
    watchOverflow: true,
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    navigation: {
        nextEl: ".slider-min-arrow-next",
        prevEl: ".slider-min-arrow-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});