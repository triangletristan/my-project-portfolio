let button1 = document.getElementById("button1");
let CMU = document.getElementById("CMU");
let button2 = document.getElementById("button2");
let DC = document.getElementById("DC");
let button3 = document.getElementById("button3");
let GH = document.getElementById("GH");
let button4 = document.getElementById("button4");
let S = document.getElementById("S");
let button5 = document.getElementById("button5");
let K = document.getElementById("K");
let button6 = document.getElementById("button6");
let SP = document.getElementById("SP");
let button7 = document.getElementById("button7");
let L = document.getElementById("L");
let button8 = document.getElementById("button8");
let AH = document.getElementById("AH");
let button9 = document.getElementById("button9");
let APCC = document.getElementById("APCC");
var clickbutton1 = false
var clickbutton2 = false
var clickbutton3 = false
var clickbutton4 = false
var clickbutton5 = false
var clickbutton6 = false
var clickbutton7 = false
var clickbutton8 = false
var clickbutton9 = false


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
  if (number == 5){
    if (clickbutton5 === false){
      button5.innerText = 'Keychain Project (2023)   v ';
      clickbutton5 = true;
      K.style.display ="block";
    } else {
      button5.innerText = 'Keychain Project (2023)   < ';
      clickbutton5 = false;
      K.style.display ="none";
    }
  }
  if (number == 6){
    if (clickbutton6 === false){
      button6.innerText = 'Spongebob Train Project (2023)   v ';
      clickbutton6 = true;
      SP.style.display ="block";
    } else {
      button6.innerText = 'Spongebob Train Project (2023)   < ';
      clickbutton6 = false;
      SP.style.display ="none";
    }
  }
  if (number == 7){
    if (clickbutton7 === false){
      button7.innerText = 'Lightsaber Project (2024)   v ';
      clickbutton7 = true;
      L.style.display ="block";
    } else {
      button7.innerText = 'Lightsaber Project (2024)   < ';
      clickbutton7 = false;
      L.style.display ="none";
    }
  }
  if (number == 8){
    if (clickbutton8 === false){
      button8.innerText = 'Air-Hockey Machine Project (2024)   v ';
      clickbutton8 = true;
      AH.style.display ="block";
    } else {
      button8.innerText = 'Air-Hockey Machine Project (2024)   < ';
      clickbutton8 = false;
      AH.style.display ="none";
    }
  }
  if (number == 9){
    if (clickbutton9 === false){
      button9.innerText = 'AP Calculus Capstone Project (2024)   v ';
      clickbutton9 = true;
      APCC.style.display ="block";
    } else {
      button9.innerText = 'AP Calculus Capstone Project (2024)   < ';
      clickbutton9 = false;
      APCC.style.display ="none";
    }
  }
}
