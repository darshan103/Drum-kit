var numberofButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttoninnerHTML = this.innerHTML;
        makesound(buttoninnerHTML);
        addAnimation(buttoninnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    makesound(event.key);
    addAnimation(event.key);
});

function makesound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3"); // buffers automatically when created
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3"); // buffers automatically when created
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3"); // buffers automatically when created
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3"); // buffers automatically when created
            tom4.play();
            break;

        case "j":
            var tom5 = new Audio("sounds/crash.mp3"); // buffers automatically when created
            tom5.play();
            break;

        case "k":
            var tom6 = new Audio("sounds/snare.mp3"); // buffers automatically when created
            tom6.play();
            break;

        case "l":
            var tom7 = new Audio("sounds/snare.mp3"); // buffers automatically when created
            tom7.play();
            break;

        default:
            console.log(innerHTML);
            break;
    }
}

function addAnimation(currentkey) {
    var aniButton = document.querySelector("." + currentkey);
    aniButton.classList.add("pressed");
    setTimeout(function() {
        aniButton.classList.remove("pressed");
    }, 100);
}