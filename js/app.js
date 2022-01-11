/* #Header
    ======================================================= */

// Scroll BG Color change
const header = document.querySelector('.header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  });

  if (window.scrollY > 0) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
}

/* #Projects Slider
================================================== */
if (document.querySelector(".projects-slider .swiper")) {
  new Swiper(".projects-slider .swiper", {
    navigation: {
      nextEl: ".projects-slider .next",
      prevEl: ".projects-slider .prev",
    },
    pagination: {
      el: ".projects-slider .swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.36,
        loop: true,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 3.25,
        loop: false,
        centeredSlides: false,
      }
    }
  });
}