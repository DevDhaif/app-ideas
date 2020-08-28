"use strict";

var textColor = document.getElementById('hh').style.color.value;

function on() {
  document.getElementById('hh').style.color = "white";
  console.log(document.getElementsByClassName("circle"));
  var textColor = "green"; // document.getElementById('lamp2').style.animation="glow 1s ease-in-out infinite alternate"  ;
  // document.getElementById('lamp1').style.animation="glow 1s ease-in-out infinite alternate"  ;

  for (var i = 0; i < document.getElementsByClassName("circle").length; i++) {
    document.getElementsByClassName("circle")[i].style.animation = "glow 1s ease-in-out infinite alternate";
  } // document.getElementById('lamp2').className='test';
  // document.getElementById('hh').style.color=textColor;
  // document.getElementById('red').style.background ="green";


  document.body.style.background = "#463A37";
}

function off() {
  document.body.style.background = "#D6BDB7";

  for (var i = 0; i < document.getElementsByClassName("circle").length; i++) {
    document.getElementsByClassName("circle")[i].style.animation = "none";
  }

  document.getElementById('hh').style.color = "black";
  document.getElementById('red').style.background = "red";
}