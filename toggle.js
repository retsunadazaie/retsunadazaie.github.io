// Get the menu button and the navbar
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

// Add click event listener to the menu button
menuBtn.addEventListener("click", () => {
    // Toggle the 'active' class on both the menu button and the navbar
    menuBtn.classList.toggle("active");
    navbar.classList.toggle("active");
});
