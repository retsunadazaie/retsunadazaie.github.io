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


// Function to handle button click event
document.getElementById("readmore_button").onclick = function() {
  // Find the position of the h1 element with class button1
  var headingElement = document.querySelector('.readmore-button');
  var position = headingElement.getBoundingClientRect().top + window.scrollY;

  // Scroll to the position of the heading element smoothly
  window.scrollTo({
      top: 625,
      behavior: 'smooth'
  });
};
  