//detecting button press with mouse

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)

  });
}

//detecting key pressed with keyboard
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);

})

function makeSound(key) {

  switch (key) {

    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "s":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "d":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    default:
      break;

  }

}


function buttonAnimation(currentKey) {
  //get the active button
  var activeButton = document.querySelector("." + currentKey);

  //add css class styling .pressed to it
  activeButton.classList.add("pressed");
  //remove styling after a short time
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);


}
