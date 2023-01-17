
//first way to allow sound and animation on click 
var noOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var keyInnerHtml = this.innerHTML;
        playSound(keyInnerHtml);
        animationEffect(keyInnerHtml);
    });
}

//second way to allow sound and animation on keypress from keyboard
document.addEventListener("keypress", function (event) {
    playSound(event.key);
    animationEffect(event.key);
});

//define function playsound
function playSound(key) {
    switch (key) {
        case "w":
            var aud1 = new Audio("sounds/crash.mp3");
            aud1.play();
            break;
        case "a":
            var aud2 = new Audio("sounds/kick-bass.mp3");
            aud2.play();
            break;
        case "s":
            var aud3 = new Audio("sounds/snare.mp3");
            aud3.play();
            break;
        case "d":
            var aud4 = new Audio("sounds/tom-1.mp3");
            aud4.play();
            break;
        case "j":
            var aud5 = new Audio("sounds/tom-2.mp3");
            aud5.play();
            break;
        case "k":
            var aud6 = new Audio("sounds/tom-3.mp3");
            aud6.play();
            break;
        case "l":
            var aud7 = new Audio("sounds/tom-4.mp3");
            aud7.play();
            break;
        default:
            console.log("Choose properly");
            break;
        
    }
}

//define function animation effects
function animationEffect(key)
{
    var activee=document.querySelector("."+key);
    //adding class "pressed" along with the respective ".key" classes to provide animation css on keypress/click
    activee.classList.add("pressed");
    //removing class "pressed" from with the respective ".key" classes to remove animation css after 100ms of keypress/click
    setTimeout(function(){
        activee.classList.remove("pressed");
    },100);
}