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

//Apply Button

const apply_button = document.getElementById("apply_button");

apply_button.addEventListener("click", function() {
    // Redirect user to the specified link when card 1 is clicked
    window.location.href = "https://canossaacademylipasis.orangeapps.ph/canossaacademylipa/admission";
  });
  


  // eto ay js ng button to top pls
// Get the button element
const buttonTop = document.getElementById('buttontop');

// Add a click event listener to the button
buttonTop.addEventListener('click', () => {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Hide the button by adding the 'hidden' class
  buttonTop.classList.add('hidden');
});

// Show the button when the user scrolls
window.addEventListener('scroll', () => {
  // If the user scrolls beyond 100 pixels from the top, show the button
  if (window.scrollY > 800) {
    buttonTop.classList.remove('hidden');
  } else {
    buttonTop.classList.add('hidden');
  }
});
