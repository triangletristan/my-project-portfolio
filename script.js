let button1 = document.getElementById("button1");
let CMU = document.getElementById("CMU");
let button2 = document.getElementById("button2");
let DC = document.getElementById("DC");
let button3 = document.getElementById("button3");
let GH = document.getElementById("GH");
let button4 = document.getElementById("button4");
let S = document.getElementById("S");
var clickbutton1 = false
var clickbutton2 = false
var clickbutton3 = false
var clickbutton4 = false
function IsClicked(number){
  if (number == 1){
    if (clickbutton1 === false){
      button1.innerText = 'CMU Project (2020)   v ';
      clickbutton1 = true;
      CMU.style.display ="block";
    } else {
      button1.innerText = 'CMU Project (2020)   < ';
      clickbutton1 = false;
      CMU.style.display ="none";
    }
  }
  if (number == 2){
    if (clickbutton2 === false){
      button2.innerText = 'Driving Chaffeur Project (2022)   v ';
      clickbutton2 = true;
      DC.style.display ="block";
    } else {
      button2.innerText = 'Driving Chaffeur Project (2022)   < ';
      clickbutton2 = false;
      DC.style.display ="none";
    }
  }
  if (number == 3){
    if (clickbutton3 === false){
      button3.innerText = '"Grandma' + "'s" + ' House" Project (2022)   v ';
      clickbutton3 = true;
      GH.style.display ="block";
    } else {
      button3.innerText = '"Grandma' + "'s" + ' House" Project (2022)   < ';
      clickbutton3 = false;
      GH.style.display ="none";
    }
  }
  if (number == 4){
    if (clickbutton4 === false){
      button4.innerText = 'Sharpen Project (2023)   v ';
      clickbutton4 = true;
      S.style.display ="block";
    } else {
      button4.innerText = 'Sharpen Project (2023)   < ';
      clickbutton4 = false;
      S.style.display ="none";
    }
  }
}