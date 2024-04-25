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




// Function to handle button click event
document.getElementById("readmore_button").onclick = function() {
  // Find the position of the h1 element with class button1
  var headingElement = document.querySelector('.readmore-button');
  var position = headingElement.getBoundingClientRect().top + window.scrollY;

  // Scroll to the position of the heading element smoothly
  window.scrollTo({
      top: 610,
      behavior: 'smooth'
  });
};
  

  
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
  if (window.scrollY > 1200) {
    buttonTop.classList.remove('hidden');
  } else {
    buttonTop.classList.add('hidden');
  }
});