//Navigation Bar 

//MODAL1

const modal= document.querySelector('.modal');
const openModal= document.querySelector('.open-button');
const closeModal= document.querySelector('.close-button');

openModal.addEventListener('click', () => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});

//MODAL2

const modal2= document.querySelector('.modal2');
const openModal2= document.querySelector('.open-button2');
const closeModal2= document.getElementById('close2');

openModal2.addEventListener('click', () => {
  modal2.showModal();
});

closeModal2.addEventListener('click', function() {
  modal2.close();
});

//MODAL3

const modal3= document.querySelector('.modal3');
const openModal3= document.querySelector('.open-button3');
const closeModal3= document.getElementById('close3');

openModal3.addEventListener('click', () => {
  modal3.showModal();
});

closeModal3.addEventListener('click', function() {
  modal3.close();
});

//MODAL4
const modal4= document.querySelector('.modal4');
const openModal4= document.querySelector('.open-button4');
const closeModal4= document.getElementById('close4');

openModal4.addEventListener('click', () => {
  modal4.showModal();
});

closeModal4.addEventListener('click', function() {
  modal4.close();
});


//MODAL5
const modal5= document.querySelector('.modal5');
const openModal5= document.querySelector('.open-button5');
const closeModal5= document.getElementById('close5');

openModal5.addEventListener('click', () => {
  modal5.showModal();
});

closeModal5.addEventListener('click', function() {
  modal5.close();
});

//MODAL6

const modal6= document.querySelector('.modal6');
const openModal6= document.querySelector('.open-button6');
const closeModal6= document.getElementById('close6');

openModal6.addEventListener('click', () => {
  modal6.showModal();
});

closeModal6.addEventListener('click', function() {
  modal6.close();
});

//MODAL7

const modal7= document.querySelector('.modal7');
const openModal7= document.querySelector('.open-button7');
const closeModal7= document.getElementById('close7');

openModal7.addEventListener('click', () => {
  modal7.showModal();
});

closeModal7.addEventListener('click', function() {
  modal7.close();
});


//MODAL8
const modal8= document.querySelector('.modal8');
const openModal8= document.querySelector('.open-button8');
const closeModal8= document.getElementById('close8');

openModal8.addEventListener('click', () => {
  modal8.showModal();
});

closeModal8.addEventListener('click', function() {
  modal8.close();
});



//---------------------------------------
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





const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom  = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom ) {
        box.classList.add('show');
    } else{
        box.classList.remove('show');
    }
} );
}     



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
  if (window.scrollY > 600) {
    buttonTop.classList.remove('hidden');
  } else {
    buttonTop.classList.add('hidden');
  }








});
