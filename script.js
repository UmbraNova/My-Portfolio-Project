// This is a prototype! I am working on making aslider for every project card section

imagesOne = [
    "./assets/images/boliviainteligente-k4aqqqBBm1Y-unsplash.jpg",
    "./assets/images/mike-u--fW75WfpAfc-unsplash.jpg",
    "./assets/images/milad-fakurian-gJk9y8zKCyo-unsplash.jpg",
    "./assets/images/trent-pickering-wUPnMygSwYk-unsplash.jpg"
    ]

imagesTwo = [
    "./assets/images/risto-kokkonen-OELJMl0ZDh8-unsplash.jpg",
    "./assets/images/vackground-com--ylEAG7OrvI-unsplash.jpg",
    "./assets/images/vackground-com-SfDofjXtxHE-unsplash.jpg",
    "./assets/images/milad-fakurian-YvYwTHcXaxI-unsplash.jpg"
    ]

allImages = [imagesOne, imagesTwo]

// document.getElementsByClassName("leftArrow")[0].onclick=function() {
//     slideShow("left");
// }

// document.getElementsByClassName("rightArrow")[0].onclick=function() {
//     slideShow("right");
// }

var imgIndex = 1;


var index = 0;

function slideShow(direction) {
    if(direction == 'right') {
        if(index == allImages[imgIndex].length-1) {
            index = -1;
        }
        index++;
    } else {
        if(index <= 0) {
            index = allImages[imgIndex].length;
        }
        index--;
    }
    document.getElementsByClassName("cardImage 2")[0].src = allImages[imgIndex][index];

}