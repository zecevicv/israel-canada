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