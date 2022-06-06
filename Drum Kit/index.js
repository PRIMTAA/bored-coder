var btnL = document.querySelectorAll(".drum").length;

//detecting mouse press
for (var i = 0; i < btnL; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var btnname = this.innerHTML;
    keyboardclick(btnname);
    btnanimation(btnname);
  });

}


//detecting keyboard press
document.addEventListener("keydown", function(event) {
  keyboardclick(event.key);
  btnanimation(event.key);
});


//playing audio
function keyboardclick(key) {
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
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(btnname);
  }
}

//showing animation
function btnanimation(curKey) {
  var pressedKey = document.querySelector('.' + curKey);
  pressedKey.classList.add("pressed");

  setTimeout(function() {
    pressedKey.classList.remove("pressed");
  }, 100);

}
