// function playAudio()
// {
//   var aud1=new Audio("sounds/tom-1.mp3");
//   aud1.play();
// }

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var HTMLvariable = this.innerHTML;
    animateLetter(HTMLvariable);
    makeSound(HTMLvariable);
  });

}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  animateLetter(event.key);
});

function makeSound(letter)
{
  switch (letter) {
    case "w":
      var aud1 = new Audio("sounds/crash.mp3");
      aud1.play();
      break;
    case "a":
      var aud1 = new Audio("sounds/kick-bass.mp3");
      aud1.play();
      break;
    case "s":
      var aud1 = new Audio("sounds/snare.mp3");
      aud1.play();
      break;
    case "d":
      var aud1 = new Audio("sounds/tom-1.mp3");
      aud1.play();
      break;
    case "j":
      var aud1 = new Audio("sounds/tom-2.mp3");
      aud1.play();
      break;
    case "k":
      var aud1 = new Audio("sounds/tom-3.mp3");
      aud1.play();
      break;
    case "l":
      var aud1 = new Audio("sounds/tom-4.mp3");
      aud1.play();
      break;
    default:
      alert("HMMMMMM Don't do this 😤😤");
  }
}

function animateLetter(letter)
{
  document.querySelector("."+letter).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+letter).classList.remove("pressed");
  },100);
}
