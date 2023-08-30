document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  burgerMenu.addEventListener("click", function () {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
    } else {
      mobileMenu.classList.add("active");
    }
  });
});

let lastScrollTop = 0;
const header = document.querySelector('.container-header');
const delta = 5;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Ignore rubber banding in mobile browsers
    if (scrollTop < 0 || scrollTop > (document.documentElement.scrollHeight - document.documentElement.clientHeight)) {
        return;
    }

    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return; // Return if the threshold isn't reached
    }

    if (scrollTop > lastScrollTop) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
        // If you want the header to remain hidden until near the top, then uncomment the below block
        /*
        if (scrollTop < 50) {
            header.classList.remove('header-hidden');
        }
        */
    }

    lastScrollTop = scrollTop;
});
