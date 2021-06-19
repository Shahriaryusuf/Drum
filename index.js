var numOfDrumButtons = document.querySelectorAll(".drum").length; // here length of array is found


// by creating a loop here we are adding event listeners to all buttons with the same class
// we jus t dont have to write the code 7 times

//detecting button press

var i = 0;

while (i < numOfDrumButtons) {

  document.querySelectorAll(".drum")[i].addEventListener("click", drumClicked);

  function drumClicked() {
   console.log(this); //check this log to understand the use of this

  var buttonInnerHTML = this.innerHTML; //get the interhtml of the button

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  } //function end

  i++;
}//while end

//detecting keyboardpress

document.addEventListener("keypress",function(event){

makeSound(event.key);

buttonAnimation(event.key);


});


function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;


    default: console.log("nothing Happened");

  }//switch end

}

//button animation function 

function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);

activeButton.classList.add("pressed");

setTimeout(removeClassTimer, 100);


function removeClassTimer(){
  activeButton.classList.remove("pressed")
  }

}



/* for(var i = 0; i<numOfButtons; i++){

 document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  alert("hello");

  });

} */

//using for loops example

/*for(var i = 0; i < numOfButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", drumClicked);

  function drumClicked(){
  alert("i was drumClicked");

  }

}*/
