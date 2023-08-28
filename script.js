// // document.getElementById('burger-menu').addEventListener('click', function() {
// //   var menu = document.getElementById('menu');
// //   var button = document.getElementById('menuButton');
// //   var isExpanded = menu.classList.toggle('hidden');
// //   button.setAttribute('aria-expanded', isExpanded);
// // });

// document.addEventListener("DOMContentLoaded", function() {
//   const burgerMenu = document.getElementById("burger-menu");
//   const mobileMenu = document.getElementById("mobile-menu-hidden");

//   burgerMenu.addEventListener("click", function() {
//     mobileMenu.classList.toggle("burger-menu");
//   });
// });

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

   if (Math.abs(lastScrollTop - scrollTop) <= delta) {
       return; // Return if the threshold isn't reached
   }

   if (scrollTop > lastScrollTop) {
       header.classList.add('header-hidden');
   } else {
       header.classList.remove('header-hidden');
   }

   lastScrollTop = scrollTop;
});

