

document.querySelector(".container").addEventListener("click", function () {
    var audio = new Audio("./click-sound.wav");
    audio.play();
    theNight();
    animation();
});

function theNight() {
    document.querySelector(".container").classList.toggle("night-container");
    document.querySelector(".circle").classList.toggle("night-circle");
    document.querySelector("body").classList.toggle("night-body");
    document.querySelector("p").classList.toggle("night-p");

    if (document.querySelector("p").innerHTML === "ON") {
        document.querySelector("p").innerHTML = "OFF"
    } else {
        document.querySelector("p").innerHTML = "ON"
    }
}

function animation() {
    document.querySelector(".container").classList.add("pressed");
    setTimeout(function () {
        document.querySelector(".container").classList.remove("pressed");
    }, 100)
}

var classlist = document.querySelector("p").classList;
var classArray = Array.from(classlist);