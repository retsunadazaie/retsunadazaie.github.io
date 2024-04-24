//Navigation Bar 
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");

});

slides.forEach((slide) => {
    slide.classList.remove("active");
});

contents.forEach((content) => {
    content.classList.remove("active");
});

btns[manual].classList.add("active");
slides[manual].classList.add("active");
contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

//Navbar Adding Background
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header").classList.add("sticky");
    } else {
        document.querySelector("header").classList.remove("sticky");
    }
}

// Get references to the card elements
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

// Add click event listeners to each card
card1.addEventListener("click", function() {
  // Redirect user to the specified link when card 1 is clicked
  window.location.href = "https://canossaacademylipasis.orangeapps.ph/canossaacademylipa/login/student-cd73502828457d15655bbd7a63fb0bc8";
});

card2.addEventListener("click", function() {
  // Redirect user to the specified link when card 2 is clicked
  window.location.href = "https://www.genyo.com.ph/genyoportal/";
});

card3.addEventListener("click", function() {
  // Redirect user to the specified link when card 3 is clicked
  window.location.href = "https://canossaacademylipa.orangeapps.ph/oa_school/";
});

// Get references to the buttons
const button2 = document.getElementById("button2");
// Add event listeners to each button
button2.addEventListener("click", function() {
  // Redirect user to the specified link when button 2 is clicked
  window.location.href = "https://canossaacademylipasis.orangeapps.ph/canossaacademylipa/";
});

//DROPDOWN
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () =>{
  dropdown.classList.toggle('active');
});
