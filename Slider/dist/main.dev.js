"use strict";

var slides = document.querySelectorAll('.slide');
var next = document.querySelector('#next');
var prev = document.querySelector('#prev');
var auto = true;
var intervalTime = 4000;
var slideInterval;

var nextSlide = function nextSlide() {
  //Get current class
  var current = document.querySelector('.current'); //Remove current class 

  current.classList.remove('.current'); //Check for next slide:

  if (current.nextElementSibling) {
    //Add current to next sibling:
    current.nextElementSibling.classList.add('current');
  } else {
    //Add current to start:
    slides[0].classList.add('current');
  }

  setTimeout(function () {
    return current.classList.remove('current');
  });
};

var prevSlide = function prevSlide() {
  //Get current class
  var current = document.querySelector('.current'); //Remove current class 

  current.classList.remove('.current'); //Check for next slide:

  if (current.previousElementSibling) {
    //Add current to prev sibling:
    current.previousElementSibling.classList.add('current');
  } else {
    //Add current to start:
    slides[slides.length - 1].classList.add('current');
  }

  setTimeout(function () {
    return current.classList.remove('current');
  });
}; //Buttons events:


next.addEventListener('click', function (e) {
  nextSlide();
});
prev.addEventListener('click', function (e) {
  prevSlide();
}); //Auto slide:

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}