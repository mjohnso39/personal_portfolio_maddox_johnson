// ------------------------------------------------------
// app.js
// Toggles the mobile nav menu
// ------------------------------------------------------

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Close the mobile menu automatically after clicking a link,
// so the menu doesn't stay open once you've navigated.
const links = navLinks.querySelectorAll("a");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});
