window.onload = function () {
  const swiper = new Swiper(".swiper", {
      // direction: 'vertical',
      loop: true,
      slidesPerView: 5,
      parallax: true,
      speed: 1000,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        576: {
          slidesPerView: 'auto',
        },
        992: {
          slidesPerView: 'auto',
        }
    }
  });
};
