// This is a prototype! I am working on making a slider for every project card section

Images = [
    "./assets/images/project (1).jpg",
    "./assets/images/project (2).jpg",
    "./assets/images/project (3).jpg",
    "./assets/images/project (4).jpg",
    "./assets/images/project (5).jpg"
    ]


let timeoutID;

function sliderTimer() {
    timeoutID = setTimeout(delayedFunc, 4000);
}

function delayedFunc() {
    slideShow("right");
    sliderTimer();
}

sliderTimer();

document.querySelector("#leftButton").onclick=function() {
    slideShow("left");
}

document.querySelector("#rightButton").onclick=function() {
    slideShow("right");
}

var index = 0;
var choiceVar = 0;

function slideShow(direction) {
    if(direction == "right") {
        if(index == Images.length-1) {
            index = -1;
        }
        index++;
    } else {
        if(index <= 0) {
            index = Images.length;
        }
        index--;
    }
    choiceVar += 1
    document.querySelector("#imageSlider").src = Images[index];
}

document.querySelector(".line").classList.add("fill-width");
