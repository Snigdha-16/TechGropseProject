


const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});

function toggleText(index) {
   var moreTexts = document.getElementsByClassName("moreText");
   var buttons = document.getElementsByClassName("toggleButton");
 
   if (moreTexts[index].style.display === "none") {
     moreTexts[index].style.display = "inline";
     buttons[index].textContent = "Read Less";
   } else {
     moreTexts[index].style.display = "none";
     buttons[index].textContent = "Read More";
   }
 }
 
 // Initialize all sections to hide the more text
 document.addEventListener("DOMContentLoaded", function() {
   var moreTexts = document.getElementsByClassName("moreText");
   for (var i = 0; i < moreTexts.length; i++) {
     moreTexts[i].style.display = "none";
   }
 });