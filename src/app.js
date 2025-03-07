import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //variables
  let string1=["Mi perro ","Mi hermano ","Mi gata ","Mi esposa ","Mi mama ","Mi padre ","Mi jefe ","Mi compañero ","El vecino ","Un policia "];
  let string2=["se comio","orino ","araño ","quemo ","revento ","escondio ","lanzo ","pinto ","robo ","arrastro "];
  let string3=["mi tarea","mi trabajo ","mi entrega ","mi codigo ","mi camisa ","el uniforme ","la laptop ","los apuntes ","mis zapatos ","las llaves "];
  let string4=["hace muchisimo","anoche","esta mañana","el domingo pasado","en mi fiesta","en mi cumpleaños","hace mucho","hace dias ","hace un mes ","ayer"];
  //placeholder
  let stringRandom=[];
  //texto a enviar
  let stringToSend="";

  //funcion para random number 
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  //funcion para generar frase random
  function randomGenerator(){
    for(let i= 0; i <1;i++){      
      stringRandom= string1[getRndInteger(1,10)];
      stringRandom= stringRandom + " " + string2[getRndInteger(1,10)];
      stringRandom= stringRandom + " " + string3[getRndInteger(1,10)];
      stringRandom= stringRandom + " " + string4[getRndInteger(1,10)];   

    }
  }
  //convertir array a text
  function arrayToText(){
    for(let i= 0; i <stringRandom.length;i++){
      stringToSend= stringToSend  + stringRandom[i];
    }
  }
//llamadas
randomGenerator();
arrayToText();
//envio
  document.getElementById("excuse").innerHTML = stringToSend;
  console.log("Hello Rigo from the console!");
};
