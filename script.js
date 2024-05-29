document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const body = document.querySelector("body");

  burgerMenu.addEventListener("click", function () {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      body.style.overflow = "auto";
    } else {
      mobileMenu.classList.add("active");
      body.style.overflow = "hidden";
    }
  });
});


let lastScrollTop = 0;
let scrolledDistance = 0; // New variable to keep track of the scrolled distance
const header = document.querySelector('.container-header');
const delta = 5;
const scrollThreshold = 300; // New variable, change the value to adjust the scroll threshold

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Ignore rubber banding in mobile browsers
    if (scrollTop < 0 || scrollTop > (document.documentElement.scrollHeight - document.documentElement.clientHeight)) {
        return;
    }

    let diff = Math.abs(lastScrollTop - scrollTop); // Calculate the scroll difference

    if (diff <= delta) {
        return; // Return if the threshold isn't reached
    }

    // Update the scrolled distance based on the direction
    if (scrollTop > lastScrollTop) {
        scrolledDistance += diff;
        if (scrolledDistance >= scrollThreshold) {
            header.classList.add('header-hidden');
            scrolledDistance = 0; // Reset the scrolled distance
        }
    } else {
        scrolledDistance -= diff;
        if (scrolledDistance <= -scrollThreshold) {
            header.classList.remove('header-hidden');
            scrolledDistance = 0; // Reset the scrolled distance
        }
    }

    lastScrollTop = scrollTop; // Update lastScrollTop for the next iteration
  });


